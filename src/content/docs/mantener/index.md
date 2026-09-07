---
title: Mantener y desplegar
description: Runbook técnico para el equipo que hereda el código de Joyero Digital.
---

Esta sección es para el desarrollador o agencia que va a mantener la plataforma. Es un runbook operativo, no documentación de arquitectura — el detalle de endpoints y módulos está en el repositorio (`README.md`, `AGENTS.md` y `docs/`).

## Contenido

| Tema | Página |
|---|---|
| Componentes y servicios externos | [Mapa del sistema](/mantener/mapa/) |
| Levantar el proyecto en local | [Arranque local](/mantener/local/) |
| Deploy con Dokploy en el VPS | [Producción](/mantener/produccion/) |
| Todas las variables de entorno | [Variables de entorno](/mantener/variables/) |
| PostgreSQL, backups y migraciones | [Base de datos](/mantener/datos/) |
| Bold, PayPal y webhooks | [Pagos](/mantener/pagos/) |
| R2 (imágenes) y Dropbox (STL) | [Archivos](/mantener/archivos/) |
| Qué hacer cuando algo se rompe | [Incidentes](/mantener/incidentes/) |

## Stack en una línea

Monorepo Bun + Turborepo · Next.js 15 (web, :3000) · Elysia (api, :3001) · PostgreSQL + Drizzle · Better Auth · Bold (COP) + PayPal (USD) · Cloudflare R2 · Dropbox.

## Antes de cualquier cambio

```bash
bun run lint && bun run type-check
```

Los tests viven solo en `packages/api` (`bun test` ahí dentro). No hay task de test en Turborepo — si tocas pagos, auth o lógica de dinero, corre los tests manualmente.
