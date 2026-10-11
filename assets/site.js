(() => {
  const P = window.CC_PRODUCTS;
  const byId = new Map(P.map((p) => [p.id, p]));
  const root = document.documentElement;
  const me = document.currentScript;
  const page = me.dataset.page;
  const pre = me.dataset.pre || "";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const BN = "০১২৩৪৫৬৭৮৯";
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (page === "home") {
    const h = location.hash.slice(1);
    if (byId.has(h)) { location.replace(`${pre}p/${h}/`); return; }
  }

  let lang = "bn";
  try { const s = localStorage.getItem("cc-lang"); if (s === "en" || s === "bn") lang = s; } catch (e) {}
  const num = (n) => (lang === "bn" ? String(n).replace(/\d/g, (d) => BN[d]) : String(n));
  const secs = (ms) => (ms < 1000 ? `${num(Math.max(1, Math.round(ms)))} ${lang === "bn" ? "মি.সে." : "ms"}` : `${num((ms / 1000).toFixed(1))} ${lang === "bn" ? "সে." : "s"}`);

  function applyLang() {
    root.lang = lang;
    root.dataset.lang = lang;
    $$("[data-en]").forEach((el) => {
      if (el.dataset.bn === undefined) el.dataset.bn = el.textContent;
      el.textContent = lang === "en" ? el.dataset.en : el.dataset.bn;
    });
    const msg = lang === "bn" ? "আসসালামু আলাইকুম। আমার ব্যবসার জন্য সফটওয়্যার নিয়ে জানতে চাই।" : "Hello, I'd like to talk about software for my business.";
    $$("[data-wa]").forEach((a) => { a.href = `https://wa.me/8801731304074?text=${encodeURIComponent(msg)}`; });
    paintChecks();
  }

  const pulse = new Map();
  const demos = P.filter((p) => p.demo && (page === "home" || p.id === document.body.dataset.id));

  function verdict(p) {
    const r = pulse.get(p.id);
    if (!r) return { cls: "is-wait", short: lang === "bn" ? "যাচাই হচ্ছে…" : "checking…" };
    if (r.state === "up") return { cls: "is-up", short: lang === "bn" ? `চালু · ${secs(r.ms)}` : `up · ${secs(r.ms)}` };
    if (r.state === "srv") return { cls: "is-srv", short: lang === "bn" ? `সার্ভার সাড়া দিল · ${secs(r.ms)}` : `server answered · ${secs(r.ms)}` };
    return { cls: "is-down", short: lang === "bn" ? "সাড়া পাইনি" : "no answer" };
  }

  function paintChecks() {
    const all = demos;
    const done = all.filter((p) => pulse.has(p.id));
    const ok = done.filter((p) => pulse.get(p.id).state !== "down").length;

    const check = $("#check");
    if (check) {
      if (done.length < all.length) {
        check.className = "check is-wait";
        check.textContent = lang === "bn" ? `আপনার ডিভাইস থেকে এখনই ${num(all.length)}টা ডেমো যাচাই হচ্ছে… ${num(done.length)}/${num(all.length)}` : `Checking ${all.length} demos from your device right now… ${done.length}/${all.length}`;
      } else {
        check.className = `check ${ok === all.length ? "is-up" : "is-part"}`;
        check.textContent = lang === "bn" ? `এইমাত্র আপনার ডিভাইস থেকে ${num(all.length)}টা ডেমো যাচাই করা হলো: ${num(ok)}টা সাড়া দিচ্ছে।` : `Just checked ${all.length} demos from your own device: ${ok} are answering.`;
      }
    }

    $$(".board-rows li").forEach((li) => {
      const v = verdict(byId.get(li.dataset.id));
      const st = $(".b-state", li);
      st.className = `b-state ${v.cls}`;
      st.textContent = v.short;
      st.dataset.bn = st.dataset.en = v.short;
    });
    const sum = $("#board-sum");
    if (sum) sum.textContent = done.length === all.length ? `${num(ok)}/${num(all.length)}` : "";

    const pl = $("#pulse");
    if (pl) {
      const p = byId.get(document.body.dataset.id);
      const r = pulse.get(p.id);
      pl.className = `pulse ${verdict(p).cls}`;
      if (!r) pl.textContent = lang === "bn" ? "চালু আছে কিনা, আপনার ডিভাইস থেকে এইমাত্র যাচাই করছি…" : "Checking from your device whether it's up…";
      else if (r.state === "up") pl.textContent = lang === "bn" ? `আপনার ডিভাইস থেকে এইমাত্র যাচাই করলাম: চালু আছে, সাড়া দিল ${secs(r.ms)}-এ।` : `Checked just now from your device: it's up, answered in ${secs(r.ms)}.`;
      else if (r.state === "srv") pl.textContent = lang === "bn" ? `আপনার ডিভাইস থেকে এইমাত্র যাচাই করলাম: সার্ভার সাড়া দিল ${secs(r.ms)}-এ।` : `Checked just now from your device: the server answered in ${secs(r.ms)}.`;
      else pl.textContent = lang === "bn" ? "এই মুহূর্তে সাড়া পেলাম না। ফোন করুন, আমরা খুলে দেখাব।" : "No answer right now. Call us and we'll open it for you.";
    }
  }

  function probe(p) {
    const t0 = performance.now();
    const done = (state) => { pulse.set(p.id, { state, ms: performance.now() - t0 }); paintChecks(); };
    if (p.probe) {
      const img = new Image();
      const timer = setTimeout(() => { img.onload = img.onerror = null; done("down"); }, 9000);
      img.onload = () => { clearTimeout(timer); done("up"); };
      img.onerror = () => { clearTimeout(timer); done("down"); };
      img.src = `${new URL(p.probe, p.demo).href}?cc=${Date.now()}`;
      return;
    }
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 9000);
    fetch(p.demo, { method: "HEAD", mode: "no-cors", cache: "no-store", signal: ctl.signal })
      .then(() => done("srv"))
      .catch(() => done("down"))
      .finally(() => clearTimeout(timer));
  }

  function heroStage() {
    const stage = $("#hero-stage");
    if (!stage) return;
    const slides = $$(".slide", stage);
    const ticks = $$(".tick", stage);
    const dwell = 4500;
    stage.style.setProperty("--dwell", `${dwell}ms`);
    let i = 0, timer = null, paused = false, left = dwell, started = 0;
    const schedule = (ms) => {
      clearTimeout(timer);
      left = ms; started = performance.now();
      if (!paused && !calm) timer = setTimeout(() => show(i + 1), ms);
    };
    const show = (n) => {
      slides[i].classList.remove("is-on"); slides[i].setAttribute("aria-hidden", "true");
      ticks[i].classList.remove("is-on");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-on"); slides[i].removeAttribute("aria-hidden");
      void ticks[i].offsetWidth;
      ticks[i].classList.add("is-on");
      $$("img[loading=lazy]", slides[(i + 1) % slides.length]).forEach((im) => { im.loading = "eager"; });
      schedule(dwell);
    };
    const pause = () => { if (paused) return; paused = true; clearTimeout(timer); left -= performance.now() - started; stage.classList.add("is-paused"); };
    const resume = () => { if (!paused) return; paused = false; stage.classList.remove("is-paused"); schedule(Math.max(left, 600)); };
    ticks.forEach((t, n) => t.addEventListener("click", () => show(n)));
    stage.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") pause(); });
    stage.addEventListener("pointerleave", resume);
    stage.addEventListener("focusin", pause);
    stage.addEventListener("focusout", resume);
    document.addEventListener("visibilitychange", () => (document.hidden ? pause() : resume()));
    let sx = null;
    stage.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    }, { passive: true });
    $$("img[loading=lazy]", slides[1]).forEach((im) => { im.loading = "eager"; });
    if (calm) ticks[0].classList.remove("is-on");
    schedule(dwell);
  }

  function productStage() {
    const st = $("#pstage");
    if (!st) return;
    const frame = $(".pframe", st);
    const slides = $$(".pslide", st);
    const thumbs = $$(".pthumbs button", st);
    let i = 0;
    const show = (n) => {
      const v = $("video", slides[i]);
      if (v) v.pause();
      slides[i].classList.remove("is-on");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("is-on");
      $$("img", slides[i]).forEach((im) => { im.loading = "eager"; });
      frame.classList.toggle("is-desk", slides[i].dataset.k === "d");
      thumbs.forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
    };
    frame.classList.toggle("is-desk", slides[0]?.dataset.k === "d");
    thumbs.forEach((b, k) => b.addEventListener("click", () => show(k)));
    let sx = null;
    frame.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    frame.addEventListener("touchend", (e) => {
      if (sx === null || slides.length < 2) return;
      const dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  function dock() {
    const d = $("#dock");
    if (!d) return;
    let heroOut = false, talkIn = false;
    const set = () => d.classList.toggle("is-on", heroOut && !talkIn);
    new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; set(); }, { threshold: 0.05 }).observe($(".hero, .phero"));
    new IntersectionObserver(([e]) => { talkIn = e.isIntersecting; set(); }).observe($("#contact"));
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".lang")) {
      lang = lang === "bn" ? "en" : "bn";
      try { localStorage.setItem("cc-lang", lang); } catch (err) {}
      applyLang();
    }
  });

  applyLang();
  heroStage();
  productStage();
  dock();
  const go = () => demos.forEach(probe);
  if ("requestIdleCallback" in window) requestIdleCallback(go, { timeout: 1200 }); else setTimeout(go, 300);

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    addEventListener("load", () => navigator.serviceWorker.register(`${pre}sw.js`, { scope: pre || "./" }).catch(() => {}));
  }
})();
