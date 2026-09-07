---
title: Inventario de accesos
description: Todos los servicios de la plataforma, para qué sirven y dónde están sus claves.
---

Todas las cuentas de esta tabla **pertenecen al cliente**. El equipo que desarrolló la plataforma solo ayudó a crearlas y configurarlas; la cesión confirma al cliente como dueño.

:::caution[Las contraseñas no están aquí]
Los secretos viven en el gestor de contraseñas acordado (Bitwarden/1Password) o en el Drive cifrado de la entrega. Esta tabla dice **qué existe y dónde encontrar la clave**, nunca la clave misma.
:::

## Servicios

| Servicio | Para qué | URL del panel | Dónde está la clave |
|---|---|---|---|
| GitHub | Código fuente, PRs, historial | <!-- RELLENAR --> | Gestor de contraseñas |
| VPS | Servidor donde corre todo | <!-- RELLENAR: IP / proveedor --> | Gestor (SSH + panel) |
| Dokploy | Deploys, contenedores, env de producción | <!-- RELLENAR --> | Gestor de contraseñas |
| Dominio / DNS | `joyerodigital.com` y subdominios | <!-- RELLENAR: registrador --> | Gestor de contraseñas |
| PostgreSQL | Datos de producción | <!-- RELLENAR --> | Gestor (`DATABASE_URL`) |
| Cloudflare R2 | Imágenes públicas | https://dash.cloudflare.com | Gestor (keys R2) |
| Dropbox | Archivos STL y descargas | https://www.dropbox.com/developers/apps | Gestor (app key/secret) |
| Google Cloud | OAuth + YouTube API | https://console.cloud.google.com | Gestor de contraseñas |
| Bold | Pagos en COP | https://developers.bold.co / panel Bold | Gestor (API key + secret) |
| PayPal | Pagos en USD | https://developer.paypal.com | Gestor (client id/secret) |
| SMTP | Correos transaccionales | <!-- RELLENAR: proveedor --> | Gestor (usuario/clave) |
| Looker Studio | Dashboards de marketing | https://lookerstudio.google.com | Cuenta Google del cliente |
| YouTube | Videos del canal en el landing | (misma Google Cloud) | Gestor (API key) |
| WhatsApp | Botón del cotizador | — | Es solo el número (`NEXT_PUBLIC_WHATSAPP_NUMBER`) |
| Cuenta admin del panel | Operación diaria de `/admin` | https://joyerodigital.com/admin | Gestor de contraseñas |

## Al ceder cada cuenta

1. Cambiar la contraseña o rotar las claves (el equipo que entrega ya no debe conservar acceso).
2. Verificar que el email de la cuenta y el método de pago sean del cliente.
3. Marcar el ítem en el [checklist de cierre](/cierre/).
