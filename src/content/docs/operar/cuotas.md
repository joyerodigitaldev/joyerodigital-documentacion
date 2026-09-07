---
title: Pago por cuotas
description: Cómo funciona el plan de cuotas de los cursos y qué hacer cuando un alumno no paga.
---

Aplica solo a **cursos** (grupales y personalizados). Las asesorías se pagan de contado.

## Las reglas en una tabla

| Regla | Detalle |
|---|---|
| Sin intereses | Es un plan propio de la plataforma, no un crédito |
| 50% inicial | El alumno paga la mitad al inscribirse; el resto en partes iguales |
| Acceso inmediato | Con el primer pago aprobado, el alumno ya entra al curso |
| Sin cobros automáticos | No se guarda ninguna tarjeta. Cada cuota es un pago nuevo que el alumno hace cuando quiere |
| Sin suspensión automática | Si no paga, el sistema no hace nada solo. Un administrador decide |
| Moneda congelada | La moneda y los montos del plan no cambian, aunque después cambie el precio del curso |
| Cupones primero | El descuento se aplica **antes** de dividir en cuotas |
| Mínimo por cuota | Si una cuota quedaría por debajo de $1.000 COP, el sistema no deja activar el plan |

## Cómo paga el alumno

1. Se inscribe y elige "en cuotas" (o pago completo).
2. En el carrito se cobra **solo la cuota inicial** (el 50%). Si tiene otros productos en el carrito, esos se cobran completos.
3. Paga con **Bold** (COP o USD) o **PayPal** (solo USD).
4. Recibe el correo con los accesos (link de reunión y Drive).
5. Las cuotas siguientes las paga desde **Mis Cursos**, en orden, cuando él decida. También puede **liquidar el saldo** completo de una vez.

## Recordatorios por correo

El sistema tiene la lógica para enviar recordatorios automáticos (3 días antes y el día del vencimiento).

:::caution[No activo en producción]
Falta configurar el disparador periódico (cron) en el servidor que ejecuta esos envíos. **Hoy los recordatorios no se están enviando.** Ver [Pendientes](/pendientes/).
:::

## Si un alumno no paga

1. La cuota vence. El sistema **no** suspende nada automáticamente.
2. Un administrador revisa la inscripción y decide **revocar el acceso** (el motivo es obligatorio).
3. El alumno deja de ver los materiales, pero **puede seguir pagando** sus cuotas.
4. Si paga, el acceso **no** se reactiva solo — el administrador lo reactiva manualmente.

## Qué NO existe hoy (para no asumirlo)

- **Panel de cartera**: ver de un vistazo todas las cuotas vencidas de todos los cursos.
- **Registrar un pago manual** (transferencia o efectivo recibido por fuera).
- **Condonar una cuota** (la lógica existe, pero no hay botón en el panel).
- **Historial visible** de revocaciones (el motivo queda solo en logs técnicos).

Estos ítems están listados en [Pendientes y deuda conocida](/pendientes/).
