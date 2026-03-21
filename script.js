// =====================
// ====== DATOS BASE ======
// =====================
const defaultPages = [
  {
    id: "asociacion",
    title: "Aso y RRSS",
    links: [
      { text: "La Gata Pirata", url: "https://lagatapirata.org", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=lagatapirata.org" },
      { text: "Facebook", url: "https://facebook.com", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=facebook.com" },
      { text: "Instagram", url: "https://instagram.com", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=instagram.com" },
      { text: "WhatsApp", url: "https://web.whatsapp.com", iconUrl: "icons/whatsapp.png" },
      { text: "Telegram", url: "https://web.telegram.org", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=telegram.org" },
      { text: "Linktree", url: "https://linktr.ee", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=linktr.ee" }
    ]
  },
  {
    id: "programacion",
    title: "Programación",
    links: [
      { text: "GitHub", url: "https://github.com", iconUrl: "icons/github.png" },
      { text: "ChatGPT", url: "https://chatgpt.com", iconUrl: "icons/chatgpt.png" },
      { text: "Meow Metrics", url: "https://astounding-druid-2da323.netlify.app/", iconUrl: "icons/meowmetrics.png" },
      { text: "Hostinger", url: "https://hpanel.hostinger.com", iconUrl: "icons/hostinger.svg" },
      { text: "QR Codes", url: "https://www.codigos-qr.com", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=codigos-qr.com" }
    ]
  },
  {
    id: "gestiones",
    title: "Gestiones",
    links: [
      { text: "Gmail", url: "https://mail.google.com", iconUrl: "icons/gmail.png" },
      { text: "Drive", url: "https://drive.google.com", iconUrl: "icons/drive.png" },
      { text: "Outlook", url: "https://outlook.office.com", iconUrl: "icons/Outlook_Logo.png" },
      { text: "Teams", url: "https://teams.microsoft.com", iconUrl: "icons/teams.svg" },
      { text: "Meet", url: "https://meet.google.com", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=meet.google.com" },
      { text: "Agencia Tributaria", url: "https://www.agenciatributaria.es", iconUrl: "icons/agencia-tributaria.png" },
      { text: "Seguridad Social", url: "https://sede.seg-social.gob.es", iconUrl: "icons/seguridad-social-logo.png" },
      { text: "Comunidad Madrid", url: "https://www.comunidad.madrid", iconUrl: "icons/CAM-logo.png" },
      { text: "Ayto Fuenla", url: "https://www.ayto-fuenlabrada.es", iconUrl: "icons/AyuntamientoFuenla.png" },
      { text: "BOE", url: "https://www.boe.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=boe.es" },
      { text: "BOCM", url: "https://www.bocm.es", iconUrl: "icons/bocm.png" },
      { text: "BNDS", url: "https://www.infosubvenciones.es", iconUrl: "icons/BDNS.png" }
    ]
  },
  {
    id: "tiendas",
    title: "Tiendas",
    links: [
      { text: "Amazon", url: "https://amazon.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=amazon.es" },
      { text: "Zooplus DE", url: "https://zooplus.de", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=zooplus.de" },
      { text: "Zooplus ES", url: "https://zooplus.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=zooplus.es" },
      { text: "Bitiba", url: "https://bitiba.es", iconUrl: "icons/bitibaok.png" },
      { text: "Obramat", url: "https://www.obramat.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=obramat.es" },
      { text: "Leroy Merlin", url: "https://www.leroymerlin.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=leroymerlin.es" }
    ]
  },
  {
    id: "info",
    title: "Información",
    links: [
      { text: "20 Minutos", url: "https://www.20minutos.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=20minutos.es" },
      { text: "YouTube", url: "https://youtube.com", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com" },
      { text: "Archive.org", url: "https://archive.org", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=archive.org" },
      { text: "AEMET", url: "https://www.aemet.es", iconUrl: "icons/aemet-logo.png" }
    ]
  },
  {
    id: "varios",
    title: "Varios",
    links: [
      { text: "Asisa", url: "https://www.asisa.es", iconUrl: "icons/asisa.png" }
    ]
  }
];
  
// =====================
// ====== CARGA DATOS ======
// =====================
let linkPages;

try {
  const saved = JSON.parse(localStorage.getItem("linksData"));
  linkPages = Array.isArray(saved) && saved.length ? saved : defaultPages;
} catch {
  linkPages = defaultPages;
}

// =====================
// ====== SINCRONIZAR ICONOS ======
// =====================
defaultPages.forEach(defaultPage => {
  const currentPage = linkPages.find(p => p.id === defaultPage.id);
  if (!currentPage) return;

  defaultPage.links.forEach(defaultLink => {
    const currentLink = currentPage.links.find(l => l.text === defaultLink.text);
    if (!currentLink) return;

    if (currentLink.iconUrl !== defaultLink.iconUrl) {
      currentLink.iconUrl = defaultLink.iconUrl;
    }
  });
});

// =====================
// ====== UTILIDADES ======
// =====================
const grid = document.querySelector(".grid");

function save() {
  localStorage.setItem("linksData", JSON.stringify(linkPages));
}

// =====================
// ====== CONTROLES UI ======
// =====================
const controls = document.createElement("div");
controls.style.position = "fixed";
controls.style.top = "10px";
controls.style.left = "15px";
controls.style.display = "flex";
controls.style.gap = "6px";

controls.innerHTML = `
  <button id="resetBtn">Reset</button>
  <button id="addCategoryBtn">+ Categoría</button>
`;

document.body.appendChild(controls);

// RESET
document.getElementById("resetBtn").onclick = () => {
  if (!confirm("¿Restablecer todo?")) return;

  localStorage.removeItem("linksData");
  location.reload();
};

// CREAR CATEGORÍA
document.getElementById("addCategoryBtn").onclick = () => {
  const name = prompt("Nombre de la categoría:")?.trim();
  if (!name) return;

  const color = prompt("Color (ej: #ff9800 o red):", "#999");

  const id = name.toLowerCase().replace(/\s+/g, "_");

  if (linkPages.some(p => p.id === id)) {
    alert("Ya existe una categoría con ese nombre");
    return;
  }

  linkPages.push({
    id,
    title: name,
    links: [],
    color
  });

  save();
  render();
};

// =====================
// ====== RENDER ======
// =====================
function render() {
  grid.innerHTML = "";

  linkPages.forEach((page, pageIndex) => {
    const card = document.createElement("div");
    card.className = "card " + page.id;

    // COLOR SOLO PARA NUEVAS CATEGORÍAS
    if (page.color && !defaultPages.find(p => p.id === page.id)) {
      card.style.borderTop = `4px solid ${page.color}`;
    }

    // ===== HEADER =====
    const header = document.createElement("div");
    header.className = "card-header";
    header.textContent = page.title;

    // DRAG SOLO HEADER
    header.draggable = true;

    header.addEventListener("dragstart", e => {
      e.dataTransfer.setData("card-index", pageIndex);
      card.classList.add("dragging");
    });

    header.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    // EDITAR NOMBRE
    header.addEventListener("dblclick", () => {
      const nuevo = prompt("Nuevo nombre:", page.title)?.trim();
      if (!nuevo) return;

      page.title = nuevo;
      save();
      render();
    });

    // ELIMINAR CATEGORÍA
    header.addEventListener("contextmenu", e => {
      e.preventDefault();

      if (!confirm(`¿Eliminar "${page.title}"?`)) return;

      linkPages.splice(pageIndex, 1);
      save();
      render();
    });

    // DROP CARD
    card.addEventListener("dragover", e => e.preventDefault());

    card.addEventListener("drop", e => {
      e.preventDefault();

      const fromIndex = parseInt(e.dataTransfer.getData("card-index"));
      if (isNaN(fromIndex)) return;

      const moved = linkPages.splice(fromIndex, 1)[0];
      linkPages.splice(pageIndex, 0, moved);

      save();
      render();
    });

    // ===== LINKS =====
    const quick = document.createElement("div");
    quick.className = "quick-links";

    page.links.forEach((link, i) => {
      quick.appendChild(createLink(link, pageIndex, i));
    });

    // BOTÓN AÑADIR LINK
    const addBtn = document.createElement("button");
    addBtn.className = "add-link";
    addBtn.textContent = "+ Añadir";
    addBtn.onclick = () => openModal(pageIndex);

    card.append(header, quick, addBtn);
    grid.appendChild(card);
  });
}

// =====================
// ====== LINKS ======
// =====================
function createLink(link, pageIndex, linkIndex) {
  const a = document.createElement("a");
  a.href = link.url;
  a.draggable = true;

  a.innerHTML = `
    <img src="${link.iconUrl}">
    <span>${link.text}</span>
  `;

  // DRAG LINK
  a.addEventListener("dragstart", e => {
    e.stopPropagation();
    e.dataTransfer.setData("text/plain", JSON.stringify({
      fromPage: pageIndex,
      fromIndex: linkIndex
    }));
  });

  a.addEventListener("dragover", e => e.preventDefault());

  a.addEventListener("drop", e => {
    e.preventDefault();

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const moved = linkPages[data.fromPage].links[data.fromIndex];

    linkPages[data.fromPage].links.splice(data.fromIndex, 1);
    linkPages[pageIndex].links.splice(linkIndex, 0, moved);

    save();
    render();
  });

  // EDITAR LINK
  a.addEventListener("contextmenu", e => {
    e.preventDefault();
    openModal(pageIndex, linkIndex);
  });

  return a;
}

// =====================
// ====== MODAL ======
// =====================
let currentPage = null;
let currentLink = null;

const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <input id="name" placeholder="Nombre">
    <input id="url" placeholder="URL">
    <button id="save">Guardar</button>
    <button id="delete">Eliminar</button>
    <button id="cancel">Cancelar</button>
  </div>
`;
document.body.appendChild(modal);

// ABRIR
function openModal(pageIndex, linkIndex = null) {
  currentPage = pageIndex;
  currentLink = linkIndex;

  modal.style.display = "flex";

  const name = document.getElementById("name");
  const url = document.getElementById("url");

  if (linkIndex !== null) {
    const link = linkPages[pageIndex].links[linkIndex];
    name.value = link.text;
    url.value = link.url;
  } else {
    name.value = "";
    url.value = "";
  }
}

// CANCELAR
document.getElementById("cancel").onclick = () => {
  modal.style.display = "none";
};

// GUARDAR
document.getElementById("save").onclick = () => {
  const name = document.getElementById("name").value.trim();
  let url = document.getElementById("url").value.trim();

  if (!name || !url) return;

  if (!url.startsWith("http")) url = "https://" + url;

  let iconUrl;
  try {
    iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${new URL(url).hostname}`;
  } catch {
    iconUrl = "";
  }

  if (currentLink !== null) {
    linkPages[currentPage].links[currentLink] = { text: name, url, iconUrl };
  } else {
    linkPages[currentPage].links.push({ text: name, url, iconUrl });
  }

  modal.style.display = "none";
  save();
  render();
};

// ELIMINAR
document.getElementById("delete").onclick = () => {
  if (currentLink !== null) {
    linkPages[currentPage].links.splice(currentLink, 1);
    save();
    render();
  }
  modal.style.display = "none";
};

// =====================
// ====== RELOJ ======
// =====================
const clock = document.createElement("div");
clock.className = "clock";
document.body.appendChild(clock);

function updateClock() {
  const now = new Date();

  const date = now.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  const time = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clock.innerHTML = `${date}<br>${time}`;
}

setInterval(updateClock, 1000);
updateClock();

// =====================
// ====== INIT ======
// =====================
render();