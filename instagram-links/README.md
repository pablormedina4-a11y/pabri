# Menú de enlaces para Instagram

## Personalizarlo

1. Abre `index.html` en un editor de texto.
2. Cambia **Mi Marca**, la frase bajo el nombre y el título de la pestaña.
3. En cada botón, reemplaza el valor dentro de `href="..."` por tu dirección real. Ejemplos:
   - Web: `https://tudominio.com`
   - WhatsApp: `https://wa.me/593999999999` (código de país + número, sin `+`, espacios ni guiones)
   - Correo: `mailto:hola@tudominio.com`
4. Para usar tu propia foto, crea una carpeta `images`, guarda allí la imagen como `perfil.jpg` y cambia el `src` de la etiqueta `<img>` a `images/perfil.jpg`.
5. Para añadir otro botón, duplica un bloque completo que empieza por `<a class="link"` y termina por `</a>`.

Los colores principales están al inicio de `style.css`: `--accent` y `--accent-dark`.

## Publicarlo gratis con GitHub Pages

1. Crea una cuenta en [GitHub](https://github.com) si aún no tienes una.
2. Pulsa **New repository**, ponle por ejemplo `mis-enlaces`, selecciona **Public** y créalo.
3. En el repositorio, pulsa **Add file → Upload files**. Sube `index.html`, `style.css` y `script.js` (y la carpeta `images` si la usaste). Pulsa **Commit changes**.
4. Abre **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**. Selecciona la rama `main`, la carpeta `/(root)` y pulsa **Save**.
5. Espera uno o dos minutos y vuelve a esa sección. GitHub mostrará una dirección parecida a `https://tuusuario.github.io/mis-enlaces/`.
6. Copia esa dirección y pégala en el campo **Enlaces** de tu perfil de Instagram.

Para probar el diseño antes de subirlo, abre `index.html` con doble clic en tu navegador.
