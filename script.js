/* ============================================
   CEYLON EXCURSION TOURS — script.js
   ============================================ */

const PHONE = "0716966245";
const WHATSAPP_LINK = "https://wa.me/94716966245";

// Default WhatsApp message template. Use newlines (\n) — encodeURIComponent will
// convert them to %0A which WhatsApp understands as line breaks.
// Starts with an intro, then the booking fields.
const WHATSAPP_TEMPLATE = `Hi , I need to book a tour with Ceylon Excursion Tours. \n Here are my details. \nName :\nHead count :\nContact number :\nDate :`;

/**
 * Build a full whatsapp URL including an encoded text message.
 * Optionally pass an overrides object to prefill fields: { name, headCount, contactNumber, date }
 */
function buildWhatsAppUrl(overrides = {}) {
  const name = overrides.name || "";
  const headCount = overrides.headCount || "";
  const contactNumber = overrides.contactNumber || "";
  const date = overrides.date || "";

  // If any override provided, inject them into the template lines.
  let msg = WHATSAPP_TEMPLATE;
  if (name || headCount || contactNumber || date) {
    msg = `Hi , I need to book a tour with Ceylon Excursion Tours. \n Here are my details. \n Name : ${name}\nHead count : ${headCount}\nContact number : ${contactNumber}\nDate : ${date}`;
  }

  return `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`;
}

// Update all anchor tags that point to the whatsapp base link so they open with the template
function updateWhatsappLinks(overrides = {}) {
  try {
    const selector = `a[href^="${WHATSAPP_LINK}"]`;
    document.querySelectorAll(selector).forEach((a) => {
      a.href = buildWhatsAppUrl(overrides);
      a.target = "_blank";
    });
  } catch (e) {
    // Ignore if DOM not ready
  }
}

const TOURS = {
  galle: {
    id: "galle",
    name: "Galle Day Tour",
    tagline: "Coastal Heritage & River Safari",
    price: 30,
    color: "#0E7C5F",
    accent: "#B8E8D6",
    image: "images/galle_fort_2.jpeg",
    highlights: ["Madu Ganga River Safari", "Galle Fort UNESCO Site"],
    places: [
      "Madu Ganga River",
      "Galle Fort",
      "Galle Lighthouse",
      "Dutch Reformed Church",
      "Maritime Museum",
    ],
    itinerary: [
      { time: "6:00 AM", desc: "Pickup from Pettah Railway Station" },
      { time: "7:00 AM", desc: "Depart Colombo via Southern Expressway" },
      {
        time: "9:00 AM",
        desc: "Madu Ganga boat safari – explore mangrove islands, cinnamon plantations & river temples",
      },
      {
        time: "11:30 AM",
        desc: "Arrive at Galle – guided walking tour of Galle Fort",
      },
      {
        time: "12:30 PM",
        desc: "Lunch at a local restaurant inside the Fort (included)",
      },
      {
        time: "1:30 PM",
        desc: "Explore the Dutch Reformed Church, Lighthouse, Maritime Museum & rampart walls",
      },
      { time: "3:30 PM", desc: "Free time for shopping & photos" },
      { time: "4:30 PM", desc: "Depart Galle" },
      { time: "8:30 PM", desc: "Arrive back in Colombo" },
    ],
  },
  kandy: {
    id: "kandy",
    name: "Kandy Day Tour",
    tagline: "Sacred City & Hill Country",
    price: 30,
    color: "#8B1E3F",
    accent: "#F2D0DC",
    image: "images/dalada_maligawa.jpeg",
    highlights: ["Temple of the Sacred Tooth Relic", "Kandy Lake & City Tour"],
    places: [
      "Sri Dalada Maligawa",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Spice Garden",
    ],
    itinerary: [
      { time: "6:00 AM", desc: "Pickup from Pettah Railway Station" },
      {
        time: "6:30 AM",
        desc: "Depart Colombo – scenic drive through hill country",
      },
      { time: "9:30 AM", desc: "Visit a spice & herbal garden en route" },
      {
        time: "10:30 AM",
        desc: "Arrive in Kandy – visit the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)",
      },
      { time: "12:00 PM", desc: "Lunch at a local restaurant (included)" },
      {
        time: "1:00 PM",
        desc: "Kandy city tour – Kandy Lake, Upper Lake Drive viewpoint",
      },
      {
        time: "2:30 PM",
        desc: "Visit the Royal Botanical Gardens in Peradeniya",
      },
      {
        time: "4:30 PM",
        desc: "Free time for shopping – gems, batik & handicrafts",
      },
      { time: "5:00 PM", desc: "Depart Kandy" },
      { time: "8:30 PM", desc: "Arrive back in Colombo" },
    ],
  },
  sigiriya: {
    id: "sigiriya",
    name: "Sigiriya & Dambulla Tour",
    tagline: "Ancient Wonders & Cave Temples",
    price: 30,
    color: "#C46B1A",
    accent: "#FADED0",
    image: "images/Seegiriya_3.jpeg",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple"],
    places: [
      "Sigiriya Rock Fortress",
      "Sigiriya Frescoes",
      "Dambulla Cave Temple",
      "Cultural Triangle",
    ],
    itinerary: [
      { time: "6:00 AM", desc: "Pickup from Pettah Railway Station" },
      {
        time: "6:30 AM",
        desc: "Depart Colombo heading north through the Cultural Triangle",
      },
      {
        time: "9:30 AM",
        desc: "Arrive at Sigiriya – climb the iconic Lion Rock Fortress",
      },
      {
        time: "11:30 AM",
        desc: "Explore the summit palace ruins, mirror wall & Sigiriya frescoes",
      },
      { time: "12:30 PM", desc: "Lunch at a local restaurant (included)" },
      {
        time: "1:30 PM",
        desc: "Drive to Dambulla Cave Temple (UNESCO World Heritage Site)",
      },
      {
        time: "2:00 PM",
        desc: "Guided tour of the five cave temples – ancient Buddhist murals & over 150 Buddha statues",
      },
      { time: "4:00 PM", desc: "Depart Dambulla" },
      { time: "8:30 PM", desc: "Arrive back in Colombo" },
    ],
  },
};

const GALLERY_IMAGES = [
  { src: "images/galle_fort_2.jpeg", label: "Galle Fort" },
  { src: "images/Seegiriya_2.jpeg", label: "Sigiriya" },
  { src: "images/dalada_maligawa.jpeg", label: "Dalada Maligawa, Kandy" },
  { src: "images/galle_fort_3.jpeg", label: "Galle Fort Lighthouse" },
  { src: "images/Seegiriya_1.jpeg", label: "Sigiriya" },
  { src: "images/galle_fort_1.jpeg", label: "Galle Fort Clock Tower" },
  { src: "images/Seegiriya_3.jpeg", label: "Sigiriya" },
  { src: "images/madu_ganga_1.jpeg", label: "Madu Ganga River — Boat Safari" },
  { src: "images/madu_ganga_2.jpeg", label: "Madu Ganga — Mangroves" },
  {
    src: "images/dalada_maligawa_2.jpeg",
    label: "Dalada Maligawa",
  },
];

// ---- State ----
let currentPage = "home";
let selectedTour = null;
let selectedDate = null;
let lightboxIndex = -1;

// ---- Navigation ----
function init() {
  window.addEventListener("scroll", handleScroll);
  document
    .getElementById("nav-home")
    .addEventListener("click", () => navigate("home"));
  document
    .getElementById("nav-faq")
    .addEventListener("click", () => navigate("faq"));
  document
    .getElementById("nav-book")
    .addEventListener("click", () => navigate("book"));
  document
    .getElementById("nav-home-m")
    .addEventListener("click", () => navigate("home"));
  document
    .getElementById("nav-faq-m")
    .addEventListener("click", () => navigate("faq"));
  document
    .getElementById("nav-book-m")
    .addEventListener("click", () => navigate("book"));
  document
    .getElementById("hero-book-btn")
    .addEventListener("click", () => navigate("book"));
  document
    .getElementById("cta-book-btn")
    .addEventListener("click", () => navigate("book"));
  document.getElementById("burger").addEventListener("click", toggleMobile);
  document
    .getElementById("logo-btn")
    .addEventListener("click", () => navigate("home"));
  initFAQ();
  initGallery();
  initLightbox();
  buildCalendars();
  buildBookCards();
  navigate("home");
}

function navigate(page) {
  currentPage = page;
  document
    .getElementById("page-home")
    .classList.toggle("hidden", page !== "home");
  document
    .getElementById("page-faq")
    .classList.toggle("hidden", page !== "faq");
  document
    .getElementById("page-book")
    .classList.toggle("hidden", page !== "book");
  // Update nav
  document
    .querySelectorAll(".nav-link")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("nav-" + page).classList.add("active");
  // Mobile
  document
    .querySelectorAll(".nav-mobile button")
    .forEach((el) => el.classList.remove("active-mobile"));
  document.getElementById("nav-" + page + "-m").classList.add("active-mobile");
  document.getElementById("mobile-menu").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  const nav = document.getElementById("main-nav");
  if (window.scrollY > 40) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}

function toggleMobile() {
  document.getElementById("mobile-menu").classList.toggle("open");
}

// ---- FAQ Accordion ----
function initFAQ() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-a");
      const toggle = btn.querySelector(".toggle");
      const isOpen = answer.classList.contains("open");
      // Close all
      document
        .querySelectorAll(".faq-a")
        .forEach((a) => a.classList.remove("open"));
      document
        .querySelectorAll(".faq-q .toggle")
        .forEach((t) => t.classList.remove("open"));
      if (!isOpen) {
        answer.classList.add("open");
        toggle.classList.add("open");
      }
    });
  });
}

// ---- Gallery & Lightbox ----
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  GALLERY_IMAGES.forEach((img, i) => {
    const div = document.createElement("div");
    div.className = "gallery-item" + (i === 1 || i === 3 ? " tall" : "");
    div.innerHTML = `<img src="${img.src}" alt="${img.label}" loading="lazy"><div class="label">${img.label}</div>`;
    div.addEventListener("click", () => openLightbox(i));
    grid.appendChild(div);
  });
}

function initLightbox() {
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => lbNav(-1));
  document.getElementById("lb-next").addEventListener("click", () => lbNav(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightboxIndex < 0) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "ArrowRight") lbNav(1);
  });
}

function openLightbox(i) {
  lightboxIndex = i;
  document.getElementById("lb-img").src = GALLERY_IMAGES[i].src;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  lightboxIndex = -1;
  document.getElementById("lightbox").classList.remove("open");
}
function lbNav(dir) {
  lightboxIndex =
    (lightboxIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  document.getElementById("lb-img").src = GALLERY_IMAGES[lightboxIndex].src;
}

// ---- Tour Detail Modal ----
function openModal(tourId) {
  const t = TOURS[tourId];
  if (!t) return;
  const m = document.getElementById("tour-modal");
  document.getElementById("modal-img").src = t.image;
  document.getElementById("modal-grad").style.background =
    `linear-gradient(to top, ${t.color}ee 0%, ${t.color}88 40%, transparent 100%)`;
  document.getElementById("modal-title").textContent = t.name;
  document.getElementById("modal-subtitle").innerHTML =
    `${t.tagline} — <strong>$${t.price} per person</strong>`;
  document.getElementById("modal-section-itin").style.color = t.color;
  document.getElementById("modal-section-places").style.color = t.color;

  // Itinerary
  const itinEl = document.getElementById("modal-itinerary");
  itinEl.querySelector(".line").style.background =
    `linear-gradient(to bottom, ${t.color}, ${t.accent})`;
  itinEl.querySelectorAll(".itinerary-item").forEach((el) => el.remove());
  t.itinerary.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "itinerary-item";
    const isFill = i === 0 || i === t.itinerary.length - 1;
    div.innerHTML = `
      <div class="dot ${isFill ? "filled" : ""}" style="border-color:${t.color};color:${t.color};${isFill ? "background:" + t.color : "background:#fff"}"></div>
      <div class="time" style="color:${t.color}">${item.time}</div>
      <div class="desc">${item.desc}</div>`;
    itinEl.appendChild(div);
  });

  // Places
  const placesEl = document.getElementById("modal-places");
  placesEl.innerHTML = "";
  t.places.forEach((p) => {
    const s = document.createElement("span");
    s.style.background = t.accent;
    s.style.color = t.color;
    s.textContent = "📍 " + p;
    placesEl.appendChild(s);
  });

  // Book btn
  const bookBtn = document.getElementById("modal-book-btn");
  bookBtn.style.background = t.color;
  bookBtn.textContent = `Book This Tour — $${t.price} per person`;
  bookBtn.onclick = () => {
    closeModal();
    selectedTour = tourId;
    navigate("book");
    updateBookUI();
  };

  m.classList.add("open");
}
function closeModal() {
  document.getElementById("tour-modal").classList.remove("open");
}

// ---- Booking Page ----
function buildBookCards() {
  const grid = document.getElementById("book-tours-grid");
  Object.values(TOURS).forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "book-tour-card";
    btn.dataset.tour = t.id;
    btn.innerHTML = `
      <img src="${t.image}" alt="${t.name}">
      <div class="book-tour-card-body">
        <h4>${t.name}</h4>
        <div class="tagline">${t.tagline}</div>
        <div class="price" style="color:${t.color}">$${t.price} <small>/ person</small></div>
      </div>`;
    btn.addEventListener("click", () => {
      selectedTour = t.id;
      selectedDate = null;
      updateBookUI();
    });
    grid.appendChild(btn);
  });
}

function updateBookUI() {
  // Highlight selected card
  document.querySelectorAll(".book-tour-card").forEach((el) => {
    const id = el.dataset.tour;
    const t = TOURS[id];
    el.classList.toggle("selected", id === selectedTour);
    el.style.borderColor = id === selectedTour ? t.color : "#e5e7eb";
    el.style.background = id === selectedTour ? t.accent : "#fff";
  });
  // Calendar
  document
    .getElementById("calendar-section")
    .classList.toggle("hidden", !selectedTour);
  if (selectedTour) {
    const t = TOURS[selectedTour];
    document.getElementById("cal-heading").style.color = t.color;
    highlightCalDays();
  }
  // Summary
  updateSummary();
}

function buildCalendars() {
  const wrap = document.getElementById("calendars-wrap");
  const now = new Date();
  const months = [
    { month: now.getMonth(), year: now.getFullYear() },
    {
      month: (now.getMonth() + 1) % 12,
      year: now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear(),
    },
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach(({ month, year }) => {
    const div = document.createElement("div");
    div.className = "cal-month";
    let html = `<h4>${monthNames[month]} ${year}</h4><div class="cal-grid">`;
    dayNames.forEach((d) => (html += `<div class="cal-day-name">${d}</div>`));
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 0; i < firstDay; i++) html += `<div class="cal-day"></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dow = date.getDay();
      const isAvail =
        (dow === 0 || dow === 3 || dow === 6) &&
        date >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
      html += `<button class="cal-day${isAvail ? " available" : ""}" data-date="${year}-${month}-${d}" ${!isAvail ? "disabled" : ""}>${d}</button>`;
    }
    html += `</div>`;
    div.innerHTML = html;
    wrap.appendChild(div);
  });

  // Attach events
  wrap.querySelectorAll(".cal-day.available").forEach((btn) => {
    btn.addEventListener("click", () => {
      const [y, m, d] = btn.dataset.date.split("-").map(Number);
      selectedDate = new Date(y, m, d);
      highlightCalDays();
      updateSummary();
    });
  });
}

function highlightCalDays() {
  const t = TOURS[selectedTour];
  document.querySelectorAll(".cal-day.available").forEach((btn) => {
    const [y, m, d] = btn.dataset.date.split("-").map(Number);
    const date = new Date(y, m, d);
    const isSel = selectedDate && date.getTime() === selectedDate.getTime();
    btn.classList.toggle("selected", isSel);
    btn.style.background = isSel ? t.color : "#f0fdf4";
    btn.style.color = isSel ? "#fff" : t.color;
    btn.style.borderColor = isSel ? t.color : "transparent";
  });
}

function updateSummary() {
  const box = document.getElementById("summary-section");
  if (!selectedTour || !selectedDate) {
    box.classList.add("hidden");
    return;
  }
  box.classList.remove("hidden");
  const t = TOURS[selectedTour];
  document.getElementById("sum-tour").textContent = t.name;
  document.getElementById("sum-date").textContent =
    selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  document.getElementById("sum-price").textContent = `$${t.price} per person`;
  document.getElementById("sum-price").style.color = t.color;
  document.getElementById("sum-cta").style.background =
    `linear-gradient(135deg, ${t.color}, ${t.color}dd)`;
}

// ---- Home page tour card book buttons ----
document.addEventListener("DOMContentLoaded", () => {
  init();
  // Tour card buttons
  document.querySelectorAll("[data-tour-detail]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.tourDetail));
  });
  document.querySelectorAll("[data-tour-book]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTour = btn.dataset.tourBook;
      navigate("book");
      updateBookUI();
    });
  });
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  // Ensure WhatsApp links include the default template when the page loads
  updateWhatsappLinks();
});
