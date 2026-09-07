---
title: Cotizaciones 3D
description: Cómo llegan las cotizaciones del cotizador del landing y cómo atenderlas.
---

El landing tiene un **cotizador de joyas** (drawer interactivo): el visitante configura material, peso, piedras y acabado, y obtiene un precio estimado.

## Cómo llega una cotización

1. El visitante completa el cotizador en `https://joyerodigital.com`.
2. El sistema envía el detalle de la cotización por **correo** a la dirección de notificaciones del negocio (configurada por el equipo técnico en `ADMIN_NOTIFICATION_EMAIL`).
3. El visitante también puede enviarte el resumen por **WhatsApp** con un botón (al número configurado en `NEXT_PUBLIC_WHATSAPP_NUMBER`).

## Atenderla

1. Revisa el correo con el desglose: material, peso, piedras, tier y total estimado.
2. Contacta al cliente por el canal que dejó (correo o WhatsApp).
3. El precio del cotizador es **estimado** — el valor final se define en la conversación.

## Si falla

- **No llegan los correos de cotización:** problema del servicio SMTP o de la variable `ADMIN_NOTIFICATION_EMAIL`. Ver [Incidentes](/mantener/incidentes/).
- **El botón de WhatsApp no aparece en el cotizador:** la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` no está configurada. Es un cambio de despliegue — ver [Variables de entorno](/mantener/variables/).
