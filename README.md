![preview](pag-ini-persVCV.png)

# Mi Speed Dial - Página de inicio personalizada

Extensión de navegador tipo speed dial para personalizar la nueva pestaña con accesos directos organizados por categorías.

---

## Características

- Categorías en formato cards
- Enlaces con icono + texto
- Drag & drop:
  - entre enlaces
  - entre categorías
- Scroll interno por categoría
- Añadir, editar y eliminar enlaces
- Crear y eliminar categorías
- Persistencia con localStorage
- Buscador Google integrado
- Reloj en tiempo real
- Interfaz limpia, rápida y responsive

---

## Uso como extensión de Chrome

### 1. Descargar el proyecto

Clona el repositorio o descárgalo como ZIP.

### 2. Abrir Chrome

Ir a: `chrome://extensions/`

### 3. Activar modo desarrollador

Interruptor arriba a la derecha.

### 4. Cargar la extensión

Click en: `Cargar descomprimida`

Selecciona la carpeta del proyecto.

### 5. Listo

Al abrir una nueva pestaña, se mostrará tu start page personalizada.

---

## Estructura del proyecto

- `index.html` → estructura principal
- `styles.css` → estilos y diseño
- `script.js` → lógica y funcionalidades
- `manifest.json` → configuración de la extensión
- `icons/` → iconos personalizados

---

## Persistencia de datos

Los enlaces y configuraciones se guardan en el navegador mediante: `localStorage`

---

## Autor

Desarrollado por **Verónica Corpa**
Versión: 1.0

---

## 🙌 Agradecimientos

A **Juanma (Animalia Consulting SL)** por la idea inicial y el archivo `manifest.json`, que sirvieron como base para convertir el proyecto en una extensión funcional.

---

## Estado del proyecto

Proyecto funcional en uso como página de inicio personalizada.

---

## Instalación manual (sin Chrome Web Store)

1. Descargar el proyecto (ZIP o clonar repositorio)

2. Descomprimir la carpeta

3. Abrir Chrome y acceder a:

   chrome://extensions/

4. Activar **Modo desarrollador** (arriba a la derecha)

5. Pulsar **Cargar descomprimida**

6. Seleccionar la carpeta del proyecto

7. Listo ✔

Al abrir una nueva pestaña, aparecerá la página personalizada.

---

## Posibles mejoras futuras

- Animaciones avanzadas en drag & drop
- Temas (modo claro/oscuro)
- Exportar / importar configuración
- Sincronización entre dispositivos
- Selector visual de iconos

---

## Nota

Proyecto desarrollado como práctica de programación web, con enfoque en usabilidad y personalización.