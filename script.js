// =====================
// ====== DATOS BASE ======
// =====================
const defaultPages = [
  {
    id: "asociacion",
    title: "Aso y RRSS",
    links: [
      { id: "lgp",  text: "La Gata Pirata", url: "https://lagatapirata.org",    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=lagatapirata.org" },
      { id: "fb",   text: "Facebook",       url: "https://facebook.com",         iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=facebook.com" },
      { id: "ig",   text: "Instagram",      url: "https://instagram.com",        iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=instagram.com" },
      { id: "wa",   text: "WhatsApp",       url: "https://web.whatsapp.com",     iconUrl: "icons/whatsapp.png" },
      { id: "tg",   text: "Telegram",       url: "https://web.telegram.org",     iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=telegram.org" },
      { id: "yt",   text: "YouTube",        url: "https://youtube.com",          iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com" },
      { id: "lt",   text: "Linktree",       url: "https://linktr.ee",            iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=linktr.ee" }
    ]
  },
  {
    id: "programacion",
    title: "Programación",
    links: [
      { id: "gh",       text: "GitHub",        url: "https://github.com",                                       iconUrl: "icons/github.png" },
      { id: "chatgpt",  text: "ChatGPT",       url: "https://chatgpt.com",                                      iconUrl: "icons/chatgpt.png" },
      { id: "meow",     text: "Meow Metrics",  url: "https://astounding-druid-2da323.netlify.app/",             iconUrl: "icons/meowmetrics.png" },
      { id: "hostinger",text: "Hostinger",     url: "https://hpanel.hostinger.com",                             iconUrl: "icons/hostinger.svg" },
      { id: "carbon",   text: "Carbon - Código", url: "https://carbon.now.sh/?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=carbon.now.sh" },
      { id: "qr",       text: "QR Codes",      url: "https://www.codigos-qr.com",                               iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=codigos-qr.com" }
    ]
  },
  {
    id: "gestiones",
    title: "Gestiones",
    links: [
      { id: "gmail",       text: "Gmail",                url: "https://mail.google.com",                    iconUrl: "icons/gmail.png" },
      { id: "drive",       text: "Drive",                url: "https://drive.google.com",                   iconUrl: "icons/drive.png" },
      { id: "outlook",     text: "Outlook",              url: "https://outlook.office.com",                 iconUrl: "icons/Outlook_Logo.png" },
      { id: "fuenla",      text: "Ayto Fuenla",          url: "https://www.ayto-fuenlabrada.es",            iconUrl: "icons/AyuntamientoFuenla.png" },
      { id: "tablon",      text: "Tablón Dig. Fuenla.",  url: "https://sede.ayto-fuenlabrada.es/tablon-web/", iconUrl: "icons/AyuntamientoFuenla.png" },
      { id: "sede_fuenla", text: "Sede Electr. Fuenla",  url: "https://sede.ayto-fuenlabrada.es/opencms/system/modules/gsede/elements/secciones/autenticacion/autenticacion.jsp", iconUrl: "icons/AyuntamientoFuenla.png" },
      { id: "transp_fuenla", text: "Portal Transp. Fuenla", url: "https://transparencia.ayto-fuenlabrada.es/", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=transparencia.ayto-fuenlabrada.es" },
      { id: "cam",         text: "Comunidad Madrid",     url: "https://www.comunidad.madrid",               iconUrl: "icons/CAM-logo.png" },
      { id: "digicam",     text: "Ciudadano Digital",    url: "https://digital.comunidad.madrid/acceso",    iconUrl: "icons/CAM-logo.png" },
      { id: "redsara",     text: "Red Sara",             url: "https://reg.redsara.es/es/",                 iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=reg.redsara.es" },
      { id: "aeat",        text: "Agencia Tributaria",   url: "https://www.agenciatributaria.es",           iconUrl: "icons/agencia-tributaria.png" },
      { id: "ss",          text: "Seguridad Social",     url: "https://sede.seg-social.gob.es",             iconUrl: "icons/seguridad-social-logo.png" },
      { id: "teams",       text: "Teams",                url: "https://teams.microsoft.com",                iconUrl: "icons/teams.svg" },
      { id: "meet",        text: "Meet",                 url: "https://meet.google.com",                    iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=meet.google.com" }
    ]
  },
  {
    id: "tiendas",
    title: "Tiendas",
    links: [
      { id: "amazon",     text: "Amazon",      url: "https://amazon.es",          iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=amazon.es" },
      { id: "zooplus_de", text: "Zooplus DE",  url: "https://zooplus.de",         iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=zooplus.de" },
      { id: "zooplus_es", text: "Zooplus ES",  url: "https://zooplus.es",         iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=zooplus.es" },
      { id: "bitiba",     text: "Bitiba",      url: "https://bitiba.es",          iconUrl: "icons/bitibaok.png" },
      { id: "obramat",    text: "Obramat",     url: "https://www.obramat.es",     iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=obramat.es" },
      { id: "leroy",      text: "Leroy Merlin", url: "https://www.leroymerlin.es", iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=leroymerlin.es" }
    ]
  },
  {
    id: "info",
    title: "Información",
    links: [
      { id: "20min",   text: "20 Minutos",  url: "https://www.20minutos.es",       iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=20minutos.es" },
      { id: "aemet",   text: "AEMET",       url: "https://www.aemet.es",           iconUrl: "icons/aemet-logo.png" },
      { id: "archive", text: "Archive.org", url: "https://archive.org",            iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=archive.org" },
      { id: "boe",     text: "BOE",         url: "https://www.boe.es",             iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=boe.es" },
      { id: "bocm",    text: "BOCM",        url: "https://www.bocm.es",            iconUrl: "icons/bocm.png" },
      { id: "bnds",    text: "BNDS",        url: "https://www.infosubvenciones.es", iconUrl: "icons/BDNS.png" }
    ]
  },
  {
    id: "varios",
    title: "Varios",
    links: [
      { id: "asisa",       text: "Asisa",           url: "https://www.asisa.es",                                                             iconUrl: "icons/asisa.png" },
      { id: "aulavirtual", text: "Aula Virtual",    url: "https://aulavirtual33.educa.madrid.org/ies.puigadam.getafe/",                       iconUrl: "icons/aulavirtual.jpg" },
      { id: "raices",      text: "Robles - Raíces", url: "https://raices.madrid.org/raiz_app/jsp/portal/portalraices.html",                   iconUrl: "icons/roble.png" },
      { id: "bancapueyo",  text: "Banca Pueyo",    url: "https://www.bancapueyo.es/",                                                        iconUrl: "icons/bancapueyo.png" },
      { id: "caixabank",   text: "CaixaBank",       url: "https://www.caixabank.es/",                                                         iconUrl: "https://www.google.com/s2/favicons?sz=64&domain=caixabank.es" }
    ]
  }
];

// CARGA DATOS
let linkPages;

try {
  const saved = JSON.parse(localStorage.getItem("linksData"));
  linkPages = Array.isArray(saved) && saved.length ? saved : defaultPages;
} catch {
  linkPages = defaultPages;
}

// SINCRONIZAR ICONOS
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

// UTILIDADES
const grid = document.querySelector(".grid");

function save() {
  localStorage.setItem("linksData", JSON.stringify(linkPages));
}

// (getDropIndex y placeholder eliminados: ahora se usa la zona de drop en esquina)

// CONTROLES UI
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

  const color = prompt("Color:", "#999");

  const id = name.toLowerCase().replace(/\s+/g, "_");

  if (linkPages.some(p => p.id === id)) {
    alert("Ya existe");
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

// RENDER
function render() {
  grid.innerHTML = "";

  linkPages.forEach((page, pageIndex) => {
    const card = document.createElement("div");
    card.className = "card " + page.id;

    if (page.color && !defaultPages.find(p => p.id === page.id)) {
      card.style.borderTop = `4px solid ${page.color}`;
    }

    // HEADER
    const header = document.createElement("div");
    header.className = "card-header";
    header.textContent = page.title;
    header.draggable = true;

    header.addEventListener("dragstart", e => {
      e.dataTransfer.setData("card-index", pageIndex);
      card.classList.add("dragging");
    });

    header.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    // Evitar 🚫 cuando un link pasa por encima del header draggable
    header.addEventListener("dragover", e => {
      e.preventDefault();
      e.stopPropagation();
    });

    header.addEventListener("dblclick", () => {
      const nuevo = prompt("Nuevo nombre:", page.title)?.trim();
      if (!nuevo) return;

      page.title = nuevo;
      save();
      render();
    });

    header.addEventListener("contextmenu", e => {
      e.preventDefault();

      if (!confirm(`¿Eliminar "${page.title}"?`)) return;

      linkPages.splice(pageIndex, 1);
      save();
      render();
    });

    // mover cards completas (drag desde el header)
    card.addEventListener("dragover", e => e.preventDefault());

    card.addEventListener("drop", e => {
      const fromIndex = parseInt(e.dataTransfer.getData("card-index"));
      if (isNaN(fromIndex)) return;

      const moved = linkPages.splice(fromIndex, 1)[0];
      linkPages.splice(pageIndex, 0, moved);
      save();
      render();
    });

    // LINKS
    const quick = document.createElement("div");
    quick.className = "quick-links";

    // DRAG OVER — solo prevenir el símbolo 🚫 en el área vacía del contenedor
    quick.addEventListener("dragover", e => {
      e.preventDefault();
    });

    // DROP en área vacía del contenedor → añadir al final de esta categoría
    quick.addEventListener("drop", e => {
      e.preventDefault();

      const raw = e.dataTransfer.getData("application/link");
      if (!raw) return; // si es drag de card, deja que suba al card.drop

      e.stopPropagation();

      let data;
      try { data = JSON.parse(raw); } catch { return; }
      if (!data.id && data.id !== 0) return;

      const movedLink = linkPages[data.fromPage].links.find(l => l.id === data.id);
      if (!movedLink) return;

      linkPages[data.fromPage].links = linkPages[data.fromPage].links.filter(l => l.id !== data.id);
      linkPages[pageIndex].links.push(movedLink); // al final

      save();
      render();
    });

    // pintar links
    page.links.forEach((link, i) => {
      quick.appendChild(createLink(link, pageIndex, i));
    });

    // botón añadir
    const addBtn = document.createElement("button");
    addBtn.className = "add-link";
    addBtn.textContent = "+ Añadir";
    addBtn.onclick = () => openModal(pageIndex);

    // montar card
    card.append(header, quick, addBtn);
    grid.appendChild(card);
  });
}

// ===== LINKS =====
function createLink(link, pageIndex, linkIndex) {
  if (!link || !link.url) return document.createElement("div");

  const a = document.createElement("a");
  a.href = link.url || "#";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.draggable = true;

  a.innerHTML = `
    <img src="${link.iconUrl}">
    <span>${link.text}</span>
  `;

  const img = a.querySelector("img");

  img.onerror = function () {
    this.onerror = null;

    if (!this.dataset.fallback) {
      this.dataset.fallback = "google";

      try {
        const domain = new URL(link.url).hostname;
        this.src = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
      } catch {
        this.src = "icons/default.png";
      }

      return;
    }

    this.src = "icons/default.png";
  };

  // DRAG START
  a.addEventListener("dragstart", e => {
    e.stopPropagation();
    a.classList.add("dragging");
    document.body.classList.add("is-dragging");
    e.dataTransfer.setData("application/link", JSON.stringify({
      id: link.id,
      fromPage: pageIndex
    }));
  });

  // DRAG END
  a.addEventListener("dragend", () => {
    a.classList.remove("dragging");
    document.body.classList.remove("is-dragging");
  });

  // Impedir que soltar sobre el cuerpo del icono (fuera del círculo verde)
  // llegue al quick-links y provoque un "añadir al final" no deseado.
  // Sin preventDefault → el navegador muestra 🚫 y no dispara drop.
  a.addEventListener("dragover", e => {
    e.stopPropagation();
  });

  // ZONA DE DROP (esquina superior derecha)
  // Al soltar aquí se inserta el icono arrastrado ANTES de este icono
  const dropZone = document.createElement("div");
  dropZone.className = "drop-zone";
  a.appendChild(dropZone);

  dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    dropZone.classList.add("active");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("active");
  });

  dropZone.addEventListener("drop", e => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove("active");

    const raw = e.dataTransfer.getData("application/link");
    if (!raw) return;

    let data;
    try { data = JSON.parse(raw); } catch { return; }
    if (!data.id && data.id !== 0) return;

    // No soltar sobre sí mismo
    if (data.fromPage === pageIndex && data.id === link.id) return;

    const movedLink = linkPages[data.fromPage].links.find(l => l.id === data.id);
    if (!movedLink) return;

    // Guardar índices ANTES de modificar nada
    const fromIdx = linkPages[data.fromPage].links.findIndex(l => l.id === data.id);
    const originalTargetIdx = linkPages[pageIndex].links.findIndex(l => l.id === link.id);

    // Quitar del origen
    linkPages[data.fromPage].links = linkPages[data.fromPage].links.filter(l => l.id !== data.id);

    // Tras eliminar, buscar el destino en el array ya modificado
    let targetIndex = linkPages[pageIndex].links.findIndex(l => l.id === link.id);

    // Corrección para movimientos hacia adelante en la misma tarjeta:
    // al eliminar el icono (que estaba antes del destino), el destino se desplaza -1.
    // Sumamos 1 para que el icono arrastrado quede en la posición visual del destino.
    if (data.fromPage === pageIndex && fromIdx < originalTargetIdx) {
      targetIndex += 1;
    }

    const insertAt = targetIndex >= 0 ? targetIndex : linkPages[pageIndex].links.length;
    linkPages[pageIndex].links.splice(insertAt, 0, movedLink);

    save();
    render();
  });

  // editar
  a.addEventListener("contextmenu", e => {
    e.preventDefault();
    openModal(pageIndex, linkIndex);
  });

  return a;
}


// ===== MODAL =====
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

document.getElementById("cancel").onclick = () => {
  modal.style.display = "none";
};

document.getElementById("save").onclick = () => {
  const name = document.getElementById("name").value.trim();
  let url = document.getElementById("url").value.trim();

  if (!name || !url) return;

  if (!url.startsWith("http")) url = "https://" + url;

  let iconUrl;

  try {
    const domain = new URL(url).hostname;
    iconUrl = `https://${domain}/favicon.ico`;
  } catch {
    iconUrl = "icons/default.png";
  }

  const exists = linkPages[currentPage].links.some((l, i) => {
    if (currentLink !== null && i === currentLink) return false;

    return (
      l.url.toLowerCase() === url.toLowerCase() ||
      l.text.toLowerCase() === name.toLowerCase()
    );
  });

  if (exists) {
    alert("Ya existe un enlace con ese nombre o URL en esta categoría");
    return;
  }

  if (currentLink !== null) {
    linkPages[currentPage].links[currentLink] = {
      ...linkPages[currentPage].links[currentLink],
      text: name,
      url,
      iconUrl
    };
  } else {
    linkPages[currentPage].links.push({
      id: crypto.randomUUID(),
      text: name,
      url,
      iconUrl
    });
  }

  modal.style.display = "none";
  save();
  render();
};

document.getElementById("delete").onclick = () => {
  if (currentLink !== null) {
    linkPages[currentPage].links.splice(currentLink, 1);
    save();
    render();
  }
  modal.style.display = "none";
};


// ===== RELOJ =====
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


// ===== INIT =====
render();