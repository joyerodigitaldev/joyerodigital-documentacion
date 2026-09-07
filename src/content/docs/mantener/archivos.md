---
title: Archivos (R2 y Dropbox)
description: Dónde vive cada tipo de archivo y cómo funcionan las descargas.
---

## Dos almacenes, dos propósitos

| Tipo de archivo | Dónde | Cómo se sirve |
|---|---|---|
| Imágenes (productos, modelos 3D, landing) | **Cloudflare R2** | URL pública del bucket (`R2_PUBLIC_URL`) |
| Archivos STL de modelos 3D | **Dropbox** | Enlace temporal generado por la API al descargar |

## R2 (imágenes)

- El frontend sube imágenes a través del API (`POST /api/upload/image`), que las escribe en el bucket con el SDK S3.
- El dominio público del bucket está permitido en `next.config.ts` (`images.remotePatterns`). Si el bucket cambia de dominio, hay que actualizar esa lista y rebuildear el frontend.
- Credenciales: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_PUBLIC_URL`.

## Dropbox (STL)

- El admin elige el STL con el chooser de Dropbox (`NEXT_PUBLIC_DROPBOX_APP_KEY`) al crear el modelo; en la BD queda el `dropboxPath`.
- Credenciales del API: `DROPBOX_APP_KEY`, `DROPBOX_APP_SECRET`, `DROPBOX_REFRESH_TOKEN`.

## Descargas seguras

1. Al comprar un modelo, el sistema crea **tokens de descarga** (con límite de descargas, default 3).
2. El cliente descarga desde su cuenta o el correo de confirmación: `GET /api/download/:token`.
3. El backend valida el token (no expirado, no revocado, descargas disponibles), pide a Dropbox un enlace temporal, incrementa el contador y redirige.

**Si un cliente no puede descargar:** revisar contador del token, que el archivo siga en el `dropboxPath` original, y que las credenciales de Dropbox sigan válidas.
