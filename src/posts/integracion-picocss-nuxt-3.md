---
layout: layout-post.ejs
title: Vue 3 - Pico.css - Agregar el Minimal CSS Framework a Nuxt 3
date: 2024-02-26
description: Siga esta guía para integrar perfectamente Pico.css y poder tener estilos bonitos en sin mucha configuración.
mainImage: /assets/images/posts/20240226_mainpage.webp
---

## Introducción

En este artículo, mostraré cómo agregar Pico.css a un proyecto hecho con Nuxt 3. Tengo que aclarar que esta es una manera que encontré yo de que funcione, porque realicé una larga búsqueda y no encontré otro articulo que enseñe como añadirlo (quería compartirlo por si alguien quiere usarlo en algún proyecto que esté realizando). 

PD: Asumo que el proyecto hecho con nuxt ya está creado, pero sino, es solo ir a la [documentación oficial](https://nuxt.com/docs/getting-started/installation) y corremos el comando en la consola (en el directorio que quieran) `npx nuxi@latest init <project-name>` para crear un nuevo proyecto inicial (Se necesita tener instalado Node.js - v18.0.0 o más reciente).

## Instalar Pico.css
Vamos a la pagina oficial, y buscamos la sección "Getting Started"

> [PICO.CSS Documentación](https://picocss.com/)

Vamos a la sección `Install with NPM` y elegimos el comando que queramos para instalar la dependencia en el proyecto, segun el gestor de paquetes que estemos usando (npm, yarn, pnpm)

Una vez instalado, lo podemos verificar en nuestro `package.json`:
```json
{
   "@picocss/pico": "^2.0.3",
}
```

## Añadirlo al proyecto con Nuxt
Como sabemos, cuando instalamos una dependencia, esta se agrega a los `node_modules`, es algo a tener en cuenta para después.

Antes que nada, hay que crear un archivo dentro de esta estructura:
`assets/css/app.css` (Esto dentro de la raíz del proyecto).
Dentro de este archivo, hay que escribir lo siguiente:
```css
@import("");
```

Dentro de ese import tenemos que poner la ruta de un archivo "pico.css" que se encuentra dentro del node_modules. Quedaría algo así:
```css
@import url('@picocss/pico/css/pico.css')
```

Ahora ya podemos arrancar nuestro proyecto, en mi caso con `pnpm run dev`, y tendremos ya el estilo de Pico:

![Preview aplicación corriendo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6w9a1hnt51j6lhe7ow8z.png)

Espero que les haya funcionado. Hasta el próximo blog. 👋
