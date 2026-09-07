---
title: Mapa del sistema
description: Componentes de la plataforma y servicios externos de los que depende.
---

## Componentes propios

| Componente | Qué es | Puerto |
|---|---|---|
| `apps/web` | Frontend Next.js 15 (React 19, Tailwind v4) | 3000 |
| `apps/backend-worker` | Servidor API Elysia (Bun) | 3001 |
| `packages/api` | Routers, servicios y lógica de negocio (14 módulos) | — |
| `packages/auth` | Better Auth: sesiones, Google OAuth, roles | — |
| `packages/database` | Schema Drizzle + migraciones | — |
| PostgreSQL | Base de datos | 5432 |

El frontend habla con el backend exclusivamente vía **Eden Treaty** (cliente type-safe generado de los routers Elysia). Swagger disponible en `/api/swagger` del backend.

## Servicios externos

| Servicio | Para qué |
|---|---|
| **Cloudflare R2** | Imágenes públicas (productos, modelos 3D, landing) |
| **Dropbox** | Archivos STL de modelos 3D + enlaces temporales de descarga |
| **Bold** | Pagos en COP (Colombia) — botón de pagos + webhooks |
| **PayPal** | Pagos en USD — Orders API + webhooks |
| **Google Cloud** | OAuth (login con Google) + YouTube Data API (videos del canal en el landing) |
| **SMTP** | Correos transaccionales: acceso a cursos, reset de contraseña, cotizaciones, notificaciones admin |
| **Looker Studio** | Dashboards embebidos en `/admin/marketing` |
| **WhatsApp** | Botón del cotizador (`wa.me`) |

## Flujos críticos

1. **Compra de modelo 3D:** carrito → pago (Bold/PayPal) → webhook confirma → tokens de descarga → redirect a URL temporal de Dropbox.
2. **Inscripción a curso:** formulario → carrito (cuota inicial si es en cuotas) → pago → webhook → correo con accesos (SMTP).
3. **Login:** email/password o Google → Better Auth → cookie de sesión → middleware del frontend valida contra `/api/auth/get-session` en cada ruta privada.
