---
title: Variables de entorno
description: Lista completa de variables de entorno de la plataforma, extraída del código.
---

Los **valores** no están en este manual — viven en el gestor de contraseñas (ver [Inventario de accesos](/accesos/)). Aquí está la lista completa de nombres y para qué sirve cada una.

:::caution[.env.example desactualizado]
El `.env.example` del repo no incluye todas estas variables. Esta tabla es la fuente de verdad.
:::

## Núcleo

| Variable | Uso |
|---|---|
| `DATABASE_URL` | Conexión PostgreSQL |
| `DB_POOL_MAX` | Tamaño del pool (opcional, default 20) |
| `PORT` | Puerto del API (default 3001) |
| `NODE_ENV` | `development` / `production` |
| `AUTH_SECRET` | Secreto Better Auth (tiene prioridad sobre `BETTER_AUTH_SECRET`) |
| `BETTER_AUTH_SECRET` | Secreto alternativo (mín. 32 chars) |
| `BETTER_AUTH_URL` | URL base del servidor de auth |
| `NEXT_PUBLIC_BACKEND_URL` | URL del API — la usan frontend, auth y el propio API |
| `NEXT_PUBLIC_FRONTEND_URL` | URL del frontend — CORS, redirects, correos |
| `NEXT_PUBLIC_API_URL` | Solo en `.env.example`; el código usa `NEXT_PUBLIC_BACKEND_URL` |
| `NEXT_PUBLIC_APP_URL` | Solo en `.env.example` |

## Integraciones

| Variable | Uso |
|---|---|
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Login con Google |
| `DROPBOX_APP_KEY` / `DROPBOX_APP_SECRET` | API de Dropbox (descargas STL) |
| `DROPBOX_REFRESH_TOKEN` | Renovación de token de Dropbox (opcional) |
| `NEXT_PUBLIC_DROPBOX_APP_KEY` | Chooser de Dropbox en el admin |
| `R2_ACCOUNT_ID` | Endpoint de Cloudflare R2 |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | Credenciales S3 de R2 |
| `R2_BUCKET` | Bucket de imágenes |
| `R2_PUBLIC_URL` | Dominio público del bucket |
| `BOLD_API_KEY` | API de Bold |
| `BOLD_SECRET_KEY` | Verificación de firma de webhooks Bold |
| `BOLD_API_URL` | Default `https://integrations.api.bold.co` |
| `PAYPAL_CLIENT_ID` / `PAYPAL_CLIENT_SECRET` | API de PayPal |
| `PAYPAL_ENV` | `production` o sandbox (sin ella: sandbox, a propósito) |
| `PAYPAL_WEBHOOK_ID` | Verificación de webhooks PayPal (obligatoria en producción) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Servidor de correo |
| `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | Cuenta y remitente |
| `ADMIN_NOTIFICATION_EMAIL` | Recibe cotizaciones y avisos de venta |
| `YOUTUBE_API_KEY` / `YOUTUBE_CHANNEL_ID` | Videos del canal en el landing |
| `NEXT_PUBLIC_LOOKER_STUDIO_URL_1` / `_2` | Reportes embebidos en `/admin/marketing` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Botón de WhatsApp del cotizador |

## Recordatorios

- Las `NEXT_PUBLIC_*` se embeben en el build del frontend — cambiarlas exige rebuild (ver [Producción](/mantener/produccion/)).
- `AUTH_SECRET` y `BETTER_AUTH_SECRET` deben tener el **mismo valor** en todos los procesos (web y api firman/verifican la misma sesión).
