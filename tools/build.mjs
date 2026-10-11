import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets/data.js"), "utf8"), ctx);
const { CC_PRODUCTS: P, CC_TONES: TONES } = ctx.window;
const SITE = "https://amimul1234.github.io/crackandcode/";
const PHONE = "+8801731304074";
const VER = fs.readFileSync(path.join(root, "sw.js"), "utf8").match(/cc-[\d-]+/)[0];

const BN = "০১২৩৪৫৬৭৮৯";
const bn = (n) => String(n).replace(/\d/g, (d) => BN[d]);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const T = (tag, o, attrs = "") => `<${tag}${attrs ? " " + attrs : ""} data-en="${esc(o.en)}">${esc(o.bn)}</${tag}>`;
const L = (b, e) => ({ bn: b, en: e });

const live = P.filter((p) => p.demo && p.tone !== "built");
const real = P.filter((p) => p.tone === "real");
const thumbOf = (p) => (p.shots.find((s) => s.k !== "v") || {}).f;

const ICON = {
  call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.6 9 3.2l1.6 4.1-2 1.4a11 11 0 0 0 6.7 6.7l1.4-2 4.1 1.6-.4 2.4a2.4 2.4 0 0 1-2.6 2C10.4 19 5 13.6 4.6 6.2a2.4 2.4 0 0 1 2-2.6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  out: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8.5 8.5M17 14v4.2A1.8 1.8 0 0 1 15.2 20H5.8A1.8 1.8 0 0 1 4 18.2V8.8A1.8 1.8 0 0 1 5.8 7H10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v13M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>'
};

const MARK = '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="1" y="1" width="30" height="30" rx="8" fill="currentColor"/><path d="M9 10.5 13.5 16 9 21.5M16.5 22h7" fill="none" stroke="var(--signboard)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4.5 17.6 11l3.2 2.4L18.5 19" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function head({ title, desc, og, url, pre }) {
  return `<!doctype html>
<html lang="bn" data-lang="bn">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0B1712">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="bn_BD">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${pre}assets/mark.svg" type="image/svg+xml">
<link rel="manifest" href="${pre}manifest.webmanifest">
<link rel="preload" href="${pre}assets/fonts/anek-bn.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${pre}assets/fonts/noto-sans-bengali-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${pre}assets/site.css?v=${VER}">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Crack & Code Premium","url":"${SITE}","logo":"${SITE}assets/mark.svg","telephone":"${PHONE}","founder":{"@type":"Person","name":"Amimul Ehsan"},"address":{"@type":"PostalAddress","addressLocality":"Bogura","addressCountry":"BD"},"areaServed":"BD"}</script>
</head>`;
}

function bar(pre, home) {
  const h = home ? "" : `${pre}`;
  return `<a class="skip" href="#main" data-en="Skip to content">মূল অংশে যান</a>
<header class="bar">
  <a class="brand" href="${pre || "./"}" aria-label="Crack & Code Premium">${MARK}<span class="brand-word">Crack <i>&amp;</i> Code</span><span class="brand-tier">Premium</span></a>
  <nav class="bar-nav" aria-label="Sections">
    ${T("a", L("সফটওয়্যার", "Software"), `href="${h}#businesses"`)}
    ${T("a", L("কেন আমরা", "Why us"), `href="${h}#why"`)}
    ${T("a", L("আমরা কারা", "Who we are"), `href="${h}#team"`)}
    ${T("a", L("প্রশ্ন", "Questions"), `href="${h}#faq"`)}
  </nav>
  <div class="bar-end">
    <button class="lang" type="button" aria-label="Switch language"><span data-l="bn">বাং</span><span data-l="en">EN</span></button>
    <a class="bar-call" href="tel:${PHONE}">${ICON.call}${T("span", L("ফোন করুন", "Call"))}</a>
  </div>
</header>`;
}

function contact() {
  return `<section class="talk" id="contact" aria-labelledby="talk-title">
  <div class="talk-in">
    ${T("h2", L("চলুন, আপনার ব্যবসা নিয়ে কথা বলি।", "Let's talk about your business."), 'id="talk-title" class="talk-title"')}
    ${T("p", L("কী ব্যবসা চালান বলুন। ফোনেই আপনার সাথে ঠিক ডেমোটা খুলে দেখাব, কোনো খরচ নেই।", "Tell us what you run. We'll open the right demo with you on the call, free."), 'class="talk-sub"')}
    <a class="talk-phone" href="tel:${PHONE}" data-en="01731-304074">০১৭৩১-৩০৪০৭৪</a>
    <div class="talk-acts">
      <a class="btn btn-sign btn-lg" href="tel:${PHONE}">${ICON.call}${T("span", L("এখনই ফোন করুন", "Call now"))}</a>
      <a class="btn btn-line btn-lg" data-wa href="https://wa.me/8801731304074" target="_blank" rel="noopener">WhatsApp</a>
    </div>
    ${T("p", L("বগুড়ায় বসে সারা দেশের ব্যবসার সাথে কাজ করি।", "Based in Bogura, working with businesses across Bangladesh."), 'class="talk-where"')}
  </div>
</section>`;
}

function foot(pre) {
  return `<footer class="foot">
  <div class="foot-in">
    <div class="foot-brand">${MARK}<span>Crack &amp; Code Premium</span></div>
    ${T("p", L("ব্যবসার সফটওয়্যার, বাংলাদেশে বানানো।", "Business software, made in Bangladesh."))}
    <p class="foot-links"><a href="${pre}#businesses" data-en="All software">সব সফটওয়্যার</a><a href="https://amimul1234.github.io/" target="_blank" rel="noopener">For clients outside Bangladesh</a></p>
    <p class="foot-copy">© ${bn(2026)} Crack &amp; Code Premium</p>
  </div>
</footer>`;
}

function scripts(pre, page) {
  return `<script src="${pre}assets/data.js?v=${VER}"></script>
<script src="${pre}assets/site.js?v=${VER}" data-page="${page}" data-pre="${pre}"></script>
</body>
</html>
`;
}

function plate(p, pre) {
  const f = thumbOf(p);
  const st = p.status || TONES[p.tone];
  return `<li><a class="plate t-${p.tone}" href="${pre}p/${p.id}/" data-id="${p.id}">
    <span class="plate-shot">${f ? `<img src="${pre}assets/thumbs/${f}" alt="" loading="lazy" decoding="async" width="480" height="300">` : ""}<span class="plate-tag"><i class="dot dot-${p.tone}"></i>${T("span", st)}</span></span>
    <span class="plate-text">
      ${T("span", p.trade, 'class="plate-trade"')}
      <span class="plate-name"><span data-en="${esc(p.name.en)}">${esc(p.name.bn)}</span>${ICON.arrow}</span>
    </span>
  </a></li>`;
}

const HERO_SET = ["restaurant", "hospital", "hardware", "car-showroom", "school", "gym", "tailor"];

function heroStage(pre) {
  const slides = HERO_SET.map((id, i) => {
    const p = P.find((x) => x.id === id);
    const d = p.shots.find((s) => s.k === "d");
    const ph = p.shots.find((s) => s.k === "p");
    const load = i === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
    const dsrc = i === 0 ? `assets/shots/${d.f}` : `assets/shots/${d.f}`;
    return `<figure class="slide${i === 0 ? " is-on" : ""}" data-i="${i}" ${i === 0 ? "" : "aria-hidden=\"true\""}>
      <div class="lap"><div class="lap-bar"><i></i><i></i><i></i><span>${esc(new URL(p.demo).host)}</span></div><img src="${pre}${dsrc}" alt="${esc(d.c.bn)}" width="1440" height="900" ${load} decoding="async"></div>
      <div class="hand"><img src="${pre}assets/shots/${ph.f}" alt="${esc(ph.c.bn)}" width="780" height="1688" ${load} decoding="async"></div>
      <figcaption class="slide-cap"><i class="dot dot-${p.tone}"></i><b data-en="${esc(p.name.en)}">${esc(p.name.bn)}</b><span data-en="${esc(p.trade.en)}">${esc(p.trade.bn)}</span><a href="${pre}p/${p.id}/" data-en="See it →">দেখুন →</a></figcaption>
    </figure>`;
  }).join("\n");
  const ticks = HERO_SET.map((id, i) => {
    const p = P.find((x) => x.id === id);
    return `<button type="button" class="tick${i === 0 ? " is-on" : ""}" data-i="${i}" aria-label="${esc(p.name.bn)}"><span></span></button>`;
  }).join("");
  return `<div class="stage-hero" id="hero-stage" aria-roledescription="carousel">
    <div class="slides">${slides}</div>
    <div class="ticks" role="group" aria-label="Products">${ticks}</div>
  </div>`;
}

function homePage() {
  const pre = "";
  const order = P;
  const boardRows = P.filter((p) => p.demo).map((p) => `<li data-id="${p.id}"><span class="b-name"><span data-en="${esc(p.name.en)}">${esc(p.name.bn)}</span><small data-en="${esc(p.trade.en)}">${esc(p.trade.bn)}</small></span><span class="b-host">${esc(new URL(p.demo).host)}</span><span class="b-state is-wait" data-en="checking…">যাচাই হচ্ছে…</span></li>`).join("\n");
  return `${head({ title: "Crack & Code Premium · আপনার ব্যবসার সফটওয়্যার, আগে চালিয়ে দেখুন", desc: `রেস্টুরেন্ট, হাসপাতাল, ফার্মেসি, দর্জি, হার্ডওয়্যার, জিম, স্কুলসহ ${bn(P.length)} ধরনের ব্যবসার সফটওয়্যার। কেনার আগে লাইভ ডেমো নিজে চালিয়ে দেখুন।`, og: `${SITE}assets/og/home.png`, url: SITE, pre })}
<body class="home">
${bar(pre, true)}
<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-in">
      <div class="hero-copy">
        <p class="kicker"><span class="live-dot"></span>${T("span", L("সফটওয়্যার কোম্পানি · বগুড়া, বাংলাদেশ", "Software company · Bogura, Bangladesh"))}</p>
        ${T("h1", L("আপনার ব্যবসার সফটওয়্যার আমরা আগেই বানিয়ে রেখেছি।", "The software for your business is already built."), 'id="hero-title" class="hero-title"')}
        ${T("p", L(`রেস্টুরেন্ট থেকে হাসপাতাল, ${bn(P.length)} ধরনের ব্যবসার জন্য বাংলায় বানানো সফটওয়্যার। এক টাকাও দেওয়ার আগে নিজের হাতে চালিয়ে দেখুন।`, `Software built in Bangla for ${P.length} kinds of business, from restaurants to hospitals. Run it yourself before you pay a taka.`), 'class="hero-sub"')}
        <div class="hero-acts">
          <a class="btn btn-sign btn-lg" href="#businesses">${T("span", L("আপনার ব্যবসা বাছুন", "Find your business"))}${ICON.down}</a>
          <a class="btn btn-line btn-lg" href="tel:${PHONE}">${ICON.call}${T("span", L("ফোন করুন", "Call us"))}</a>
        </div>
        <p class="check is-wait" id="check" aria-live="polite"></p>
      </div>
      ${heroStage(pre)}
    </div>
    <dl class="band">
      <div><dt data-en="kinds of business">ধরনের ব্যবসা</dt><dd data-en="${P.length}">${bn(P.length)}</dd></div>
      <div><dt data-en="live demos you can open now">লাইভ ডেমো, এখনই খোলা যায়</dt><dd data-en="${live.length}">${bn(live.length)}</dd></div>
      <div><dt data-en="automated checks run on them">স্বয়ংক্রিয় পরীক্ষা চলে</dt><dd data-en="1,000+">১,০০০+</dd></div>
      <div><dt data-en="leads moved off a sheet, none lost">লিড শিট থেকে সরানো, একটাও হারায়নি</dt><dd data-en="10,141">১০,১৪১</dd></div>
    </dl>
  </section>

  <section class="pick" id="businesses" aria-labelledby="pick-title">
    <header class="sec-head">
      ${T("h2", L("আপনার ব্যবসা কোনটা?", "Which business do you run?"), 'id="pick-title" class="sec-title"')}
      ${T("p", L("নিজের ব্যবসাটা বেছে নিন। আসল স্ক্রিন, ভিডিও আর লাইভ ডেমো, সব এক পাতায়।", "Pick yours. Real screens, video and the live demo, all on one page."), 'class="sec-sub"')}
    </header>
    <ul class="legend" aria-label="Status">
      <li><i class="dot dot-real"></i>${T("span", L("আসল ব্যবসায় প্রতিদিন চলছে", "Used every day by a real business"))}</li>
      <li><i class="dot dot-demo"></i>${T("span", L("লাইভ ডেমো, এখনই খুলুন", "Live demo, open it now"))}</li>
      <li><i class="dot dot-built"></i>${T("span", L("তৈরি, কলে দেখাব", "Built, we'll show it on a call"))}</li>
    </ul>
    <ul class="plates">
      ${order.map((p) => plate(p, pre)).join("\n")}
    </ul>
    ${T("p", L("সবুজ চিহ্ন শুধু তখনই দিই, যখন কোনো আসল ব্যবসা সত্যিই প্রতিদিন সেটা চালায়। এই পেজে কোনো বানানো রিভিউ নেই।", "Green only when a real business truly uses it every day. There are no made-up reviews on this page."), 'class="honest"')}
  </section>

  <section class="realuse" id="real" aria-labelledby="real-title">
    <div class="realuse-in">
      <div class="realuse-copy">
        <p class="eyebrow"><i class="dot dot-real"></i>${T("span", L("আসল দোকানে চলছে", "Running at a real shop"))}</p>
        ${T("h2", L("ঢাকার একটা লন্ড্রি তাদের পুরো কাজ আমাদের সফটওয়্যারে চালায়।", "A Dhaka laundry runs its whole business on our software."), 'id="real-title" class="sec-title"')}
        ${T("p", L("কাস্টমার ফোন থেকে পিকআপ বুক করেন, দোকান ব্যাগ ওজন করে দাম পাঠায়, কাস্টমার দাম মেনে নিলে তবেই ধোয়া শুরু হয়। দোকানের পেছনের অফিস থেকেই সব চলে।", "Customers book a pickup from their phone, the shop weighs the bag and sends the price, and washing starts only once the customer approves. The shop runs everything from its own back office."), 'class="realuse-lede"')}
        <ul class="ticks-list">
          <li>${ICON.check}${T("span", L("নিজের ডোমেইনে চালু: cleanerboy.online", "Live on its own domain: cleanerboy.online"))}</li>
          <li>${ICON.check}${T("span", L("দাম না মানলে দোকানের লোকও অর্ডার ধোয়ায় পাঠাতে পারে না", "Nothing goes to washing until the customer approves the price, not even from the back office"))}</li>
          <li>${ICON.check}${T("span", L("পেছনের অফিস থেকে QR ব্যাগ ট্যাগ প্রিন্ট হয়", "QR bag tags print from the back office"))}</li>
          <li>${ICON.check}${T("span", L("চালু সার্ভারের বিরুদ্ধে ১০০টা পরীক্ষা চালানো হয়", "100 checks run against the live server"))}</li>
        </ul>
        <div class="row-acts">
          <a class="btn btn-ink" href="https://cleanerboy.online" target="_blank" rel="noopener">${T("span", L("আসল সাইটটা দেখুন", "See the real site"))}${ICON.out}</a>
          <a class="btn btn-ghost" href="p/laundry/">${T("span", L("বিস্তারিত", "Details"))}${ICON.arrow}</a>
        </div>
      </div>
      <div class="realuse-shots" aria-hidden="true">
        <div class="hand hand-a"><img src="assets/shots/cleanerboy-1.webp" alt="" loading="lazy" width="780" height="1688"></div>
        <div class="hand hand-b"><img src="assets/shots/cleanerboy-2.webp" alt="" loading="lazy" width="780" height="1688"></div>
      </div>
    </div>
  </section>

  <section class="why" id="why" aria-labelledby="why-title">
    <header class="sec-head">
      ${T("h2", L("কথা না, প্রমাণ দেখাই।", "We show proof, not promises."), 'id="why-title" class="sec-title"')}
      ${T("p", L("প্রতিটা দাবির পাশে একটা সফটওয়্যার আছে, খুলে নিজেই মিলিয়ে নিন।", "Every claim points at software you can open and check yourself."), 'class="sec-sub"')}
    </header>

    <div class="feature">
      <div class="feature-copy">
        <span class="feature-n">০১</span>
        ${T("h3", L("কেনার আগে নিজে চালিয়ে দেখবেন।", "You run it before you buy it."))}
        ${T("p", L("বেশিরভাগ সফটওয়্যারের লাইভ ডেমো খোলা। কোনো ফর্ম লাগে না, এক ট্যাপে মালিক বা স্টাফ হয়ে ঢুকে যান। পাশের বোর্ডটা এই মুহূর্তে আপনার ডিভাইস থেকেই প্রতিটা ডেমো যাচাই করছে।", "Most of our software has a live demo. No form, one tap and you're inside as owner or staff. The board here is checking every demo from your own device, right now."))}
      </div>
      <div class="board" aria-live="polite">
        <div class="board-head"><span class="live-dot"></span>${T("span", L("লাইভ অবস্থা · আপনার ডিভাইস থেকে", "Live status · from your device"))}<b id="board-sum"></b></div>
        <ul class="board-rows">${boardRows}</ul>
      </div>
    </div>

    <div class="feature feature-flip">
      <div class="feature-copy">
        <span class="feature-n">০২</span>
        ${T("h3", L("স্টাফ কী দেখবে, তা ঠিক করবেন আপনি।", "You decide what staff can see."))}
        ${T("p", L("কেনা দাম আর লাভ শুধু স্ক্রিনে লুকানো না, সার্ভারেই আটকানো। স্টাফের ফোনে সেই তথ্য পৌঁছায়ই না। প্রতিটা স্টাফ হিসেবে লগইন করে আমরা পরীক্ষা করি, কোথাও ফাঁস হলে পরীক্ষা ফেল করে।", "Cost and profit are blocked on the server, not just hidden on screen; a staff phone never receives them. Tests log in as every staff role and fail on any leak."))}
        <a class="see" href="p/hardware/">${T("span", L("দেখুন: মালখানা, হার্ডওয়্যারের দোকান", "See it in: Malkhana, hardware shop"))}${ICON.arrow}</a>
      </div>
      <div class="feature-shot"><div class="hand"><img src="assets/shots/malkhana-2.webp" alt="" loading="lazy" width="780" height="1688"></div></div>
    </div>

    <div class="feature">
      <div class="feature-copy">
        <span class="feature-n">০৩</span>
        ${T("h3", L("নেট গেলেও দোকান থামে না।", "The shop doesn't stop when the internet does."))}
        ${T("p", L("নেট চলে গেলেও অর্ডার আর বিল চলতে থাকে। নেট ফিরলে সব নিজে থেকে মিলে যায়, কিছু দুবার ঢোকে না।", "Orders and bills keep going offline. When the connection returns, everything syncs by itself and nothing is entered twice."))}
        <a class="see" href="p/restaurant/">${T("span", L("দেখুন: মেজবান, রেস্টুরেন্ট", "See it in: Mezban, restaurant"))}${ICON.arrow}</a>
      </div>
      <div class="feature-shot"><div class="hand"><img src="assets/shots/mezban-3.webp" alt="" loading="lazy" width="780" height="1688"></div></div>
    </div>

    <ol class="claims">
      <li>${T("h3", L("টাকার হিসাবে এক পয়সাও গরমিল না।", "Not a poisha out."))}${T("p", L("টাকা রাখা হয় পয়সায়। একই পেমেন্ট একসাথে ২০ বার পাঠিয়ে পরীক্ষা করি, খাতায় ওঠে ঠিক একবার।", "Money is kept in whole poisha. One payment sent 20 times at once lands exactly once."))}<a class="see" href="p/travel/">${T("span", L("সফরখাতা", "Safarkhata"))}${ICON.arrow}</a></li>
      <li>${T("h3", L("বিল চুপচাপ মুছে ফেলা যায় না।", "A bill can't be quietly erased."))}${T("p", L("বাতিল করতে নাম আর কারণ লাগে। প্রতিটা বাতিল মালিকের অডিটে ধরা পড়ে।", "Cancelling needs a name and a reason, and every void shows in the owner's audit."))}<a class="see" href="p/hospital/">${T("span", L("নিরোগ", "Nirog"))}${ICON.arrow}</a></li>
      <li>${T("h3", L("পুরো বাংলায়, আপনার ব্যবসার ভাষায়।", "In Bangla, in your trade's words."))}${T("p", L("বাকি, জমা, কারিগর, মিডিয়া ফি, গোডাউন। স্টাফ মুখে যা বলে, স্ক্রিনেও তাই লেখা।", "Baki, joma, karigor, media fee, godown. The screens say what your staff already say."))}<a class="see" href="p/tuition/">${T("span", L("টিউশন ডেস্ক", "Tuition Desk"))}${ICON.arrow}</a></li>
    </ol>
  </section>

  <section class="custom" id="custom" aria-labelledby="custom-title">
    <header class="sec-head">
      ${T("h2", L("তালিকায় আপনার ব্যবসা নেই?", "Your business isn't on the list?"), 'id="custom-title" class="sec-title"')}
      ${T("p", L("আপনার জন্য বানিয়ে দেব। আর আসল কাজ শুরুর আগেই আপনি সেটা চালিয়ে দেখবেন।", "We'll build it. And you'll try it before we write the real thing."), 'class="sec-sub"')}
    </header>
    <ol class="steps">
      <li><span class="step-n">১</span>${T("h3", L("কথা শুনি", "We listen"))}${T("p", L("আপনার দোকানে বা ফোনে বুঝে নিই কাজটা এখন কীভাবে চলে: খাতা, শিট, আর আপনার নিজের নিয়ম।", "At your shop or on the phone, we learn how the work runs today: the notebook, the sheet, your own rules."))}</li>
      <li><span class="step-n">২</span>${T("h3", L("নমুনা হাতে নিয়ে দেখেন", "You try a sample"))}${T("p", L("ক্লিক করে চালানো যায় এমন একটা নমুনা বানাই, নিজের ফোনে ঘুরে দেখেন। যা বদলাতে চান, এখানেই বলুন।", "We make a clickable sample you tap through on your own phone. Tell us anything you want changed at this stage."))}</li>
      <li><span class="step-n">৩</span>${T("h3", L("পরীক্ষাসহ বানাই", "We build it, tested"))}${T("p", L("আপনি হ্যাঁ বললে আসল সিস্টেম বানাই। টাকার প্রতিটা হিসাব পরীক্ষা করে তবেই হাতে দিই।", "Once you say yes, we build the real system and test every money path before it reaches you."))}</li>
      <li><span class="step-n">৪</span>${T("h3", L("চালু করে পাশে থাকি", "Launch and stay close"))}${T("p", L("চালু করে দিই, স্টাফকে শিখিয়ে দিই, ব্যাকআপ চালু রাখি। সমস্যা হলে আমাদের ফোন করবেন।", "We set it up, teach your staff and keep backups running. When something's wrong, you call us."))}</li>
    </ol>
  </section>

  <section class="team" id="team" aria-labelledby="team-title">
    <header class="sec-head">
      ${T("h2", L("যিনি ফোন ধরবেন, তিনিই কোড লেখেন।", "The person who answers the phone writes the code."), 'id="team-title" class="sec-title"')}
      ${T("p", L("মাঝখানে কোনো সেলসম্যান নেই। যারা আপনার সফটওয়্যার বানায় আর চালায়, তাদের সাথেই সরাসরি কথা বলবেন।", "No sales agent in the middle. You talk directly to the people who build and run your software."), 'class="sec-sub"')}
    </header>
    <div class="team-card">
      <div class="who">
        <div class="mono-mark" aria-hidden="true">আ</div>
        <div>
          ${T("p", L("আমিমুল এহসান", "Amimul Ehsan"), 'class="who-name"')}
          ${T("p", L("প্রতিষ্ঠাতা ও সফটওয়্যার ইঞ্জিনিয়ার · বগুড়া", "Founder and software engineer · Bogura"), 'class="who-role"')}
          <a class="who-link" href="https://github.com/Amimul1234" target="_blank" rel="noopener" data-en="Our code history on GitHub ↗">গিটহাবে আমাদের কাজের ইতিহাস ↗</a>
        </div>
      </div>
      <ul class="facts">
        <li>${T("b", L("এই পেজের প্রতিটা সফটওয়্যার আমাদের নিজেদের লেখা।", "We wrote every system on this page."))}${T("span", L("অন্যের সফটওয়্যার কিনে নিজের নামে বিক্রি করি না। কিছু বদলাতে হলে আমরা নিজেরাই বদলাই।", "We don't resell someone else's software under our name. If something needs changing, we change it ourselves."))}</li>
        <li>${T("b", L("সার্ভার আমরা নিজেরাই চালাই।", "We run our own servers."))}${T("span", L("কোনো সমস্যা হলে অন্য কোনো কোম্পানির অপেক্ষায় বসে থাকতে হয় না।", "When something goes wrong, nobody waits on a third company."))}</li>
        <li>${T("b", L("টাকার প্রতিটা হিসাব পরীক্ষা করে তবেই হাতে দিই।", "Every money path is tested before you get it."))}${T("span", L("এই সিস্টেমগুলোতে হাজারের বেশি স্বয়ংক্রিয় পরীক্ষা চলে। হাসপাতালের সিস্টেমে ১৩ রকম স্টাফের ৯৬৮টা স্ক্রিন একে একে যাচাই করা হয়েছে।", "More than a thousand automated checks run on these systems; in the hospital system, 968 screens were walked across 13 staff roles."))}</li>
      </ul>
    </div>
  </section>

  <section class="faq" id="faq" aria-labelledby="faq-title">
    <header class="sec-head">
      ${T("h2", L("মালিকরা প্রথমে যা জিজ্ঞেস করেন", "What owners ask us first"), 'id="faq-title" class="sec-title"')}
      ${T("p", L("সোজা উত্তর। আপনার প্রশ্নটা না থাকলে ফোন করুন।", "Straight answers. If yours isn't here, call."), 'class="sec-sub"')}
    </header>
    <div class="qa">
      ${[
        [L("কম্পিউটার কিনতে হবে?", "Do I need to buy a computer?"), L("না। সাধারণ অ্যান্ড্রয়েড ফোন বা যেকোনো ব্রাউজারেই চলে। রসিদ প্রিন্ট করতে চাইলে সাধারণ একটা থার্মাল প্রিন্টারই যথেষ্ট।", "No. It runs on an ordinary Android phone or any browser. For printed receipts, a normal thermal printer is enough.")],
        [L("নেট চলে গেলে কী হবে?", "What happens when the internet goes?"), L("মেজবান, ফিতা, মালখানা আর হালখাতা নেট ছাড়াও চলে, নেট ফিরলে নিজে থেকে মিলিয়ে নেয়। বাকিগুলোর জন্য আপনার এলাকার নেটের অবস্থা বলুন, মানাবে কিনা সোজাসুজি বলে দেব।", "Mezban, Fita, Malkhana and Halkhata work offline and sync when the connection returns. For the others, tell us about your area's connection and we'll say honestly whether it fits.")],
        [L("স্টাফ কি আমার লাভ দেখতে বা হিসাব এদিক-ওদিক করতে পারবে?", "Can staff see my profit or change the accounts?"), L("কোন স্টাফ কী দেখবে, আপনি ঠিক করবেন। কেনা দাম আর লাভ সার্ভারেই আটকানো। বিল মুছে ফেলা যায় না, বাতিল করতে নাম আর কারণ লাগে, যা আপনার অডিটে উঠে যায়।", "You decide what each role sees. Cost and profit are blocked on the server. Bills can't be deleted, only cancelled with a name and reason that shows in your audit.")],
        [L("আমার তথ্য কি অন্য কেউ দেখতে পাবে?", "Can another business see my data?"), L("না। প্রতিটা ব্যবসার তথ্য আলাদা রাখা হয়, অনেক সফটওয়্যারে একদম আলাদা ডেটাবেসে। এক দোকানের তথ্য অন্য দোকান থেকে খোলা যায় না, এটা আমরা পরীক্ষা করে নিশ্চিত করি।", "No. Each business is kept separate, in many products in its own database, and we test that one shop's records can't be opened from another.")],
        [L("দাম কত?", "How much does it cost?"), L("আপনার ব্যবসার আকার আর কী কী লাগবে তার ওপর নির্ভর করে। ফোন করে বলুন, একই কলে দাম জানিয়ে দেব, কোনো কিছুতে রাজি হওয়ার আগেই।", "It depends on your size and what you need. Call and we'll tell you the price on the same call, before you commit to anything.")],
        [L("স্টাফকে শেখাবে কে?", "Who teaches my staff?"), L("চালু করার সময় আমরাই শিখিয়ে দিই। স্ক্রিন বাংলায়, আপনার স্টাফের মুখের শব্দেই লেখা, তাই বেশিরভাগ মানুষ প্রথম দিনেই চালাতে পারেন।", "We do, at setup. The screens use your staff's own words in Bangla, so most people find their way on day one.")]
      ].map(([q, a]) => `<details>${T("summary", q)}${T("p", a)}</details>`).join("\n      ")}
    </div>
  </section>

${contact()}
</main>
${foot(pre)}
<div class="dock" id="dock">
  <a class="btn btn-sign" href="#businesses">${T("span", L("আপনার ব্যবসা বাছুন", "Find your business"))}</a>
  <a class="btn btn-ink btn-icon" href="tel:${PHONE}" aria-label="Call">${ICON.call}</a>
</div>
${scripts(pre, "home")}`;
}

function shotHTML(p, s, pre, i) {
  const src = `${pre}assets/shots/${s.f}`;
  const load = i === 0 ? 'fetchpriority="high"' : 'loading="lazy"';
  if (s.k === "v") return `<div class="dev-film"><video controls playsinline preload="none" poster="${pre}assets/shots/${s.poster}" aria-label="${esc(s.c.bn)}"><source src="${src}" type="video/mp4"></video></div>`;
  if (s.k === "d") return `<div class="lap"><div class="lap-bar"><i></i><i></i><i></i><span>${esc(p.demo ? new URL(p.demo).host : "")}</span></div><img src="${src}" alt="${esc(s.c.bn)}" width="1440" height="900" ${load} decoding="async"></div>`;
  return `<div class="hand"><img src="${src}" alt="${esc(s.c.bn)}" width="780" height="1688" ${load} decoding="async"></div>`;
}

function productPage(p, idx) {
  const pre = "../../";
  const url = `${SITE}p/${p.id}/`;
  const st = p.status || TONES[p.tone];
  const demoLabel = p.demoLabel || L("ডেমো খুলে চালান", "Open the demo");
  const others = [...P.slice(idx + 1), ...P.slice(0, idx)].slice(0, 6);
  const wa = `https://wa.me/8801731304074?text=${encodeURIComponent(`আসসালামু আলাইকুম। আমার ${p.trade.bn} আছে, ${p.name.bn} সফটওয়্যারটা নিয়ে জানতে চাই।`)}`;
  const slides = p.shots.map((s, i) => `<figure class="pslide${i === 0 ? " is-on" : ""}" data-i="${i}" data-k="${s.k}">${shotHTML(p, s, pre, i)}<figcaption data-en="${esc(s.c.en)}">${esc(s.c.bn)}</figcaption></figure>`).join("\n");
  const thumbs = p.shots.length > 1 ? `<div class="pthumbs" role="group" aria-label="Screens">${p.shots.map((s, i) => `<button type="button" data-i="${i}" class="${s.k === "v" ? "is-film" : ""}" aria-pressed="${i === 0}" aria-label="${esc(s.c.bn)}"><img src="${pre}assets/${s.k === "v" ? "shots/" + s.poster : "thumbs/" + s.f}" alt="" loading="lazy" decoding="async"></button>`).join("")}</div>` : "";
  const acts = [
    p.demo ? `<a class="btn btn-sign btn-lg" href="${p.demo}" target="_blank" rel="noopener">${T("span", demoLabel)}${ICON.out}</a>` : `<a class="btn btn-sign btn-lg" href="tel:${PHONE}">${ICON.call}${T("span", L("ফোন করে ডেমো দেখুন", "Call for a demo"))}</a>`,
    p.demo ? `<a class="btn btn-ghost btn-lg" href="tel:${PHONE}">${ICON.call}${T("span", L("ফোনে জানুন", "Ask on a call"))}</a>` : "",
    `<a class="btn btn-ghost btn-lg" href="${wa}" target="_blank" rel="noopener" data-wa-product>WhatsApp</a>`
  ].join("");
  return `${head({ title: `${p.name.bn} · ${p.trade.bn}-এর সফটওয়্যার · Crack & Code Premium`, desc: `${p.head.bn} ${p.demo ? "লাইভ ডেমো নিজে চালিয়ে দেখুন।" : "ফোন করলে ডেমো দেখিয়ে দেব।"}`, og: `${SITE}assets/og/${p.id}.png`, url, pre })}
<body class="product" data-id="${p.id}">
${bar(pre, false)}
<main id="main">
  <section class="phero" aria-labelledby="p-name">
    <div class="phero-in">
      <div class="phero-copy">
        <nav class="crumb" aria-label="Breadcrumb"><a href="${pre}" data-en="Home">হোম</a><span>/</span><a href="${pre}#businesses" data-en="Software">সফটওয়্যার</a><span>/</span><span data-en="${esc(p.trade.en)}">${esc(p.trade.bn)}</span></nav>
        <p class="ptrade"><span data-en="${esc(`For a ${p.trade.en.toLowerCase()}`)}">${esc(`${p.trade.bn}-এর জন্য`)}</span></p>
        <h1 id="p-name" class="pname" data-en="${esc(p.name.en)}">${esc(p.name.bn)}</h1>
        <p class="status t-${p.tone}"><i class="dot"></i>${T("span", st)}</p>
        ${p.demo ? `<p class="pulse is-wait" id="pulse" aria-live="polite"></p>` : ""}
        ${T("p", p.head, 'class="plede"')}
        <div class="pacts">${acts}</div>
        ${p.note ? T("p", p.note, 'class="pnote"') : ""}
      </div>
      <div class="pstage" id="pstage">
        <div class="pframe">${slides}</div>
        ${thumbs}
      </div>
    </div>
  </section>

  <section class="pdetail" aria-labelledby="p-what">
    <div class="pdetail-in">
      ${T("h2", L("কী কী করে", "What it does"), 'id="p-what" class="sec-title sec-title-sm"')}
      <ol class="points">${p.points.map((x, i) => `<li><span class="pt-n">${bn("0" + (i + 1))}</span>${T("span", x)}</li>`).join("")}</ol>
      <div class="proof">
        ${T("p", L("যেখানে আলাদা", "What's different"), 'class="proof-label"')}
        ${T("p", p.proof, 'class="proof-text"')}
      </div>
    </div>
  </section>

  <section class="more" aria-labelledby="more-title">
    <header class="sec-head">
      ${T("h2", L("অন্য ব্যবসার সফটওয়্যারও দেখুন", "More software for other businesses"), 'id="more-title" class="sec-title sec-title-sm"')}
      <a class="see" href="${pre}#businesses">${T("span", L(`সব ${bn(P.length)}টা দেখুন`, `See all ${P.length}`))}${ICON.arrow}</a>
    </header>
    <ul class="plates plates-sm">${others.map((o) => plate(o, pre)).join("\n")}</ul>
  </section>

${contact()}
</main>
${foot(pre)}
<div class="dock" id="dock">
  ${p.demo ? `<a class="btn btn-sign" href="${p.demo}" target="_blank" rel="noopener">${T("span", L(`${p.name.bn} · ডেমো খুলুন`, `${p.name.en} · Open the demo`))}</a>` : `<a class="btn btn-sign" href="tel:${PHONE}">${T("span", L(`${p.name.bn} · ফোন করে ডেমো`, `${p.name.en} · Call for a demo`))}</a>`}
  <a class="btn btn-ink btn-icon" href="tel:${PHONE}" aria-label="Call">${ICON.call}</a>
</div>
${scripts(pre, "product")}`;
}

fs.writeFileSync(path.join(root, "index.html"), homePage());
P.forEach((p, i) => {
  const dir = path.join(root, "p", p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), productPage(p, i));
});
console.log(`built home + ${P.length} product pages (${VER})`);
