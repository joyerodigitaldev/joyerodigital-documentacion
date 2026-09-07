---
title: Pagos (Bold y PayPal)
description: Pasarelas, monedas soportadas, webhooks y reconciliación de pagos.
---

## Regla de monedas

| Pasarela | Monedas | Nota |
|---|---|---|
| **Bold** | COP y USD | Siempre disponible |
| **PayPal** | Solo USD | COP **no** está soportado en la Orders API v2. El botón de PayPal se oculta para planes en COP |

Esta regla está protegida en el backend (`assertProviderCurrencySupport`): un checkout de PayPal sobre un plan en COP responde 422.

## Entornos de PayPal

- `PAYPAL_ENV=production` → mueve dinero real.
- Sin `PAYPAL_ENV` → **sandbox a propósito**: un entorno mal configurado no debe cobrar de verdad.
- En producción, `PAYPAL_WEBHOOK_ID` es obligatoria para verificar firmas de webhook.

## Webhooks

Ambas pasarelas confirman pagos por webhook:

- **Bold:** firma verificada con `BOLD_SECRET_KEY`.
- **PayPal:** verificación contra la API de PayPal con `PAYPAL_WEBHOOK_ID`.

URLs de webhook a configurar en cada panel: <!-- RELLENAR: URLs exactas registradas en Bold y PayPal -->

## Reconciliación de pagos de cursos

Si un pago quedó en limbo (webhook falló, red del cliente, etc.):

1. En la pantalla de inscripciones, botón **"Consultar Bold"** (`GET /admin/payments/:id/query-bold`): pregunta a Bold y, si responde APPROVED, actualiza `coursePayment` y `courseEnrollment` automáticamente.
2. Para PayPal no existe botón equivalente — reconciliar contra el dashboard de PayPal y la BD.

La corrección manual de estados (marcar pagado a mano, auditoría) es un pendiente conocido: ver [Pendientes](/pendientes/).

## Tests

Los tests de pagos viven en `packages/api/tests/payments/`. Antes de tocar cualquier lógica de dinero:

```bash
cd packages/api && bun test
```
