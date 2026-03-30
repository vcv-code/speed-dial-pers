![preview](pag-ini-persVCV.png)

# 🧭 Mi Speed Dial - Página de inicio personalizada

Extensión de navegador tipo speed dial para personalizar la nueva pestaña con accesos directos organizados por categorías.

---

## ✨ Características

- Categorías en formato cards
- Enlaces con icono + texto (se abren en pestaña nueva)
- **Drag & drop rediseñado:**
  - Al arrastrar un icono aparece un círculo verde **+** en la esquina de cada icono destino
  - Soltar sobre el **+** inserta el icono en esa posición
  - Soltar en el área vacía de una tarjeta lo añade al final
  - Soltar fuera de un círculo verde cancela el movimiento
  - Reordenar categorías arrastrando por el título
- Scroll interno por categoría (máx. 2 filas visibles)
- Añadir, editar y eliminar enlaces (clic derecho sobre el icono)
- Crear, renombrar y eliminar categorías
- Sistema de iconos automático:
  - favicon del sitio
  - fallback a Google (`s2/favicons`)
  - icono local por defecto
- Persistencia con `localStorage`
- Buscador de Google integrado con acceso rápido a Maps
- Reloj en tiempo real
- Interfaz limpia, rápida y responsive

---

## 📦 Instalación (sin Chrome Web Store)

1. Descargar el proyecto
   👉 Pulsa en **Code → Download ZIP**

2. Descomprimir la carpeta

3. Abrir Chrome y acceder a:
   `chrome://extensions/`

4. Activar **Modo desarrollador** (arriba a la derecha)

5. Pulsar **Cargar descomprimida**

6. Seleccionar la carpeta del proyecto

7. Listo ✔

Al abrir una nueva pestaña, aparecerá la página personalizada.

---

## 📁 Estructura del proyecto

- `index.html` → estructura principal
- `styles.css` → estilos y diseño
- `script.js` → lógica y funcionalidades
- `manifest.json` → configuración de la extensión
- `icons/` → iconos personalizados

---

## 💾 Persistencia de datos

Los enlaces y configuraciones se guardan en el navegador mediante `localStorage`.
Si se pulsa **Reset**, se recuperan los enlaces predeterminados definidos en `script.js`.

---

## 🔄 Historial de cambios

### v1.2
- Drag & drop completamente rediseñado: zonas de drop visibles en esquina de cada icono
- Corrección del cálculo de posición al mover iconos hacia adelante
- Los enlaces se abren ahora en pestaña nueva (`target="_blank"`)
- Botón de acceso rápido a Google Maps junto al buscador
- Iconos más grandes y mejor aprovechamiento del espacio en cada recuadro
- Mayor margen superior para que los controles no queden cortados
- Soltar fuera de una zona válida ya no mueve el icono accidentalmente
- Nuevos accesos directos añadidos a los predeterminados

### v1.1
- Primera versión funcional como extensión de Chrome
- Drag & drop entre enlaces y categorías
- Sistema de iconos con fallback automático

---

## 👤 Autor

**Verónica Corpa**
Versión: 1.2

---

## 🙌 Agradecimientos

A **Juanma (Animalia Consulting SL)** por la idea inicial y el archivo `manifest.json`, que sirvieron como base para convertir el proyecto en una extensión funcional.

---

## 📌 Estado del proyecto

Proyecto desarrollado como práctica de programación web, con enfoque en usabilidad, manipulación del DOM y personalización de la experiencia de usuario.

---

## 🔧 Posibles mejoras futuras

- Selector manual de iconos (subida o librería)
- Temas (modo claro/oscuro)
- Exportar / importar configuración
- Sincronización entre dispositivos
- Edición directa sin modal
