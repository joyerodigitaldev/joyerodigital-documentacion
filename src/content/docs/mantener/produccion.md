---
title: Producción (Dokploy)
description: Cómo está desplegada la plataforma en el VPS con Dokploy.
---

La plataforma corre en un **VPS del cliente** orquestado con **Dokploy**.

- **Panel Dokploy:** <!-- RELLENAR: URL del panel Dokploy -->
- **VPS:** <!-- RELLENAR: proveedor, IP, cómo acceder por SSH -->
- **Dominio:** `joyerodigital.com` <!-- RELLENAR: confirmar dominio y subdominios -->

## Arquitectura de despliegue

Dos aplicaciones Docker, construidas con los Dockerfiles de la raíz del repo:

| App | Dockerfile | Puerto |
|---|---|---|
| Frontend | `dockerfile.web` | 3000 |
| Backend | `dockerfile.api` | 3001 |

Ambos son multi-stage sobre `bun:1-alpine`. El frontend usa `output: 'standalone'` de Next.js.

:::caution[Variables NEXT_PUBLIC_*]
Next.js embebe las variables `NEXT_PUBLIC_*` en el bundle del cliente **en tiempo de build**. En Dokploy deben pasarse como **build arguments**, no solo como variables de entorno del contenedor. Cambiar una `NEXT_PUBLIC_*` exige rebuild del frontend.
:::

## Desplegar un cambio

1. Merge a la rama que Dokploy tenga conectada (verificar en el panel cuál es — normalmente `main`).
2. Dokploy detecta el push y rebuildea, o se dispara manualmente desde el panel.
3. Verificar: `https://joyerodigital.com` abre, login funciona, un pago de prueba si el cambio toca pagos.

## Base de datos en producción

PostgreSQL corre <!-- RELLENAR: como contenedor Dokploy / servicio externo -->. Migraciones y backups: ver [Base de datos](/mantener/datos/).

## Logs

Los logs de cada app se ven desde el panel de Dokploy (sección de logs del servicio). Para incidentes: [Incidentes](/mantener/incidentes/).
