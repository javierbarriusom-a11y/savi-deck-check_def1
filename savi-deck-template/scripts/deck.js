const slides = window.DECK_SLIDES || [];

const deck = document.getElementById("deck");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const sectionName = document.getElementById("sectionName");
let current = Math.max(0, Math.min(slides.length - 1, Number(location.hash.replace("#slide-", "")) - 1 || 0));

const iconLibrary = {
  qr: `<path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h2v2h-2z"/><path d="M18 14h2v6h-4v-2"/><path d="M14 18h2"/>`,
  check: `<path d="M20 6 9 17l-5-5"/><path d="M21 12a9 9 0 1 1-5.3-8.2"/>`,
  game: `<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 7H4a3 3 0 0 0 3 3"/><path d="M17 7h3a3 3 0 0 1-3 3"/>`,
  users: `<path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>`,
  database: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>`,
  phone: `<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>`,
  chat: `<path d="M21 12a8 8 0 0 1-8 8H6l-4 2 2-5.4A8 8 0 1 1 21 12z"/><path d="M8 12h8"/><path d="M8 8h6"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`,
  camera: `<path d="M4 7h3l2-3h6l2 3h3v13H4z"/><circle cx="12" cy="13" r="4"/>`,
  receipt: `<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/>`,
  pin: `<path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>`,
  key: `<circle cx="7.5" cy="14.5" r="3.5"/><path d="M10 12 21 3"/><path d="m16 8 2 2"/><path d="m19 5 2 2"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  box: `<path d="m3 7 9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>`,
  spark: `<path d="M12 2v7"/><path d="M12 15v7"/><path d="M2 12h7"/><path d="M15 12h7"/><path d="m5 5 4 4"/><path d="m15 15 4 4"/><path d="m19 5-4 4"/><path d="m9 15-4 4"/>`,
  chart: `<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 15l3-4 3 2 5-7"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-5"/>`,
  factory: `<path d="M3 21h18"/><path d="M5 21V9l5 3V9l5 3V5h4v16"/><path d="M8 17h1"/><path d="M12 17h1"/><path d="M16 17h1"/>`,
  cone: `<path d="m8 10 4 11 4-11"/><path d="M8 10h8"/><path d="M8 10a4 4 0 0 1 8 0"/><path d="m10 15 4-2"/><path d="m11 18 3-2"/>`,
  volume: `<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8a5 5 0 0 1 0 8"/><path d="M19 5a9 9 0 0 1 0 14"/>`,
  heart: `<path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21l8.8-8a5.2 5.2 0 0 0 0-7.4z"/>`,
  celebration: `<path d="m4 20 5-14 9 9z"/><path d="m7 17 6-6"/><path d="M15 5h.01"/><path d="M19 3h.01"/><path d="M21 8h.01"/><path d="M18 11h.01"/>`
};

const fallbackIcons = ["qr", "check", "game", "users", "database", "phone", "chat", "target", "camera", "receipt", "pin", "key", "clock", "box", "spark"];

function normalizeIconText(text) {
  return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function iconFor(label, index = 0) {
  const text = normalizeIconText(label);
  let key = fallbackIcons[index % fallbackIcons.length];
  if (text.includes("qr") || text.includes("cartel") || text.includes("escanea")) key = "qr";
  else if (text.includes("selfie") || text.includes("foto") || text.includes("ugc")) key = "camera";
  else if (text.includes("ticket") || text.includes("ocr")) key = "receipt";
  else if (text.includes("geofencing") || text.includes("punto") || text.includes("ciudad") || text.includes("local")) key = "pin";
  else if (text.includes("keyword") || text.includes("pincode") || text.includes("codigo")) key = "key";
  else if (text.includes("whatsapp") || text.includes("app") || text.includes("telefono")) key = "phone";
  else if (text.includes("comunidad") || text.includes("squads") || text.includes("embajador") || text.includes("family") || text.includes("fan")) key = "users";
  else if (text.includes("data") || text.includes("rfm") || text.includes("kpi") || text.includes("dashboard") || text.includes("medicion")) key = "database";
  else if (text.includes("juego") || text.includes("ruleta") || text.includes("instant") || text.includes("premio") || text.includes("gana") || text.includes("nivel") || text.includes("bingo") || text.includes("album")) key = "game";
  else if (text.includes("compra") || text.includes("valid") || text.includes("antifraude") || text.includes("compliance")) key = "check";
  else if (text.includes("social") || text.includes("convers") || text.includes("recuerdo")) key = "chat";
  else if (text.includes("futuro") || text.includes("tiempo") || text.includes("time") || text.includes("historia")) key = "clock";
  else if (text.includes("fundacion") || text.includes("barcelona") || text.includes("fabricante")) key = "factory";
  else if (text.includes("cono") || text.includes("cucurucho")) key = "cone";
  else if (text.includes("jingle") || text.includes("just one")) key = "volume";
  else if (text.includes("heartbrand") || text.includes("identidad global")) key = "heart";
  else if (text.includes("100 anos") || text.includes("celebrar")) key = "celebration";
  else if (text.includes("packaging") || text.includes("retailer") || text.includes("sku") || text.includes("producto") || text.includes("portfolio")) key = "box";
  else if (text.includes("frecuencia") || text.includes("reto") || text.includes("challenge") || text.includes("flash")) key = "target";
  else if (text.includes("impacto") || text.includes("activacion") || text.includes("acquisition") || text.includes("retention")) key = "chart";
  return iconLibrary[key];
}

function safe(text) {
  return String(text || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
}

function header(slide, i) {
  return `
    <div class="slide-head">
      <div class="brand">savi<span>.</span></div>
      <div class="eyebrow">${safe(slide.eyebrow || "")}</div>
      <div class="meta">${String(i + 1).padStart(2, "0")} / ${slides.length}</div>
    </div>`;
}

function footer(slide) {
  const source = slide.foot ? safe(slide.foot) : "Frigo 100 · propuesta visual interactiva · Savi";
  return `<div class="slide-foot"><div class="source">${source}</div><div class="footer-nav" aria-label="Navegacion de diapositivas">
    <button type="button" data-footer-nav="home">Inicio</button><span>·</span>
    <button type="button" data-footer-nav="prev">Atras</button><span>·</span>
    <button type="button" data-footer-nav="next">Siguiente</button>
  </div></div>`;
}

function titleBlock(slide, small = false) {
  return `
    <div>
      <h1 class="title ${small ? "small" : ""}">${safe(slide.title)}</h1>
      ${slide.subtitle ? `<p class="subtitle">${safe(slide.subtitle)}</p>` : ""}
    </div>`;
}

function renderCards(items = [], cols = 3) {
  return `<div class="grid cols-${cols}">${items.map((item, idx) => `
    <article class="card">
      <div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconFor(item[0], idx)}</svg></div>
      <h3>${safe(item[0])}</h3>
      <p class="body">${safe(item[1])}</p>
    </article>`).join("")}</div>`;
}

function renderChannelGroups(groups = []) {
  return `<div class="channel-groups">${groups.map((group) => `
    <section class="channel-group">
      <div class="group-label">${safe(group.title)}</div>
      ${renderCards(group.items, 2)}
    </section>`).join("")}</div>`;
}

function layout(slide, i) {
  if (slide.layout === "cover") {
    return `<div class="cover-copy">${titleBlock(slide)}</div>`;
  }
  if (slide.layout === "agenda") {
    return `<div class="content split">${titleBlock(slide, true)}<div class="agenda-list">${slide.items.map((item) => `
      <div class="agenda-row"><div><h3>${safe(item[0])}</h3><p class="body">${safe(item[1])}</p></div></div>`).join("")}</div></div>`;
  }
  if (slide.layout === "chapter") {
    return `<div class="content center">${titleBlock(slide)}</div>`;
  }
  if (slide.layout === "stats") {
    return `<div class="stack">${titleBlock(slide, true)}<div class="grid cols-4">${slide.stats.map((stat) => `
      <article class="stat-card"><strong>${safe(stat[0])}</strong><span>${safe(stat[1])}</span></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "timeline") {
    return `<div class="stack">${titleBlock(slide, true)}<div class="timeline">${slide.items.map((item) => `
      <article class="timeline-item"><div class="timeline-mark"><b>${safe(item[0])}</b><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconFor(`${item[1]} ${item[2]}`)}</svg></span></div><div><h3>${safe(item[1])}</h3><p class="body">${safe(item[2])}</p></div></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "compare") {
    return `<div class="content split">${titleBlock(slide, true)}<div class="grid cols-2 compare-grid">${slide.items.map((item) => `
      <article class="card"><div><div class="num">${safe(item[0])}</div><p class="body">${safe(item[1])}</p></div><div class="compare-badge ${item[2] ? "is-after" : ""}">${safe(item[2] || "Dato fragmentado")}</div></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "image-split") {
    return `<div class="content image-split"><div class="image-copy">${titleBlock(slide, true)}</div><img class="feature-photo" src="${safe(slide.image)}" alt="Familia comprando un helado Frigo en un punto de venta de playa"><div class="image-points">${renderCards(slide.items, 3)}</div></div>`;
  }
  if (slide.layout === "poster") {
    const poster = slide.image
      ? `<div class="poster has-image"><img src="${safe(slide.image)}" alt="Collage de carteles Frigo de helados en puntos de venta"></div>`
      : `<div class="poster"><div class="qr-block"></div></div>`;
    return `<div class="content two"><div>${titleBlock(slide, true)}${renderCards(slide.items, 2)}</div>${poster}</div>`;
  }
  if (slide.layout === "channel-groups") {
    return `<div class="stack">${titleBlock(slide, true)}${renderChannelGroups(slide.groups)}</div>`;
  }
  if (slide.layout === "journey") {
    return `<div class="stack">${titleBlock(slide, true)}<div class="journey">${slide.items.map((item, idx) => `
      <article class="card"><div class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconFor(item[0], idx)}</svg></div><div><h3>${safe(item[0])}</h3><p class="body">${safe(item[1])}</p></div></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "phone") {
    return `<div class="content two"><div>${titleBlock(slide, true)}${renderCards(slide.items, 5)}</div><div class="phone">
      <div class="bubble">Hola, soy Frigo. Escanea el cartel y desbloquea tu Momento 100.</div>
      <div class="bubble me">Ya tengo mi ticket.</div>
      <div class="bubble">Perfecto. Validado. Has ganado 40 puntos y una tirada en la Ruleta del 100.</div>
      <div class="bubble me">Quiero ver mi nivel.</div>
      <div class="bubble">Estas a 60 puntos de Fan Classico.</div>
    </div></div>`;
  }
  if (slide.layout === "ideas") {
    return `<div class="stack">${titleBlock(slide, true)}<div class="grid cols-5">${slide.items.map((item, idx) => `
      <article class="idea"><div class="num">${String.fromCharCode(65 + idx)}</div><h3>${safe(item[0])}</h3><p class="body">${safe(item[1])}</p></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "matrix") {
    const heads = ["Objetivo", "Front / canal", "Core rules", "Validacion", "Output"];
    return `<div class="stack">${titleBlock(slide, true)}<div class="matrix">${heads.map((h) => `<div class="head">${h}</div>`).join("")}${slide.rows.map((row) => row.map((cell, idx) => `<div>${idx === 0 ? "<span class='dot'></span>" : ""}${safe(cell)}</div>`).join("")).join("")}</div></div>`;
  }
  if (slide.layout === "dashboard") {
    return `<div class="content split">${titleBlock(slide, true)}<div class="dashboard"><img src="assets/frigo-live-dashboard.svg" alt="Dashboard realista del programa 100 Momentos Frigo con KPIs, embudo de participacion, zonas, mecanicas y validaciones recientes"></div></div>`;
  }
  if (slide.layout === "bars") {
    const months = ["Fase", "Q1", "Abr", "May", "Jun", "Jul", "Ago", "Sep"];
    return `<div class="content split">${titleBlock(slide, true)}<div class="planning-board">
      <div class="plan-months">${months.map((month) => `<span>${safe(month)}</span>`).join("")}</div>
      ${slide.items.map((item) => `<div class="plan-row">
        <div class="plan-label"><h3>${safe(item[0])}</h3><p>${safe(item[1])}</p></div>
        <div class="plan-track ${safe(item[5])}" style="--start-col:${Number(item[2]) || 2}; --span:${Number(item[3]) || 1};"><strong>${safe(item[4])}</strong></div>
      </div>`).join("")}
    </div></div>`;
  }
  if (slide.layout === "roadmap") {
    return `<div class="stack">${titleBlock(slide, true)}<div class="roadmap">${slide.items.map((item) => `
      <article class="card"><div class="phase">${safe(item[0])}</div><h3>${safe(item[1])}</h3><p class="body">${safe(item[2])}</p></article>`).join("")}</div></div>`;
  }
  if (slide.layout === "closing") {
    return `<div class="content split">${titleBlock(slide)}${renderCards(slide.items, 3)}</div>`;
  }
  return `<div class="stack">${titleBlock(slide, true)}${renderCards(slide.items, slide.cols || 3)}</div>`;
}

const immersiveLayouts = new Set([
  "chapter",
  "agenda",
  "stats",
  "timeline",
  "cards",
  "channel-groups",
  "compare",
  "journey",
  "ideas",
  "matrix",
  "bars",
  "roadmap"
]);

function isImmersive(slide) {
  return immersiveLayouts.has(slide.layout) && !slide.image;
}

const backgroundPools = {
  historia: [
    "assets/frigo-bg-nostalgia-parque.jpg",
    "assets/frigo-bg-playa-kiosco.jpg",
    "assets/frigo-bg-familia-kiosco.jpg"
  ],
  mercado: [
    "assets/frigo-bg-supermercado.jpg",
    "assets/frigo-bg-familia-kiosco.jpg",
    "assets/frigo-bg-gondolero.jpg"
  ],
  programa: [
    "assets/frigo-bg-familia-kiosco.jpg",
    "assets/frigo-bg-gondolero.jpg",
    "assets/frigo-bg-playa-kiosco.jpg"
  ],
  mecanicas: [
    "assets/frigo-bg-cine-ninos.jpg",
    "assets/frigo-bg-feria-pareja.jpg",
    "assets/frigo-bg-gondolero.jpg"
  ],
  data: [
    "assets/frigo-bg-gondolero.jpg",
    "assets/frigo-bg-supermercado.jpg",
    "assets/frigo-bg-feria-pareja.jpg"
  ],
  despliegue: [
    "assets/frigo-bg-playa-kiosco.jpg",
    "assets/frigo-bg-supermercado.jpg",
    "assets/frigo-bg-feria-pareja.jpg"
  ]
};

function immersiveBackgroundCandidates(slide) {
  const text = `${slide.eyebrow || ""} ${slide.title || ""}`.toLowerCase();
  if (text.includes("mapa") || text.includes("roadmap") || text.includes("piloto") || text.includes("despliegue") || text.includes("savi")) {
    return backgroundPools.despliegue;
  }
  if (text.includes("data") || text.includes("kpi") || text.includes("compliance") || text.includes("antifraude") || text.includes("intelligence") || text.includes("first-party")) {
    return backgroundPools.data;
  }
  if (text.includes("trade") || text.includes("activacion fisica")) {
    return backgroundPools.data;
  }
  if (text.includes("narrativa") || text.includes("nuevas ideas") || text.includes("comunidad")) {
    return backgroundPools.mecanicas;
  }
  if (text.includes("mecanica") || text.includes("palancas") || text.includes("frecuencia") || text.includes("coleccionismo") || text.includes("comunidad") || text.includes("viralidad") || text.includes("trade") || text.includes("nuevas ideas") || text.includes("activacion fisica") || text.includes("niveles")) {
    return backgroundPools.mecanicas;
  }
  if (text.includes("100 momentos") || text.includes("concepto") || text.includes("oportunidad") || text.includes("arquitectura") || text.includes("journey") || text.includes("validacion") || text.includes("whatsapp") || text.includes("apuestas")) {
    return backgroundPools.programa;
  }
  if (text.includes("punto de partida") || text.includes("mercado") || text.includes("presion") || text.includes("consumidor") || text.includes("lectura estrategica") || text.includes("helado vende") || text.includes("distribucion")) {
    return backgroundPools.mercado;
  }
  return backgroundPools.historia;
}

const resolvedBackgrounds = [];
slides.forEach((slide, index) => {
  if (!isImmersive(slide)) {
    resolvedBackgrounds[index] = "";
    return;
  }
  const candidates = immersiveBackgroundCandidates(slide);
  const previousBackground = [...resolvedBackgrounds].reverse().find(Boolean) || "";
  let background = candidates[index % candidates.length];
  if (background === previousBackground) {
    background = candidates.find((candidate) => candidate !== previousBackground) || background;
  }
  resolvedBackgrounds[index] = background;
});

function slideClass(slide) {
  const classes = ["slide"];
  if (slide.theme) classes.push(slide.theme);
  if (isImmersive(slide)) classes.push("immersive");
  return classes.join(" ");
}

function slideStyle(slide, index) {
  if (!isImmersive(slide)) return "";
  return ` style="--immersive-bg: url('${resolvedBackgrounds[index]}')"`;
}

function render() {
  deck.innerHTML = slides.map((slide, i) => `
    <section class="${slideClass(slide)}" id="slide-${i + 1}" data-index="${i}"${slideStyle(slide, i)}>
      <div class="slide-grid">
        ${header(slide, i)}
        ${layout(slide, i)}
        ${footer(slide)}
      </div>
    </section>`).join("");
}

function getActiveSection(index) {
  return [...document.querySelectorAll("[data-jump]")]
    .map((button) => ({ button, jump: Number(button.dataset.jump) }))
    .filter((item) => item.jump <= index)
    .sort((a, b) => b.jump - a.jump)[0];
}

function update(next) {
  current = Math.max(0, Math.min(slides.length - 1, next));
  document.querySelectorAll(".slide").forEach((section, i) => {
    section.classList.toggle("active", i === current);
    section.classList.toggle("before", i < current);
  });
  counter.textContent = `${String(current + 1).padStart(2, "0")} / ${slides.length}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  const activeSection = getActiveSection(current);
  document.querySelectorAll("[data-jump]").forEach((button) => {
    const active = button === activeSection?.button;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
  });
  if (activeSection && sectionName) sectionName.textContent = activeSection.button.textContent.trim();
  history.replaceState(null, "", `#slide-${current + 1}`);
}

render();
update(current);

document.getElementById("next").addEventListener("click", () => update(current + 1));
document.getElementById("prev").addEventListener("click", () => update(current - 1));
document.getElementById("home").addEventListener("click", () => update(0));
document.querySelectorAll("[data-jump]").forEach((button) => button.addEventListener("click", () => update(Number(button.dataset.jump))));
document.querySelectorAll("[data-footer-nav]").forEach((button) => button.addEventListener("click", () => {
  const action = button.dataset.footerNav;
  if (action === "home") update(0);
  if (action === "prev") update(current - 1);
  if (action === "next") update(current + 1);
}));
deck.addEventListener("click", (event) => {
  if (event.target.closest("a, button")) return;
  update(current + 1);
});
window.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) update(current + 1);
  if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) update(current - 1);
  if (event.key === "Home") update(0);
  if (event.key === "End") update(slides.length - 1);
});
window.addEventListener("hashchange", () => {
  const index = Number(location.hash.replace("#slide-", "")) - 1;
  if (!Number.isNaN(index)) update(index);
});
