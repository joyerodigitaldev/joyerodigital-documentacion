---
title: Métricas y marketing
description: Ver el dashboard del panel y los reportes de Looker Studio.
---

## Dashboard del panel

**Dónde:** `/admin` (la pantalla inicial del panel).

1. Entra a `https://joyerodigital.com/admin` con tu cuenta de staff.
2. El dashboard muestra las métricas principales del negocio (ventas, actividad).
3. Cualquier rol de staff ve al menos el dashboard; el resto de módulos depende de sus [permisos](/operar/usuarios/).

## Reportes de marketing (Looker Studio)

**Dónde:** `/admin/marketing`.

1. En el menú lateral, entra a **Marketing**.
2. La pantalla embebe hasta dos reportes de Looker Studio configurados por el equipo técnico.
3. Los reportes se editan en la propia Looker Studio (cuenta de Google del cliente), no en el panel.

## Si falla

- **El reporte de marketing aparece vacío:** las URLs de Looker Studio no están configuradas o caducaron. El equipo técnico las define en las variables `NEXT_PUBLIC_LOOKER_STUDIO_URL_1` y `_2` — ver [Variables de entorno](/mantener/variables/).
- **No ves el menú lateral completo:** tu rol no tiene permisos de esos módulos. Pide a un admin que revise tu rol en [Usuarios y permisos](/operar/usuarios/).
