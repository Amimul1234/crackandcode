(() => {
  const P = window.CC_PRODUCTS;
  const TONES = window.CC_TONES;
  const byId = new Map(P.map((p) => [p.id, p]));
  const root = document.documentElement;
  const $ = (s) => document.querySelector(s);
  const BN = "০১২৩৪৫৬৭৮৯";

  let lang = "bn";
  try {
    const saved = localStorage.getItem("cc-lang");
    if (saved === "en" || saved === "bn") lang = saved;
  } catch (e) {}

  let current = null;
  let shotIndex = 0;

  const t = (o) => (o ? o[lang] || o.bn : "");
  const num = (n) => (lang === "bn" ? String(n).replace(/\d/g, (d) => BN[d]) : String(n));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const host = (u) => { try { return new URL(u).host; } catch (e) { return ""; } };

  const ICON_OUT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8.5 8.5M17 14v4.2A1.8 1.8 0 0 1 15.2 20H5.8A1.8 1.8 0 0 1 4 18.2V8.8A1.8 1.8 0 0 1 5.8 7H10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_CALL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.6 9 3.2l1.6 4.1-2 1.4a11 11 0 0 0 6.7 6.7l1.4-2 4.1 1.6-.4 2.4a2.4 2.4 0 0 1-2.6 2C10.4 19 5 13.6 4.6 6.2a2.4 2.4 0 0 1 2-2.6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  const ICON_LOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

  function waLink(p) {
    const msg = lang === "bn"
      ? `আসসালামু আলাইকুম। আমার ${p.trade.bn} আছে, ${p.name.bn} সফটওয়্যারটা নিয়ে জানতে চাই।`
      : `Hello, I run a ${p.trade.en.toLowerCase()} and would like to know about ${p.name.en}.`;
    return `https://wa.me/880${window.CC_PHONE.slice(1)}?text=${encodeURIComponent(msg)}`;
  }

  function demoLabel(p) {
    if (p.demoLabel) return t(p.demoLabel);
    return lang === "bn" ? "ডেমো খুলে চালান" : "Open the demo";
  }

  function renderTrades() {
    $("#trades").innerHTML = P.map((p, i) =>
      `<li style="--i:${i}"><a class="trade" href="#${p.id}" data-id="${p.id}">${esc(t(p.trade))}<i class="dot dot-${p.tone}" aria-hidden="true"></i></a></li>`
    ).join("");
    $("#rail").innerHTML = P.map((p) =>
      `<li><a href="#${p.id}" data-id="${p.id}"><i class="dot dot-${p.tone}" aria-hidden="true"></i>${esc(t(p.trade))}</a></li>`
    ).join("");
  }

  function renderTally() {
    const live = P.filter((p) => p.tone !== "built" && p.demo).length;
    const real = P.filter((p) => p.tone === "real").length;
    const rows = [
      [live, lang === "bn" ? "লাইভ, এখনই খোলা যায়" : "live, open right now"],
      [P.length, lang === "bn" ? "ধরনের ব্যবসা" : "kinds of business"],
      [real, lang === "bn" ? "আসল ব্যবসায় চলছে" : "in real use"]
    ];
    $("#tally").innerHTML = rows.map(([n, l]) => `<div><dt>${l}</dt><dd>${num(n)}</dd></div>`).join("");
  }

  function shotHTML(p, s) {
    const alt = esc(t(s.c));
    const src = `assets/shots/${s.f}`;
    if (s.k === "d") {
      const h = p.demo ? host(p.demo) : (lang === "bn" ? "ব্যবসার ভেতরের সিস্টেম" : "internal system");
      return `<div class="dev-desk"><div class="dev-url">${ICON_LOCK}<span>${esc(h)}</span></div><img src="${src}" alt="${alt}" width="1440" height="900" decoding="async"></div>`;
    }
    return `<div class="dev-phone"><img src="${src}" alt="${alt}" width="780" height="1688" decoding="async"></div>`;
  }

  function paintShot() {
    const p = current;
    const frame = $("#stage-frame");
    if (!p.shots.length) {
      frame.innerHTML = `<p class="no-shot">${lang === "bn" ? "কাস্টমারের নিজের সিস্টেম, তাই স্ক্রিন গোপন রাখছি।" : "A client's own system, so the screens stay private."}</p>`;
      $("#stage-cap").textContent = "";
      return;
    }
    const s = p.shots[shotIndex];
    frame.innerHTML = shotHTML(p, s);
    frame.classList.toggle("is-desk", s.k === "d");
    $("#stage-cap").textContent = t(s.c);
    for (const [i, b] of [...$("#thumbs").children].entries()) b.setAttribute("aria-pressed", String(i === shotIndex));
  }

  function renderThumbs() {
    const p = current;
    $("#thumbs").innerHTML = p.shots.length > 1
      ? p.shots.map((s, i) => `<button type="button" data-i="${i}" aria-label="${esc(t(s.c))}" aria-pressed="${i === shotIndex}"><img src="assets/shots/${s.f}" alt="" loading="lazy" decoding="async"></button>`).join("")
      : "";
  }

  function renderProduct() {
    const p = current;
    $("#sc-trade").textContent = lang === "bn" ? `${p.trade.bn}-এর জন্য` : `For a ${p.trade.en.toLowerCase()}`;
    $("#sc-name").textContent = t(p.name);
    const st = $("#sc-status");
    st.className = `status t-${p.tone}`;
    st.innerHTML = `<i class="dot" aria-hidden="true"></i>${esc(t(p.status) || t(TONES[p.tone]))}`;
    $("#sc-head").textContent = t(p.head);
    $("#sc-points").innerHTML = p.points.map((x) => `<li>${esc(t(x))}</li>`).join("");
    $("#sc-proof").textContent = t(p.proof);

    const acts = [];
    if (p.demo) acts.push(`<a class="btn btn-sign" href="${p.demo}" target="_blank" rel="noopener">${esc(demoLabel(p))}${ICON_OUT}</a>`);
    acts.push(`<a class="btn ${p.demo ? "btn-ghost" : "btn-sign"}" href="tel:+880${window.CC_PHONE.slice(1)}">${ICON_CALL}${lang === "bn" ? (p.demo ? "ফোনে জানুন" : "ফোন করে ডেমো দেখুন") : (p.demo ? "Ask on a call" : "Call for a demo")}</a>`);
    acts.push(`<a class="btn btn-ghost" href="${waLink(p)}" target="_blank" rel="noopener">WhatsApp</a>`);
    $("#sc-acts").innerHTML = acts.join("");
    $("#sc-note").textContent = t(p.note);

    renderThumbs();
    paintShot();

    const dock = $("#dock");
    const dd = $("#dock-demo");
    if (p.demo) {
      dd.href = p.demo;
      dd.textContent = `${t(p.name)} · ${demoLabel(p)}`;
      dd.target = "_blank";
    } else {
      dd.href = `tel:+880${window.CC_PHONE.slice(1)}`;
      dd.textContent = lang === "bn" ? `${t(p.name)} · ফোন করে ডেমো দেখুন` : `${t(p.name)} · Call for a demo`;
      dd.removeAttribute("target");
    }

    document.querySelectorAll("[data-id]").forEach((a) => a.setAttribute("aria-current", String(a.dataset.id === p.id)));
    const railItem = $(`#rail a[data-id="${p.id}"]`);
    if (railItem) {
      const rail = $("#rail");
      const left = railItem.offsetLeft - rail.clientWidth / 2 + railItem.clientWidth / 2;
      rail.scrollTo({ left, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }

  function transition(fn) {
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) { fn(); return null; }
    return document.startViewTransition(fn);
  }

  function select(id, opts = {}) {
    const p = byId.get(id);
    if (!p) return false;
    const same = current && current.id === id;
    if (!same) {
      shotIndex = 0;
      const vt = current ? transition(() => { current = p; renderProduct(); }) : null;
      if (!vt) { current = p; renderProduct(); }
    }
    if (opts.scroll) {
      const top = $("#showcase").getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(root).getPropertyValue("--bar-h"));
      scrollTo({ top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      $("#sc-name").focus({ preventScroll: true });
    }
    return true;
  }

  function applyStatic() {
    root.lang = lang;
    root.dataset.lang = lang;
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (!el.dataset.bn) el.dataset.bn = el.textContent;
      el.textContent = lang === "en" ? el.dataset.en : el.dataset.bn;
    });
    const phoneText = lang === "bn" ? "০১৭৩১-৩০৪০৭৪" : "01731-304074";
    $(".talk-phone").textContent = phoneText;
    $("#wa-main").href = `https://wa.me/880${window.CC_PHONE.slice(1)}?text=${encodeURIComponent(lang === "bn" ? "আসসালামু আলাইকুম। আমার ব্যবসার জন্য সফটওয়্যার নিয়ে জানতে চাই।" : "Hello, I'd like to talk about software for my business.")}`;
  }

  function renderAll() {
    applyStatic();
    renderTrades();
    renderTally();
    if (current) renderProduct();
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a) {
      const id = a.getAttribute("href").slice(1);
      if (byId.has(id)) {
        e.preventDefault();
        if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
        select(id, { scroll: true });
        return;
      }
    }
    const th = e.target.closest("#thumbs button");
    if (th) {
      const i = Number(th.dataset.i);
      if (i !== shotIndex) { shotIndex = i; transition(paintShot); }
    }
    if (e.target.closest(".lang")) {
      lang = lang === "bn" ? "en" : "bn";
      try { localStorage.setItem("cc-lang", lang); } catch (err) {}
      renderAll();
    }
  });

  let sx = null;
  $("#stage").addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  $("#stage").addEventListener("touchend", (e) => {
    if (sx === null || !current || current.shots.length < 2) return;
    const dx = e.changedTouches[0].clientX - sx;
    sx = null;
    if (Math.abs(dx) < 40) return;
    shotIndex = (shotIndex + (dx < 0 ? 1 : -1) + current.shots.length) % current.shots.length;
    transition(paintShot);
  }, { passive: true });

  addEventListener("popstate", () => {
    const id = location.hash.slice(1);
    if (byId.has(id)) select(id, { scroll: true });
  });

  const dock = $("#dock");
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) dock.hidden = !en.isIntersecting;
  }, { rootMargin: "-40% 0px -40% 0px" });
  io.observe($("#showcase"));

  renderAll();
  const first = location.hash.slice(1);
  if (byId.has(first)) {
    select(first);
    requestAnimationFrame(() => select(first, { scroll: true }));
  } else {
    select(P[0].id);
  }

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    addEventListener("load", () => navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(() => {}));
  }
})();
