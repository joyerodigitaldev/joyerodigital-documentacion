---
title: Modelos 3D
description: Subir modelos 3D descargables (STL) al catálogo, con categorías y fotos.
---

**Dónde:** `/admin/modelos-3d` (y `/admin/categorias-3d` para las categorías).

El catálogo público vive en `https://joyerodigital.com/modelos-3d`. Cada modelo tiene:

- **Archivo STL** — se guarda en **Dropbox** (cuenta del cliente). El comprador lo descarga con un token seguro tras pagar.
- **Fotos** — se guardan en **Cloudflare R2** y se muestran en el catálogo.
- **Clasificación** — categoría y subcategoría, precio, material, formato, peso/tamaño.
- **Banderas** — activo, nuevo, bestseller, destacado.

## Relación categoría → subcategoría

Las subcategorías pertenecen a una categoría. Crea primero la categoría en **Categorías 3D** y luego las subcategorías dentro de ella.

## Subir un modelo

1. Si es una categoría nueva, créala primero en **Categorías 3D**.
2. En **Modelos 3D**, crea un modelo nuevo.
3. Completa título, precio, material, formato y demás datos del formulario.
4. **Archivo STL:** usa el selector de Dropbox integrado en el formulario para elegir el archivo desde la cuenta de Dropbox del negocio.
5. **Fotos:** súbelas desde el formulario (van a R2).
6. Asigna categoría y subcategoría, marca las banderas que apliquen y guarda.

## Si falla

- **El selector de Dropbox no abre o no lista archivos:** problema de credenciales de Dropbox. Ver [Archivos](/mantener/archivos/).
- **El modelo existe pero no se puede comprar/descargar:** verifica que esté **activo** y que el archivo siga existiendo en Dropbox (si se borra o mueve en Dropbox, la descarga falla).
- **Las fotos no se ven:** problema con R2 — ver [Archivos](/mantener/archivos/).
