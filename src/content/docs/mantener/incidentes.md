---
title: Incidentes
description: Qué revisar cuando algo se rompe en producción.
---

Orden general: logs en Dokploy → servicio externo involucrado → base de datos.

## El sitio no abre

1. Panel de Dokploy: ¿los dos servicios (web y api) están corriendo?
2. Logs del servicio caído. Causa típica: variable de entorno faltante o inválida (el API valida env al arrancar y falla ruidosamente).
3. Si el API arranca pero el frontend da error de conexión: revisar `NEXT_PUBLIC_BACKEND_URL` (recuerda: cambiarla exige rebuild del frontend).
4. DNS/dominio: verificar en el registrador que el dominio apunta al VPS.

## Pago aprobado pero el pedido no se creó

1. **Cursos:** botón "Consultar Bold" en la inscripción (reconciliación automática si Bold confirma APPROVED).
2. Revisar logs del API buscando el webhook de la pasarela: ¿llegó? ¿falló la verificación de firma?
3. Verificar `BOLD_SECRET_KEY` / `PAYPAL_WEBHOOK_ID` contra los paneles de las pasarelas.
4. Confirmar el pago en el dashboard de la pasarela (Bold / PayPal) con el ID de transacción.
5. Si hay que corregir estados a mano: hoy no existe endpoint para eso — es un [pendiente conocido](/pendientes/). Mientras tanto, corrección directa en BD con cuidado y registro de lo hecho.

## Los correos no salen

1. Verificar variables `SMTP_*` y `ADMIN_NOTIFICATION_EMAIL`.
2. Probar credenciales SMTP directamente (el proveedor de correo suele tener logs de entrega).
3. Logs del API: el servicio de correo registra errores de envío.
4. Recordar: los **recordatorios de cuotas** no se envían aunque SMTP esté bien — falta el cron que los dispara ([pendiente](/pendientes/)).

## Imágenes rotas

1. ¿Todas o solo algunas? Todas → credenciales/config de R2 (`R2_PUBLIC_URL`, keys). Algunas → el objeto fue borrado del bucket.
2. Verificar que el dominio del bucket siga en `images.remotePatterns` de `next.config.ts`.

## Descarga de modelo 3D falla

1. Token: ¿expirado, revocado o sin descargas disponibles?
2. ¿El archivo sigue en Dropbox en el `dropboxPath` guardado?
3. Credenciales Dropbox (`DROPBOX_APP_KEY/SECRET`, refresh token).

## Login con Google falla

1. `GOOGLE_CLIENT_ID/SECRET` correctos y del proyecto correcto en Google Cloud.
2. En Google Cloud Console: el redirect URI de producción debe estar autorizado.
3. `AUTH_SECRET`/`BETTER_AUTH_SECRET` iguales en web y api.
