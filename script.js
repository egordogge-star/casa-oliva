"use strict";

const italian = {
  skip: "Salta al contenuto",
  home: "Casa Oliva, pagina iniziale",
  brandSubtitle: "Trattoria italiana",
  navToggle: "Apri o chiudi la navigazione",
  mainNav: "Navigazione principale",
  navStory: "La nostra storia",
  navMenu: "Menù",
  navGallery: "Gli ambienti",
  navVisit: "Orari",
  languages: "Lingua del sito",
  langEn: "Inglese",
  langIt: "Italiano",
  book: "Prenota un tavolo",
  bookShort: "Prenota",
  heroEyebrow: "I sapori del Sud Italia",
  heroTitle: "Si mangia bene.",
  heroItalic: "Senza fretta.",
  heroIntro: "Pasta fatta a mano, il calore della Puglia e un tavolo a cui restare volentieri.",
  seeMenu: "Sfoglia il menù",
  location: "Puglia, Italia",
  fictionalShort: "Trattoria immaginaria · Progetto portfolio",
  discover: "Scopri Casa Oliva",
  storyAlt: "Mani infarinate sollevano una sfoglia di pasta fresca sopra un piano in legno",
  storyCaption: "Pasta fresca, fatta a mano",
  storyTitle: "Radici in",
  storyItalic: "Puglia.",
  storyLead: "I piatti migliori nascono da pochi ingredienti buoni e da mani che li sanno lavorare.",
  storyBody: "Casa Oliva si ispira alle cucine del Sud Italia. Tiriamo la pasta a mano, seguiamo le stagioni e portiamo i piatti in tavola appena sono pronti. Il pane per fare la scarpetta non manca mai.",
  menuTitle: "Dalla nostra",
  menuItalic: "cucina.",
  menuIntro: "Si comincia con un piatto da condividere. Poi c’è sempre spazio per il dolce.",
  filterLabel: "Filtra i piatti per categoria",
  all: "Tutti i piatti",
  starters: "Antipasti",
  pasta: "Primi",
  mains: "Secondi",
  desserts: "Dolci",
  burrata: "Burrata e pomodori di varietà antiche",
  burrataDesc: "Basilico, olio extravergine d’oliva, pane a lievitazione naturale grigliato",
  focaccia: "Focaccia barese",
  focacciaDesc: "Pomodorini, olive, origano, sale marino",
  pappardelle: "Pappardelle al ragù",
  pappardelleDesc: "Pasta tagliata a mano, ragù di manzo a cottura lenta, Parmigiano",
  orecchiette: "Orecchiette alle cime di rapa",
  orecchietteDesc: "Cime di rapa, acciughe, aglio, pangrattato tostato",
  branzino: "Branzino al forno",
  branzinoDesc: "Limone, erbe aromatiche, patate schiacciate",
  melanzane: "Parmigiana di melanzane",
  melanzaneDesc: "Melanzane al forno, pomodoro, mozzarella, basilico",
  tiramisu: "Tiramisù della casa",
  tiramisuDesc: "Espresso, mascarpone, cacao",
  panna: "Panna cotta alla vaniglia",
  pannaDesc: "Agrumi di stagione, mandorle tostate",
  signaturesEyebrow: "Le specialità",
  signaturesTitle: "I preferiti",
  signaturesItalic: "della casa.",
  burrataAlt: "Burrata con pomodori e basilico su un piatto di ceramica",
  pappardelleAlt: "Pappardelle con ragù di manzo e Parmigiano grattugiato",
  tiramisuAlt: "Una fetta di tiramisù spolverata di cacao su un piatto bianco",
  galleryTitle: "Entrate",
  galleryItalic: "pure.",
  galleryIntro: "Tovaglie di lino, il chiarore delle lampade sulle vecchie pareti in pietra e un ulivo nel cortile.",
  roomAlt: "Sala in pietra a lume di candela con sedie in legno e tovaglie di lino",
  room: "La sala",
  tableAlt: "Un rametto d’ulivo e una candela accanto a un piatto di ceramica",
  table: "A tavola",
  entranceAlt: "Un ingresso in pietra con foglie d’ulivo e vasi di terracotta",
  entrance: "Dal cortile",
  visitTitle: "Ci vediamo",
  visitItalic: "a tavola.",
  hours: "Orari di apertura",
  tueThu: "Martedì–giovedì",
  timeTueThu: "18:00–22:00",
  friSat: "Venerdì–sabato",
  timeFriSat: "18:00–23:00",
  sunday: "Domenica",
  timeSunday: "12:00–16:00",
  monday: "Lunedì",
  closed: "Chiuso",
  reservationNote: "Prova la demo con una data, un orario e il numero di persone. Il modulo non richiede recapiti.",
  date: "Data",
  time: "Orario",
  guests: "Persone",
  previewBooking: "Mostra anteprima",
  faqTitle: "Da",
  faqItalic: "sapere.",
  faqRealQ: "Casa Oliva esiste davvero?",
  faqRealA: "Casa Oliva è un progetto portfolio immaginario ispirato alla Puglia. Il menù, gli orari e le fotografie illustrano il concept della trattoria.",
  faqBookingQ: "Cosa succede quando visualizzo l’anteprima?",
  faqBookingA: "Nel browser vedrai un riepilogo con data, orario e numero di persone. Le scelte restano su questa pagina e la demo non effettua prenotazioni reali.",
  faqDietQ: "Il menù propone piatti vegetariani?",
  faqDietA: "Sì. Nel menù di esempio, la focaccia barese e la parmigiana di melanzane sono opzioni vegetariane.",
  footerNav: "Navigazione a piè di pagina",
  faq: "Domande frequenti",
  fictionalFooter: "Casa Oliva è una trattoria immaginaria creata per un progetto portfolio.",
  backTop: "Torna su"
};

const siteCopy = {
  en: {
    locale: "en-GB",
    title: "Casa Oliva — Italian Trattoria",
    description: "Casa Oliva is a fictional Italian trattoria in Puglia, created as a restaurant website portfolio project.",
    menuCount: (count) => `${count} dishes shown`,
    selectDate: "Choose a date",
    selectTime: "Choose a time",
    firstDate: "Choose a date first",
    selectGuests: "Choose party size",
    validation: "Choose a date, time and party size to see your preview.",
    party: (count) => `${count} ${count === 1 ? "guest" : "guests"}`,
    preview: (date, time, party) => `Demo preview for ${party} on ${date} at ${time}. No table has been booked.`
  },
  it: {
    locale: "it-IT",
    title: "Casa Oliva — Trattoria italiana",
    description: "Casa Oliva è una trattoria immaginaria in Puglia, creata come progetto portfolio di web design.",
    menuCount: (count) => `Piatti visualizzati: ${count}`,
    selectDate: "Scegli una data",
    selectTime: "Scegli un orario",
    firstDate: "Scegli prima una data",
    selectGuests: "Scegli il numero di persone",
    validation: "Scegli data, orario e numero di persone per vedere l’anteprima.",
    party: (count) => `${count} ${count === 1 ? "persona" : "persone"}`,
    preview: (date, time, party) => `Anteprima per ${party}, ${date} alle ${time}. La demo non effettua prenotazioni reali.`
  }
};

const translations = [
  ["data-i18n", (element) => element.textContent, (element, value) => { element.textContent = value; }],
  ["data-i18n-alt", (element) => element.alt, (element, value) => { element.alt = value; }],
  ["data-i18n-aria", (element) => element.getAttribute("aria-label"), (element, value) => { element.setAttribute("aria-label", value); }]
].flatMap(([attribute, read, write]) =>
  [...document.querySelectorAll(`[${attribute}]`)].map((element) => ({
    element, write, en: read(element), it: italian[element.getAttribute(attribute)]
  }))
);

let language = "en";

const header = document.querySelector(".site-header");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const mobile = window.matchMedia("(max-width: 900px)");

function setNavigation(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => setNavigation(navToggle.getAttribute("aria-expanded") === "false"));
nav.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || navToggle.getAttribute("aria-expanded") === "false") return;
  const destination = document.querySelector(link.hash);
  destination.setAttribute("tabindex", "-1");
  destination.focus({ preventScroll: true });
  setNavigation(false);
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setNavigation(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setNavigation(false);
    navToggle.focus();
  }
});
mobile.addEventListener("change", () => setNavigation(false));
header.classList.add("is-enhanced");
navToggle.hidden = false;

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const menuItems = [...document.querySelectorAll("[data-category]")];
const menuStatus = document.querySelector("#menu-status");
let activeFilter = "all";

function renderMenu(announce) {
  filterButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter)));
  let count = 0;
  menuItems.forEach((item) => {
    const visible = activeFilter === "all" || item.dataset.category === activeFilter;
    item.hidden = !visible;
    count += Number(visible);
  });
  if (announce) menuStatus.textContent = siteCopy[language].menuCount(count);
}

filterButtons.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  renderMenu(true);
}));
document.querySelector(".menu-filters").hidden = false;

const bookingForm = document.querySelector("#booking-form");
const bookingDate = document.querySelector("#booking-date");
const bookingTime = document.querySelector("#booking-time");
const bookingGuests = document.querySelector("#booking-guests");
const bookingStatus = document.querySelector("#booking-status");
const openingHours = [ [12, 16], null, [18, 22], [18, 22], [18, 22], [18, 23], [18, 23] ];
let bookingMessage = "";

// The demo offers the next six weeks, using the visitor's local calendar.
const bookableDates = new Map();
const today = new Date();
for (let offset = 1; offset <= 42; offset += 1) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset, 12);
  if (!openingHours[date.getDay()]) continue;
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  bookableDates.set(`${date.getFullYear()}-${month}-${day}`, date);
}

function updateOptions(select, placeholder, options) {
  const previous = select.value;
  const empty = new Option(placeholder, "");
  empty.disabled = true;
  select.replaceChildren(empty, ...options.map(([value, label]) => new Option(label, value)));
  select.value = options.some(([value]) => String(value) === previous) ? previous : "";
}

function formatTime(minutes) {
  const time = new Date(Date.UTC(2000, 0, 1, 0, Number(minutes)));
  return new Intl.DateTimeFormat(siteCopy[language].locale, {
    hour: language === "en" ? "numeric" : "2-digit",
    minute: "2-digit",
    hour12: language === "en",
    timeZone: "UTC"
  }).format(time);
}

function renderTimes() {
  const copy = siteCopy[language];
  const date = bookableDates.get(bookingDate.value);
  const times = [];
  if (date) {
    const [start, end] = openingHours[date.getDay()];
    for (let minutes = start * 60; minutes <= (end - 1) * 60; minutes += 30) {
      times.push([minutes, formatTime(minutes)]);
    }
  }
  updateOptions(bookingTime, date ? copy.selectTime : copy.firstDate, times);
  bookingTime.disabled = !date;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(siteCopy[language].locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(date);
}

function renderBookingStatus() {
  const copy = siteCopy[language];
  const messages = {
    "": () => "",
    invalid: () => copy.validation,
    preview: () => copy.preview(formatDate(bookableDates.get(bookingDate.value)), formatTime(bookingTime.value), copy.party(Number(bookingGuests.value)))
  };
  bookingStatus.textContent = messages[bookingMessage]();
}

function renderBooking() {
  const copy = siteCopy[language];
  updateOptions(bookingDate, copy.selectDate, [...bookableDates].map(([key, date]) => [key, formatDate(date)]));
  renderTimes();
  updateOptions(bookingGuests, copy.selectGuests, Array.from({ length: 6 }, (_, i) => [i + 1, copy.party(i + 1)]));
  renderBookingStatus();
}

bookingForm.addEventListener("change", (event) => {
  if (event.target === bookingDate) {
    bookingTime.value = "";
    renderTimes();
  }
  bookingMessage = "";
  renderBookingStatus();
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const incomplete = [bookingDate, bookingTime, bookingGuests].find((field) => !field.value);
  bookingMessage = incomplete ? "invalid" : "preview";
  renderBookingStatus();
  incomplete?.focus();
});

const languageButtons = [...document.querySelectorAll("[data-lang]")];

function changeLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = siteCopy[language].title;
  document.querySelector('meta[name="description"]').content = siteCopy[language].description;
  translations.forEach((entry) => entry.write(entry.element, entry[language]));
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  renderMenu(Boolean(menuStatus.textContent));
  renderBooking();
}

languageButtons.forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.lang !== language) changeLanguage(button.dataset.lang);
}));
renderMenu(false);
renderBooking();
document.querySelector(".languages").hidden = false;
bookingForm.hidden = false;
