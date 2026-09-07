---
title: Tienda
description: Publicar y editar productos físicos de la tienda online.
---

**Dónde:** `/admin/tienda`.

## Publicar un producto

1. En el menú lateral, entra a **Tienda**.
2. Crea un producto nuevo y completa el formulario: nombre, descripción, precio, stock e imágenes.
3. Las imágenes se suben directamente desde el formulario — el sistema las almacena en Cloudflare R2 y las sirve optimizadas.
4. Guarda. El producto queda visible en `https://joyerodigital.com/tienda` según su estado (activo/inactivo).

## Editar o desactivar

1. En la lista de productos, abre el que quieras modificar.
2. Ajusta precio, stock o imágenes y guarda.
3. Para retirar un producto sin borrarlo, desactívalo.

## Si falla

- **La imagen no sube o se ve rota en la tienda:** problema de conexión con R2. El equipo técnico revisa credenciales en [Archivos](/mantener/archivos/).
- **El producto no aparece en la tienda pública:** verifica que esté activo y con stock.
