window.CC_PHONE = "01731304074";
window.CC_EMAIL = "amimulahsan7@gmail.com";

window.CC_TONES = {
  real: { bn: "আসল ব্যবসায় চলছে", en: "In real use" },
  demo: { bn: "লাইভ ডেমো, এখনই খুলুন", en: "Live demo, open it now" },
  built: { bn: "তৈরি, কলে দেখিয়ে দেব", en: "Built, we'll show it on a call" }
};

window.CC_PRODUCTS = [
  {
    id: "restaurant",
    trade: { bn: "রেস্টুরেন্ট", en: "Restaurant" },
    name: { bn: "মেজবান", en: "Mezban" },
    tone: "demo",
    head: {
      bn: "অর্ডার, কিচেন, বিল আর দিনের হিসাব এক জায়গায়।",
      en: "Orders, kitchen, billing and the day's numbers in one place."
    },
    points: [
      { bn: "ওয়েটার ফোনে অর্ডার নেয়, কিচেনের স্ক্রিনে সাথে সাথে টিকিট চলে যায়।", en: "Waiters order from a phone and the ticket lands on the kitchen screen at once." },
      { bn: "ক্যাশিয়ার ভ্যাট আর সার্ভিস চার্জসহ বিল করে, মুশক ৬.৩ ধাঁচের ইনভয়েস বের হয়।", en: "The cashier bills with VAT and service charge on a Mushak 6.3 style invoice." },
      { bn: "মালিক দূরে বসেও দেখেন আজ কত বিক্রি হলো, কোন ঘণ্টায় ভিড়, কোন মাল ফুরিয়ে আসছে।", en: "The owner sees today's sales, the busy hours and what stock is running low, from anywhere." }
    ],
    proof: {
      bn: "নেট চলে গেলেও অর্ডার নেওয়া থামে না। নেট ফিরলে সব নিজে থেকে মিলে যায়, একটা অর্ডারও দুবার ঢোকে না।",
      en: "Orders keep working when the internet drops, and sync back exactly once when it returns."
    },
    demo: "https://demo.147.93.168.43.sslip.io",
    note: { bn: "ওয়েটার, কিচেন, ক্যাশিয়ার বা মালিক, যেকোনো ভূমিকায় এক ট্যাপে ঢুকুন", en: "One tap in as waiter, kitchen, cashier or owner" },
    shots: [
      { f: "mezban-film.mp4", poster: "mezban-film.webp", k: "v", c: { bn: "৩০ সেকেন্ডের ভিডিও: আসল অ্যাপে আসল ট্যাপ", en: "30-second video: real taps in the real app" } },
      { f: "mezban-3.webp", k: "p", c: { bn: "ওয়েটার ফোনে টেবিলের অর্ডার নিচ্ছে", en: "A waiter taking a table's order" } },
      { f: "mezban-1.webp", k: "d", c: { bn: "মালিকের রিপোর্ট: বিক্রি, ভ্যাট, ঘণ্টাওয়ারি হিসাব", en: "Owner report: takings, VAT, sales by hour" } },
      { f: "mezban-2.webp", k: "d", c: { bn: "মাল কমে এলে আগেই সতর্ক করে", en: "Stock warns before an ingredient runs out" } }
    ]
  },
  {
    id: "hospital",
    trade: { bn: "হাসপাতাল ও ক্লিনিক", en: "Hospital & clinic" },
    name: { bn: "নিরোগ", en: "Nirog" },
    tone: "demo",
    head: {
      bn: "রিসেপশন থেকে ফার্মেসি, পুরো হাসপাতাল এক সিস্টেমে।",
      en: "Reception to pharmacy, the whole hospital in one system."
    },
    points: [
      { bn: "রিসেপশন, ডাক্তার, নার্স, ল্যাব, বিলিং আর ফার্মেসি, সবাই নিজের স্ক্রিনে কাজ করে।", en: "Reception, doctors, nurses, lab, billing and pharmacy each get their own screen." },
      { bn: "রোগী নিজের ফোনে দেখেন তাঁর সিরিয়াল কত, এখন কে ঢুকেছে, আর কতক্ষণ বসতে হবে।", en: "Patients follow their serial, who is in, and the wait time on their own phone." },
      { bn: "দিন শেষে ক্যাশ ক্লোজ: কোন স্টাফ কত নিল, কোন পদ্ধতিতে, রসিদসহ।", en: "Cash close at day end: takings by staff and method, with receipts." }
    ],
    proof: {
      bn: "বিল কখনো মুছে ফেলা যায় না, বাতিল করতে হলে নাম আর কারণ লিখতে হয়। এক হাসপাতালের রোগীর তথ্য অন্য হাসপাতাল কোনোভাবেই দেখতে পায় না।",
      en: "Bills are never deleted, only voided with a name and a reason. One hospital can never see another's patients."
    },
    demo: "https://nirog.147.93.168.43.sslip.io/staff/",
    note: { bn: "রিসেপশন, ডাক্তার, নার্স, ল্যাব, বিলিং, মালিক: যেকোনো ভূমিকায় ঢুকুন। হাসপাতালটা কাল্পনিক।", en: "Enter as reception, doctor, nurse, lab, billing or owner. The hospital is fictional." },
    shots: [
      { f: "nirog-1.webp", k: "d", c: { bn: "রিসেপশনের সিরিয়াল আর ডাক্তারের লাইভ বোর্ড", en: "Reception queue with the doctor's live board" } },
      { f: "nirog-3.webp", k: "p", c: { bn: "রোগীর ফোনে নিজের সিরিয়াল", en: "The patient's serial on their phone" } },
      { f: "nirog-2.webp", k: "d", c: { bn: "দিনের ক্যাশ ক্লোজ", en: "The day's cash close" } }
    ]
  },
  {
    id: "pharmacy",
    trade: { bn: "ফার্মেসি", en: "Pharmacy" },
    name: { bn: "মেডিহিসাব", en: "MediHisab" },
    tone: "built",
    status: { bn: "প্লে স্টোরে টেস্টিং চলছে", en: "In Play Store testing" },
    head: {
      bn: "মেয়াদ, স্টক আর বাকির খাতা, দোকানদারের নিজের ফোনে।",
      en: "Expiry, stock and the credit book, on the shop owner's own phone."
    },
    points: [
      { bn: "দেশের আসল ওষুধের তালিকা থেকে খুঁজে বিক্রি: কোম্পানি, জেনেরিক, প্যাক আর এমআরপিসহ।", en: "Sell from a catalogue of real Bangladeshi medicines with company, generic, pack and MRP." },
      { bn: "প্রতিটা ব্যাচের মেয়াদ আলাদা ধরে রাখে, ৩০ দিন আগে থেকেই জানিয়ে দেয়।", en: "Tracks expiry per batch and warns 30 days ahead." },
      { bn: "কোন কাস্টমারের কাছে কত বাকি, এক নজরে।", en: "What each customer owes, at a glance." }
    ],
    proof: {
      bn: "মেয়াদ পেরোনো ব্যাচ থেকে বিক্রি সার্ভার নিজেই আটকে দেয়, ভুল করে বিক্রি হওয়ার উপায় নেই।",
      en: "The server refuses a sale from an expired batch, so it cannot happen by mistake."
    },
    shots: [
      { f: "medihisab-1.webp", k: "p", c: { bn: "আজকের বিক্রি, কম স্টক আর মেয়াদের সতর্কতা", en: "Today's sales, low stock and expiry warning" } },
      { f: "medihisab-2.webp", k: "p", c: { bn: "শিগগির মেয়াদ শেষ হবে এমন ওষুধ, ব্যাচ ধরে", en: "Medicines expiring soon, by batch" } },
      { f: "medihisab-3.webp", k: "p", c: { bn: "বাকির খাতা", en: "The credit book" } }
    ]
  },
  {
    id: "tailor",
    trade: { bn: "দর্জির দোকান", en: "Tailor shop" },
    name: { bn: "ফিতা", en: "Fita" },
    tone: "demo",
    status: { bn: "লাইভ, নিজেই সাইন আপ করে চালানো যায়", en: "Live, open for sign-up" },
    head: {
      bn: "মাপ, অর্ডার, কারিগর আর বাকি, কাউন্টার থেকে ওয়ার্কশপ পর্যন্ত।",
      en: "Measurements, orders, karigors and dues, from counter to workshop."
    },
    points: [
      { bn: "কাস্টমারের মাপ একবার নিলে বারবার কাজে লাগে, অর্ডার কোন ধাপে আছে সবাই দেখে।", en: "Take a customer's measurements once; everyone sees which stage an order is in." },
      { bn: "অর্ডার নেওয়া, ডেলিভারি রেডি, বাকি মনে করানো, সব নিজে থেকে বাংলা এসএমএসে যায়।", en: "Order taken, ready and payment reminders go out as Bangla SMS by themselves." },
      { bn: "৮০/৫৮ মিমি রসিদ, A5 মেমো, আর দাম ছাড়া কারিগরের স্লিপ প্রিন্ট হয়।", en: "Prints 80/58 mm receipts, an A5 memo and a price-free karigor slip." }
    ],
    proof: {
      bn: "কারিগর কখনো দাম, পেমেন্ট বা কাস্টমারের ফোন নম্বর দেখতে পায় না। এটা সার্ভারেই আটকানো, শুধু স্ক্রিনে লুকানো না।",
      en: "Karigors never receive prices, payments or customers' numbers. It's blocked on the server, not just hidden on screen."
    },
    demo: "https://fita.147.93.168.43.sslip.io",
    note: { bn: "মালিক, কাউন্টার বা কারিগর হয়ে ঢুকুন, আপনার জন্য আলাদা একটা ডেমো দোকান খুলে যাবে", en: "Enter as owner, counter or karigor; you get your own private demo shop" },
    shots: [
      { f: "fita-2.webp", k: "p", c: { bn: "অর্ডার কোন ধাপে আছে, ফিতার মতো করে দেখায়", en: "Order progress drawn as a tape measure" } },
      { f: "fita-1.webp", k: "d", c: { bn: "মালিকের হোম: আজকের বিক্রি, বাকি, দেরি হওয়া অর্ডার", en: "Owner home: sales, dues, late orders" } },
      { f: "fita-3.webp", k: "p", c: { bn: "জরুরি, দেরি আর রেডি অর্ডার আলাদা করে", en: "Urgent, late and ready orders flagged" } }
    ]
  },
  {
    id: "hardware",
    trade: { bn: "হার্ডওয়্যার ও রড-সিমেন্ট", en: "Hardware & building materials" },
    name: { bn: "মালখানা", en: "Malkhana" },
    tone: "demo",
    head: {
      bn: "দোকান আর গোডাউনের মাল, লাভ আর চুরি ধরা, শুধু মালিকের চোখে।",
      en: "Shop and godown stock, profit and theft checks, for the owner's eyes only."
    },
    points: [
      { bn: "সিমেন্ট, রড, পাইপ: দোকান আর একাধিক গোডাউনের মাল একসাথে হিসাব হয়।", en: "Cement, rod and pipe counted across the shop and every godown." },
      { bn: "কোন স্টাফ কী দেখবে, কেনা দাম আর লাভ কে দেখবে, মালিক ঠিক করে দেন।", en: "The owner decides which staff see cost and profit." },
      { bn: "কেনা দামের নিচে বিক্রি, বাতিল বিল, বাড়তি ছাড়, গোডাউন বদলে মাল কম: সব ধরা পড়ে।", en: "Below-cost sales, voids, discounts and transfer shortages are all flagged." }
    ],
    proof: {
      bn: "প্রতিটা স্টাফ হিসেবে লগইন করে আমরা পরীক্ষা করি, কোথাও কেনা দাম বা লাভ ফাঁস হলে পরীক্ষা ফেল করে।",
      en: "Tests log in as every staff role and fail if cost or profit leaks anywhere."
    },
    demo: "https://malkhana.147.93.168.43.sslip.io",
    note: { bn: "মালিক, ম্যানেজার, কাউন্টার বা গোডাউন হয়ে ঢুকুন", en: "Enter as owner, manager, counter or godown" },
    shots: [
      { f: "malkhana-film.mp4", poster: "malkhana-film.webp", k: "v", c: { bn: "৩০ সেকেন্ডের ভিডিও: কাউন্টারে বিল থেকে মালিকের লাভ পর্যন্ত", en: "30-second video: from a counter bill to the owner's profit" } },
      { f: "malkhana-1.webp", k: "d", c: { bn: "মালিকের দিনের খাতা: বিক্রি আর লুকানো লাভ", en: "Owner's day book: sales and locked profit" } },
      { f: "malkhana-2.webp", k: "p", c: { bn: "কে কেনা দাম আর লাভ দেখবে", en: "Who sees cost and profit" } },
      { f: "malkhana-3.webp", k: "d", c: { bn: "স্টাফ ধরে অডিট, লোকসানে বিক্রি চিহ্নিত", en: "Audit by staff, below-cost sales flagged" } }
    ]
  },
  {
    id: "grocery",
    trade: { bn: "মুদি দোকান", en: "Grocery shop" },
    name: { bn: "হালখাতা", en: "Halkhata" },
    tone: "demo",
    status: { bn: "অ্যাপ ডাউনলোড করা যায়", en: "App available to download" },
    head: {
      bn: "বিক্রি, বাকি, স্টক আর দিনের হিসাব, শুধু একটা ফোনে।",
      en: "Sales, credit, stock and daily accounts, on one phone."
    },
    points: [
      { bn: "কে কত বাকি নিল, আজ কার কাছে চাইতে হবে, অ্যাপ নিজেই মনে করিয়ে দেয়।", en: "Who owes what, and whom to ask today." },
      { bn: "বাকির হিসাব লাইন ধরে হোয়াটসঅ্যাপে কাস্টমারকে পাঠানো যায়।", en: "Send a customer their itemised credit over WhatsApp." },
      { bn: "নেট লাগে না, অ্যাকাউন্ট লাগে না, পাসওয়ার্ডও না।", en: "No internet, no account, no password needed." }
    ],
    proof: {
      bn: "ফোন হারালেও খাতা হারায় না: এক ট্যাপে ব্যাকআপ, নতুন ফোনে আবার ফিরিয়ে আনা যায়।",
      en: "Losing the phone doesn't lose the book: one-tap backup, restored on a new phone."
    },
    demo: "https://halkhata.147.93.168.43.sslip.io/",
    note: { bn: "পেজ থেকে অ্যাপ নামিয়ে নিন, প্রথমবার শুধু দোকানের নাম চাইবে", en: "Download the app; first open only asks for the shop name" },
    shots: [
      { f: "halkhata-1.webp", k: "p", c: { bn: "বাকির খাতা: মোট বাকি আর আজ কার কাছে চাইবেন", en: "Credit book: total owed, who to ask today" } },
      { f: "halkhata-2.webp", k: "p", c: { bn: "দিনের হিসাব আর মাসের সারাংশ", en: "Daily accounts and month summary" } },
      { f: "halkhata-3.webp", k: "p", c: { bn: "হোয়াটসঅ্যাপে বাকির হিসাব", en: "Credit statement over WhatsApp" } }
    ]
  },
  {
    id: "gym",
    trade: { bn: "জিম", en: "Gym" },
    name: { bn: "আখড়া", en: "Akhra" },
    tone: "demo",
    head: {
      bn: "কার্ড ছোঁয়ালেই দরজা ঠিক করে কে ঢুকবে, ডেস্ক দেখে কে টাকা বাকি রেখেছে।",
      en: "Tap a card and the door decides; the desk sees who owes money."
    },
    points: [
      { bn: "মেম্বারশিপ শেষ হলে দরজা খোলে না, কিন্তু বের হতে কখনো আটকায় না।", en: "An expired membership doesn't open the door, but leaving is always allowed." },
      { bn: "কে এখন ভেতরে, আজ কত টাকা উঠল, কাকে ফোন করতে হবে, এক স্ক্রিনে।", en: "Who's inside, today's takings and who to call, on one screen." },
      { bn: "যারা আসা বন্ধ করেছে তাদের তালিকা, কত টাকার রিনিউ ঝুঁকিতে আছে সহ।", en: "Members who stopped coming, with the renewal money at risk." }
    ],
    proof: {
      bn: "দেড় হাজার টাকার একটা সাধারণ USB কার্ড রিডারেই চলে, দামি হার্ডওয়্যার কিনতে হয় না।",
      en: "Runs on an ordinary ~৳1,500 USB card reader, no expensive hardware."
    },
    demo: "https://akhra.147.93.168.43.sslip.io",
    note: { bn: "ডেমো জিমের লগইন আগে থেকেই ভরা, এক ট্যাপে ঢুকুন", en: "The demo gym's login is prefilled, one tap to enter" },
    shots: [
      { f: "akhra-1.webp", k: "d", c: { bn: "আজ: কে ভেতরে, কত আদায়, কাকে ফোন", en: "Today: who's inside, takings, who to call" } },
      { f: "akhra-2.webp", k: "p", c: { bn: "দরজার লগ: প্রতিটা কার্ড ছোঁয়া", en: "Door log: every card tap" } },
      { f: "akhra-3.webp", k: "d", c: { bn: "হারিয়ে যাওয়া মেম্বার", en: "Members drifting away" } }
    ]
  },
  {
    id: "laundry",
    trade: { bn: "লন্ড্রি", en: "Laundry" },
    name: { bn: "Cleaner Boy", en: "Cleaner Boy" },
    tone: "real",
    status: { bn: "ঢাকার একটা লন্ড্রিতে চলছে", en: "Running at a Dhaka laundry" },
    head: {
      bn: "কাস্টমার ফোনে বুক করে, দোকান ওজন করে, কাস্টমার দাম মেনে নিলে তবেই ধোয়া।",
      en: "Customers book by phone, the shop weighs the bag, and washing starts only after the customer approves the price."
    },
    points: [
      { bn: "কাস্টমার দরজায় ব্যাগ রেখে দেয়, পিকআপের দিন নিজেই বেছে নেয়।", en: "Customers leave the bag at the door and pick their pickup day." },
      { bn: "কেজি বা পিস ধরে দাম, বাংলা আর ইংরেজি দুটোতেই।", en: "Priced per kg or per piece, in Bangla and English." },
      { bn: "দোকানের পেছনের অফিস থেকে QR ব্যাগ ট্যাগ প্রিন্ট হয়।", en: "QR bag tags print from the shop's back office." }
    ],
    proof: {
      bn: "কাস্টমার দাম না মানলে দোকানের লোকও অর্ডারটা ধোয়ায় পাঠাতে পারে না। দাম নিয়ে ঝগড়ার জায়গাই থাকে না।",
      en: "Nothing enters washing until the customer approves the price, not even from the back office."
    },
    demo: "https://cleanerboy.online",
    demoLabel: { bn: "আসল সাইটটা দেখুন", en: "See the real site" },
    shots: [
      { f: "cleanerboy-1.webp", k: "p", c: { bn: "দরজায় ব্যাগ রেখে দিন", en: "Leave the bag at the door" } },
      { f: "cleanerboy-2.webp", k: "p", c: { bn: "সার্ভিস বেছে বুকিং", en: "Pick a service and book" } }
    ]
  },
  {
    id: "school",
    trade: { bn: "স্কুলের ওয়েবসাইট", en: "School website" },
    name: { bn: "প্রাঙ্গণ", en: "Prangon" },
    tone: "demo",
    head: {
      bn: "স্কুল নিজের ফোন থেকেই নিজের ওয়েবসাইট বানায়, সরকারি ফরম্যাটে।",
      en: "A school builds its own website from a phone, in the government format."
    },
    points: [
      { bn: "মাউশির (DSHE) ১০টা মেনুসহ সরকারি ফরম্যাট, অথবা ছবি-প্রধান সুন্দর টেমপ্লেট।", en: "The government format with the 10 DSHE menus, or a photo-led template." },
      { bn: "কী কী বাকি আছে তার চেকলিস্ট, প্রতিটায় ট্যাপ করলেই সেটা লেখার জায়গা খোলে।", en: "A checklist of what's missing, each item opens its editor." },
      { bn: "বিকাশ, নগদ বা ব্যাংকে বছরে বা মাসে পেমেন্ট।", en: "Pay yearly or monthly by bKash, Nagad or bank." }
    ],
    proof: {
      bn: "স্কুলের নিজের ডোমেইন লাগালে কয়েক সেকেন্ডেই নিরাপদ (https) হয়ে চালু হয়ে যায়।",
      en: "A school's own domain goes live with HTTPS within seconds."
    },
    demo: "https://kolkakoli-kg.prangon.dcampusbd.com",
    demoLabel: { bn: "একটা ডেমো স্কুল সাইট দেখুন", en: "See a demo school site" },
    shots: [
      { f: "prangon-3.webp", k: "d", c: { bn: "সরকারি ফরম্যাটে হাই স্কুলের সাইট", en: "High school site in the government format" } },
      { f: "prangon-2.webp", k: "p", c: { bn: "স্কুলের অ্যাপ: সাইটের লিংক আর চেকলিস্ট", en: "School app: site link and checklist" } },
      { f: "prangon-1.webp", k: "d", c: { bn: "কিন্ডারগার্টেনের ডেমো সাইট", en: "Kindergarten demo site" } }
    ]
  },
  {
    id: "tuition",
    trade: { bn: "টিউশন মিডিয়া", en: "Tuition media" },
    name: { bn: "টিউশন ডেস্ক", en: "Tuition Desk" },
    tone: "demo",
    head: {
      bn: "অভিভাবকের অনুরোধ থেকে মিডিয়া ফি আদায়, প্রতিটা টিউশন এক খাতায়।",
      en: "From a guardian's request to the media fee collected, every tuition in one book."
    },
    points: [
      { bn: "টিউশনের পোস্টে আবেদনকারী শিক্ষকরা মিল অনুযায়ী সাজানো থাকে।", en: "Applicants on each tuition post are ranked by fit." },
      { bn: "কোন শিক্ষকের কাছে কত মিডিয়া ফি পাওনা, কার দেরি হয়েছে, আলাদা করে দেখায়।", en: "Media fees owed, refunded and late, per tutor." },
      { bn: "একই বিকাশ TrxID দুবার দিলে সেভ হওয়ার আগেই ধরে ফেলে।", en: "A reused bKash TrxID is caught before the payment is saved." }
    ],
    proof: {
      bn: "ফি আর রিফান্ডের নিয়ম আপনার এজেন্সির মতো সেট করা যায়, আর টিউশন কনফার্মের দিন যে নিয়ম ছিল, পরেও সেটাই থাকে।",
      en: "Fee and refund rules follow your agency, and are frozen onto each tuition the day it's confirmed."
    },
    demo: "https://tuitiondesk.147.93.168.43.sslip.io",
    note: { bn: "হোম পেজে এক ট্যাপে মালিক হিসেবে ডেমো খুলুন", en: "One tap on the home page opens the owner demo" },
    shots: [
      { f: "ghotok-1.webp", k: "p", c: { bn: "আজ: পাওনা ফি, দেরি আর পরের কাজ", en: "Today: fees owed, late, next actions" } },
      { f: "ghotok-2.webp", k: "p", c: { bn: "টিউশন পোস্ট আর আবেদনকারী", en: "Tuition post and applicants" } },
      { f: "ghotok-3.webp", k: "p", c: { bn: "মিডিয়া ফির খাতা", en: "Media-fee ledger" } }
    ]
  },
  {
    id: "attendance",
    trade: { bn: "অফিসের হাজিরা", en: "Office attendance" },
    name: { bn: "উপস্থিত", en: "Upasthit" },
    tone: "demo",
    head: {
      bn: "অফিসের ভেতরে এসেই এক ট্যাপে হাজিরা, মালিক দেখেন সবাইকে এক বোর্ডে।",
      en: "One-tap check-in from inside the office, everyone on one board for the owner."
    },
    points: [
      { bn: "অফিসের সীমানার বাইরে থেকে হাজিরা দেওয়া যায় না, অনুরোধ পাঠাতে হয়।", en: "Outside the office area you can't check in, only send a request." },
      { bn: "প্রতিটা হাজিরার সাথে সেলফি, লোকেশন আর সার্ভারের সময় প্রমাণ হিসেবে থাকে।", en: "Every check-in carries a selfie, location and server time as evidence." },
      { bn: "সারাদিন লোকেশন ট্র্যাক করে না, শুধু হাজিরার মুহূর্তে।", en: "Location is read only at the moment of check-in, never all day." }
    ],
    proof: {
      bn: "চালু সার্ভারে ১৪৭টার মধ্যে ১৪৭টা পরীক্ষাই পাশ, প্রতিদিন ডেটার ব্যাকআপ হয়।",
      en: "147 of 147 checks passed against the live server; data is backed up daily."
    },
    demo: "https://upasthit.dcampusbd.com",
    note: { bn: "সাইট থেকে অ্যান্ড্রয়েড অ্যাপ নামিয়ে ডেমো কোড 246810 দিন, একটা ডেমো অফিস তৈরি হবে", en: "Download the Android app from the site and enter demo code 246810 for a sandbox office" },
    shots: [
      { f: "upasthit-1.webp", k: "p", c: { bn: "সেলফি দিয়ে হাজিরার পর", en: "After a selfie check-in" } },
      { f: "upasthit-2.webp", k: "p", c: { bn: "হাজিরার প্রমাণ", en: "Check-in evidence" } },
      { f: "upasthit-3.webp", k: "p", c: { bn: "সীমানার বাইরে: ৮০০ মিটার দূরে", en: "Outside the fence: 800 m away" } }
    ]
  },
  {
    id: "car-showroom",
    trade: { bn: "গাড়ির শোরুম", en: "Car showroom" },
    name: { bn: "গাড়িঘর", en: "Garighor" },
    tone: "demo",
    head: {
      bn: "ক্রেতা আসল দাম আর কাগজসহ গাড়ি খোঁজে, শোরুম প্রতিটা ফোন আর হোয়াটসঅ্যাপ লিড হিসেবে পায়।",
      en: "Buyers search cars with real prices and papers; the showroom gets every call and WhatsApp tap as a lead."
    },
    points: [
      { bn: "জাপান থেকে জাহাজে, বন্দরে, শোরুমে: গাড়ি কোথায় আছে ক্রেতা দেখতে পায়।", en: "Buyers see where a car is: Japan, at sea, at port or in the showroom." },
      { bn: "কোন গাড়ি দেখে কে ফোন দিল, সব লিড এক ইনবক্সে।", en: "Every lead in one inbox, tied to the car they asked about." },
      { bn: "স্টাফ কখনো কেনা দাম বা মার্জিন দেখে না।", en: "Staff never see cost or margin." }
    ],
    proof: {
      bn: "ইএমআই, দাম কমানো, বুকিং, রসিদ, প্রতিটা টাকার হিসাব আলাদা পরীক্ষায় যাচাই করা।",
      en: "EMI, price drops, bookings and receipts are each covered by their own tests."
    },
    demo: "https://garighor.147.93.168.43.sslip.io",
    note: { bn: "ক্রেতার সাইট খুলুন, শোরুমের অফিস দেখতে /office/?demo=owner", en: "Opens the buyer site; the showroom office is at /office/?demo=owner" },
    shots: [
      { f: "garighor-03-home-desktop.webp", k: "d", c: { bn: "ক্রেতার হোম পেজ", en: "Buyer home page" } },
      { f: "garighor-06-car-phone.webp", k: "p", c: { bn: "গাড়ির পাতা, ফোনে", en: "A car's page on a phone" } },
      { f: "garighor-12-office-leads-phone.webp", k: "p", c: { bn: "শোরুমের লিড ইনবক্স", en: "Showroom lead inbox" } },
      { f: "garighor-11-office-stock-desktop.webp", k: "d", c: { bn: "স্টক: জাপান থেকে বিক্রি পর্যন্ত", en: "Stock from Japan to sale" } }
    ]
  },
  {
    id: "travel",
    trade: { bn: "ট্রাভেল ও উমরাহ এজেন্সি", en: "Travel & Umrah agency" },
    name: { bn: "সফরখাতা", en: "Safarkhata" },
    tone: "built",
    head: {
      bn: "বুকিং, কিস্তি, পাসপোর্ট, ভিসা আর সাপ্লায়ারের পাওনা, এক জায়গায়।",
      en: "Bookings, installments, passports, visas and supplier dues in one place."
    },
    points: [
      { bn: "কার কিস্তি পেরিয়ে গেছে, কে কবে যাচ্ছেন, আজকের স্ক্রিনেই।", en: "Overdue installments and upcoming departures on today's screen." },
      { bn: "কার ভিসা কোন ধাপে কতদিন আটকে আছে, বোর্ডে দেখা যায়।", en: "A visa board showing each traveller's stage and days stuck." },
      { bn: "প্রতিটা কাস্টমার একটা লিংক পান: কত দিলেন, কত বাকি। আপনার লাভ সেখানে কখনো দেখায় না।", en: "Each customer gets a link showing what they paid and owe, never your profit." }
    ],
    proof: {
      bn: "একই পেমেন্ট একসাথে ২০ বার কনফার্ম করে পরীক্ষা করেছি, খাতায় উঠেছে ঠিক একবার।",
      en: "One payment confirmed 20 times at once still lands in the ledger exactly once."
    },
    shots: [
      { f: "safarkhata-1.webp", k: "d", c: { bn: "আজ: আদায়, পেরোনো কিস্তি, যাত্রা", en: "Today: collections, overdue, departures" } },
      { f: "safarkhata-3.webp", k: "p", c: { bn: "ফোনে বুকিং: পরিশোধ আর বাকি", en: "Booking on a phone: paid and due" } },
      { f: "safarkhata-2.webp", k: "d", c: { bn: "ভিসা বোর্ড", en: "Visa board" } }
    ]
  },
  {
    id: "poultry",
    trade: { bn: "পোল্ট্রি ফিড ডিলার", en: "Poultry feed dealer" },
    name: { bn: "তিরিশ", en: "Tirish" },
    tone: "built",
    head: {
      bn: "কোন খামারির কোন ব্যাচে কত বাকি, মুরগি বিক্রি পর্যন্ত।",
      en: "What each farmer owes per batch, until the birds are sold."
    },
    points: [
      { bn: "খাবার, ওষুধ আর নগদ, প্রতিটা ব্যাচের খাতায় আলাদা করে।", en: "Feed, medicine and cash on each batch's sheet." },
      { bn: "বিক্রির তারিখ পেরিয়ে গেছে এমন ব্যাচ আর মাঠে কত টাকা পড়ে আছে, হোমেই দেখা যায়।", en: "Batches past sale date and money out with farmers, on the home screen." },
      { bn: "নেট না থাকলেও এন্ট্রি দেওয়া যায়, পরে নিজে থেকে পাঠিয়ে দেয়।", en: "Entries work offline and send themselves later." }
    ],
    proof: {
      bn: "টাকা রাখা হয় পয়সায়, পূর্ণ সংখ্যায়। দশমিকের গরমিলে এক পয়সাও এদিক-ওদিক হয় না।",
      en: "Money is stored in whole poisha, so rounding can't move a single poisha."
    },
    shots: [
      { f: "tirish-1.webp", k: "p", c: { bn: "ডিলারের হোম: মাঠে কত টাকা", en: "Dealer home: money out with farmers" } },
      { f: "tirish-2.webp", k: "p", c: { bn: "খামারির ব্যাচের খাতা", en: "A farmer's batch sheet" } }
    ]
  },
  {
    id: "garage",
    trade: { bn: "ইজিবাইক ও অটো গ্যারেজ", en: "Easy-bike garage" },
    name: { bn: "চাকা", en: "Chaka" },
    tone: "built",
    head: {
      bn: "রোজকার জমা আদায়, আর কোন ড্রাইভারের কত বকেয়া।",
      en: "Daily rent collection and every driver's arrears."
    },
    points: [
      { bn: "রাতে জমা তোলার সময় প্রতিটা গাড়ির টাকা এক ট্যাপে।", en: "One tap per vehicle when collecting the night's rent." },
      { bn: "ড্রাইভারের পাতায় দিন ধরে বকেয়া জমার হিসাব।", en: "A driver's page builds arrears day by day." },
      { bn: "মাস শেষে আদায়, বন্ধের দিন, খরচ আর লাভ।", en: "Month end: collected, off days, expenses, profit." }
    ],
    proof: {
      bn: "গাড়ি বের হলে প্রতিদিন জমা ধরা হয়, যদি না কেউ কারণ লিখে দেয়। ফলে বকেয়া চুপচাপ হারিয়ে যায় না।",
      en: "A vehicle out owes every day unless someone writes why, so arrears can't quietly vanish."
    },
    shots: [
      { f: "chaka-1.webp", k: "p", c: { bn: "আজ রাতের জমা আদায়", en: "Tonight's rent collection" } },
      { f: "chaka-2.webp", k: "p", c: { bn: "ড্রাইভারের বকেয়া", en: "A driver's arrears" } },
      { f: "chaka-3.webp", k: "p", c: { bn: "মাসের হিসাব", en: "Monthly accounts" } }
    ]
  },
  {
    id: "print-kiosk",
    trade: { bn: "প্রিন্টের দোকান", en: "Print shop" },
    name: { bn: "ইজিপ্রিন্ট", en: "easyprintBD" },
    tone: "built",
    head: {
      bn: "প্রিন্টারের QR স্ক্যান, ফাইল আপলোড, বিকাশে পেমেন্ট, পাতা হাতে। দোকানে লোক লাগে না।",
      en: "Scan the printer's QR, upload, pay by bKash, collect the pages. No one at the counter."
    },
    points: [
      { bn: "কাস্টমারের কোনো অ্যাকাউন্ট খুলতে হয় না।", en: "No account needed for the customer." },
      { bn: "কত পাতা, কত টাকা, সার্ভার নিজেই গুনে নেয়।", en: "The server counts pages and price itself." },
      { bn: "প্রিন্ট হচ্ছে কিনা ফোনে সাথে সাথে দেখা যায়।", en: "Live print progress on the phone." }
    ],
    proof: {
      bn: "২৪ পাতার মধ্যে ৯ পাতায় কাগজ আটকালে, না ছাপা পাতার টাকাই শুধু ফেরত যায়।",
      en: "If paper jams at page 9 of 24, only the unprinted pages are refunded."
    },
    shots: [
      { f: "nexa-1.webp", k: "p", c: { bn: "ফাইল, পাতা আর দাম, তারপর পেমেন্ট", en: "File, pages and price, then pay" } },
      { f: "nexa-2.webp", k: "p", c: { bn: "প্রিন্ট চলার সময় লাইভ অবস্থা", en: "Live status while printing" } }
    ]
  },
  {
    id: "online-shop",
    trade: { bn: "অনলাইন শপ", en: "Online shop" },
    name: { bn: "শিশির", en: "Shishir" },
    tone: "demo",
    status: { bn: "লাইভ অনলাইন স্টোর", en: "Live online store" },
    head: {
      bn: "বাংলায় সাজানো অনলাইন দোকান, ক্যাশ অন ডেলিভারি, ৬৪ জেলায় ডেলিভারি চার্জসহ।",
      en: "A Bangla-first online store with cash on delivery and charges for all 64 districts."
    },
    points: [
      { bn: "পেমেন্টের আগে কাস্টমার আসল বাক্সের ছবি পান, ব্যাচ আর মেয়াদসহ।", en: "Shoppers get a photo of the actual box, with batch and expiry, before paying." },
      { bn: "৬ প্রশ্নের কুইজ, উত্তর দিলে পণ্য বেছে দেয়।", en: "A 6-question quiz that picks products for the shopper." },
      { bn: "অর্ডার সরাসরি নিজের অর্ডার-খাতায় আসে, আলাদা স্ট্যাটাসসহ।", en: "Orders land in the shop's own order book with statuses." }
    ],
    proof: {
      bn: "ভুয়া রিভিউ বা বানানো স্টক সংখ্যা নেই। বিশ্বাস আসে প্রমাণ দেখিয়ে।",
      en: "No fake reviews or invented stock counts. Trust comes from proof."
    },
    demo: "https://shishirbd.shop",
    demoLabel: { bn: "দোকানটা দেখুন", en: "Visit the store" },
    shots: [
      { f: "shishir-1.webp", k: "p", c: { bn: "হোম পেজ", en: "Home page" } },
      { f: "shishir-2.webp", k: "p", c: { bn: "পণ্যের তালিকা, টাকায় দাম", en: "Product grid in taka" } },
      { f: "shishir-3.webp", k: "p", c: { bn: "পণ্যের পাতা", en: "Product page" } }
    ]
  },
  {
    id: "supplies",
    trade: { bn: "পাইকারি সাপ্লাই", en: "Wholesale supply" },
    name: { bn: "কাঁচি", en: "Kanchi" },
    tone: "demo",
    status: { bn: "লাইভ প্রোটোটাইপ", en: "Live prototype" },
    head: {
      bn: "সেলুন আর পার্লারের জিনিস, দুই ট্যাপে আবার অর্ডার, গুদাম থেকে ডেলিভারি পর্যন্ত।",
      en: "Salon and parlour supplies, two-tap reorders, from warehouse to delivery."
    },
    points: [
      { bn: "বেশি নিলে কম দাম, ধাপে ধাপে দেখানো।", en: "Bulk price tiers, shown step by step." },
      { bn: "ক্যাশ অন ডেলিভারি বা বিকাশ।", en: "Cash on delivery or bKash." },
      { bn: "গুদামের বোর্ড: নতুন, প্যাক হয়েছে, কুরিয়ারে, পৌঁছেছে।", en: "Warehouse board: new, packed, with courier, delivered." }
    ],
    proof: {
      bn: "ক্রেতার অ্যাপ আর গুদামের প্যানেল পাশাপাশি খুলে পুরো অর্ডারটা নিজে চালিয়ে দেখতে পারবেন।",
      en: "Open the buyer app and the warehouse panel side by side and walk an order end to end."
    },
    demo: "https://kanchi.147.93.168.43.sslip.io/",
    note: { bn: "শুরুর পাতা থেকে ক্রেতার অ্যাপ আর গুদামের প্যানেল খুলুন", en: "Open the buyer app and the warehouse panel from the start page" },
    shots: [
      { f: "kanchi-1.webp", k: "p", c: { bn: "দুই ট্যাপে আবার অর্ডার", en: "Two-tap reorder" } },
      { f: "kanchi-3.webp", k: "d", c: { bn: "গুদামের বোর্ড", en: "Warehouse board" } },
      { f: "kanchi-2.webp", k: "p", c: { bn: "পাইকারি দামের ধাপ", en: "Bulk price tiers" } }
    ]
  },
  {
    id: "sales-team",
    trade: { bn: "সেলস টিম ও কল সেন্টার", en: "Sales team & call centre" },
    name: { bn: "সেলস ডেস্ক · ডাক", en: "Sales Desk · Daak" },
    tone: "real",
    status: { bn: "সেলস ডেস্ক একটা কোম্পানিতে প্রতিদিন চলছে", en: "Sales Desk is in daily use at a company" },
    head: {
      bn: "গুগল শিটের জায়গায় আসল সেলস সিস্টেম, সাথে বাংলায় কথা বলা এআই কলার।",
      en: "A real sales system in place of the Google Sheet, plus an AI caller that speaks Bangla."
    },
    points: [
      { bn: "সেলস ডেস্ক: এক কোম্পানির ১০,১৪১টা লিড শিট থেকে তুলে এনেছি, একটা সারিও হারায়নি।", en: "Sales Desk: moved one company's 10,141 leads out of a sheet without losing a row." },
      { bn: "এজেন্ট এক ট্যাপে কলের ফল লেখে, ম্যানেজার দেখেন কোন বিজ্ঞাপন থেকে কত বিক্রি।", en: "Agents log a call in one tap; the manager sees sales per ad campaign." },
      { bn: "ডাক: এআই আপনার লিডদের ফোন করে স্বাভাবিক বাংলায় কথা বলে, ডেমো বুক বা অর্ডার কনফার্ম করে। এটা এখন ডেমো হিসেবে চালু।", en: "Daak: an AI that calls your leads in natural Bangla to book demos or confirm orders. It runs as a demo for now." }
    ],
    proof: {
      bn: "ডাক সবসময় শুরুতেই বলে যে সে একজন ডিজিটাল সহকারী আর কলটা রেকর্ড হচ্ছে। এই নিয়ম বদলানো যায় না।",
      en: "Daak always says it's a digital assistant and that the call is recorded. That rule can't be switched off."
    },
    demo: "https://daak.147.93.168.43.sslip.io/demo",
    demoLabel: { bn: "ডাক-এর ডেমো কলটা নিন", en: "Take Daak's demo call" },
    note: { bn: "সেলস ডেস্ক কাস্টমারের নিজের সিস্টেম, তাই স্ক্রিন দেখাচ্ছি না। ডাক-এর ডেমো ব্রাউজারেই চলে।", en: "Sales Desk is a client's own system, so its screens stay private. Daak's demo runs in the browser." },
    shots: [
      { f: "daak-1.webp", k: "d", c: { bn: "ডাক: একটা ব্যবসা বেছে কল নিন", en: "Daak: pick a business and take its call" } },
      { f: "daak-2.webp", k: "d", c: { bn: "কণ্ঠ বাছাই আর নিজের ওয়েবসাইট দিয়ে চেষ্টা", en: "Voice choice and your own website" } }
    ]
  }
];
