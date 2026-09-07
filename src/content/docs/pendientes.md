---
title: Pendientes y deuda conocida
description: Bugs abiertos, funcionalidades conversadas pero no construidas y tareas técnicas pendientes.
---

Esta página es parte del contrato de entrega: aquí queda explícito **qué no está terminado**. Tres listas separadas — no mezclar "se rompió" con "nunca se hizo".

Formato de cada ítem: **Tipo · Qué · Dónde · Impacto (Alto/Medio/Bajo) · Estado · Nota**.

## No implementado (conversado, no construido)

| Qué | Dónde | Impacto | Estado | Nota |
|---|---|---|---|---|
| Panel de cartera: cuotas vencidas/próximas de todos los cursos en una vista | Cursos → inscripciones | Alto | Abierto | El cliente lo pidió en descubrimiento; no entró en esta etapa. Hoy solo existe la tabla general de inscripciones |
| Registrar pago manual (transferencia/efectivo) | Cursos → inscripciones | Alto | Abierto | Parte del panel de cartera pedido |
| Condonar una cuota desde el panel | Cursos → cuotas | Medio | Abierto | La lógica y el estado "condonada" existen en el sistema; falta el botón/pantalla |
| Corrección manual de estados de inscripción | Cursos → inscripciones | Medio | Bloqueado | Diseño listo (`docs/refinamiento-correccion-estados-inscripciones.md`), pendiente de respuestas del cliente para definir alcance |
| Historial visible de revocaciones de acceso | Cursos → inscripciones | Bajo | Abierto | El motivo de revocación queda solo en logs del servidor, no en una pantalla consultable |
| Enlace a inscripciones en el menú del panel | `/admin` menú lateral | Bajo | Abierto | Hoy se accede escribiendo la URL directamente. Ajuste menor |

## Tasks técnicas pendientes

| Qué | Dónde | Impacto | Estado | Nota |
|---|---|---|---|---|
| Configurar cron/disparador de recordatorios de cuotas | Infraestructura (Dokploy/VPS) | Alto | Abierto | La lógica de correos está lista; **sin el disparador los recordatorios no se envían** |
| Auditoría de cambios manuales de estado (tabla o campos) | `courseEnrollment` | Medio | Bloqueado | Depende de la decisión de alcance del ítem anterior |
| `.env.example` incompleto | Raíz del repo | Bajo | Abierto | La lista real está en [Variables de entorno](/mantener/variables/) |
| Task `test` en Turborepo / cobertura amplia | `turbo.json` | Medio | Abierto | Solo 2 archivos de test, en `packages/api`. Pagos, auth y lógica de dinero deben tener test antes de tocarse |
| Endpoints admin sin chequeo de rol (solo sesión) | `packages/api` (varios) | Alto | Abierto | `auth: true` valida sesión pero no permisos por módulo en varios endpoints admin |

## Bugs abiertos

| Qué | Dónde | Impacto | Estado | Nota |
|---|---|---|---|---|
| <!-- RELLENAR: bug real --> | — | — | Abierto | Borrar esta plantilla y cargar los bugs reales conocidos al día de la entrega |

:::note[Responsabilidad]
Antes de la cesión, esta página se revisa **juntos** (equipo que entrega + cliente) y se actualiza con el estado real. Nada de lo listado aquí está cubierto por la ventana de soporte de 30 días salvo acuerdo explícito.
:::
