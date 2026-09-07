---
title: Arranque local
description: Levantar la plataforma en un entorno de desarrollo.
---

## Requisitos

- [Bun](https://bun.sh/) >= 1.3.8
- PostgreSQL >= 14 corriendo

## Pasos

```bash
git clone <url-del-repo>
cd joyerodigital-dev

bun install

cp .env.example .env.local
# Editar .env.local — ver la lista completa en Variables de entorno

bun run db:push    # aplica el schema a la BD
bun run db:seed    # datos iniciales (opcional)

bun run dev        # web :3000 + api :3001 + Drizzle Studio
```

Servicios por separado: `bun run dev:web` / `bun run dev:api`.

## Verificación

1. `http://localhost:3000` abre el landing.
2. `http://localhost:3001/api/swagger` muestra la API.
3. Login con un usuario del seed.

## Notas

- `.env.example` del repo **está incompleto** — la lista real de variables está en [Variables de entorno](/mantener/variables/). Si una integración falla en local, primero revisa que la variable exista.
- Tras modificar rutas Elysia, reinicia el dev server para que Eden Treaty regenere los tipos del frontend.
- PayPal sin `PAYPAL_ENV` arranca en **sandbox** a propósito. Ver [Pagos](/mantener/pagos/).
