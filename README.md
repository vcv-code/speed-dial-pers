![preview](pag-ini-persVCV.png)

# 🧭 Mi Speed Dial - Página de inicio personalizada

Extensión de navegador tipo speed dial para personalizar la nueva pestaña con accesos directos organizados por categorías.

---

## ✨ Características

- Categorías en formato cards  
- Enlaces con icono + texto  
- Drag & drop:
  - entre enlaces (reordenar dentro de la misma categoría)
  - entre categorías (mover enlaces)
  - reordenar categorías  
- Scroll interno por categoría (máx. 2 filas visibles)  
- Añadir, editar y eliminar enlaces  
- Crear, renombrar y eliminar categorías  
- Sistema de iconos automático:
  - favicon del sitio
  - fallback a Google (`s2/favicons`)
  - icono local por defecto  
- Persistencia con localStorage  
- Buscador Google integrado  
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

---

## 👤 Autor

**Verónica Corpa**  
Versión: 1.1

---

## 🙌 Agradecimientos

A **Juanma (Animalia Consulting SL)** por la idea inicial y el archivo `manifest.json`, que sirvieron como base para convertir el proyecto en una extensión funcional.

---

## 📌 Estado del proyecto

Proyecto desarrollado como práctica de programación web, con enfoque en usabilidad, manipulación del DOM y personalización de la experiencia de usuario.

---

## 🔧 Posibles mejoras futuras

- Animaciones en drag & drop  
- Selector manual de iconos (subida o librería)  
- Temas (modo claro/oscuro)  
- Exportar / importar configuración  
- Sincronización entre dispositivos  
- Edición directa sin modal  

---

## 🐾 Nota

Proyecto desarrollado como práctica de programación web, con enfoque en usabilidad y personalización.