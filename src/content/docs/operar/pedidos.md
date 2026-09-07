---
title: Pedidos
description: Ver y gestionar pedidos de la tienda y del catálogo de modelos 3D.
---

**Dónde:** `/admin/pedidos` — panel centralizado de pedidos.

Aquí llegan dos tipos de compra:

- **Productos físicos** de la [tienda](/operar/tienda/).
- **Modelos 3D** digitales (el cliente recibe tokens de descarga tras pagar).

## Ver los pedidos

1. En el menú lateral, entra a **Pedidos**.
2. La lista muestra cada pedido con su estado, el comprador y el total.
3. Abre un pedido para ver el detalle: ítems, montos y datos del comprador.

## Flujo de un pedido de modelos 3D

1. El cliente paga (Bold en COP, PayPal en USD).
2. La pasarela confirma el pago por webhook y el pedido queda registrado.
3. El sistema genera **tokens de descarga** (con límite de descargas por token) y el cliente descarga sus archivos desde su cuenta o desde el correo de confirmación.

## Si falla

- **El cliente pagó pero el pedido no aparece o quedó pendiente:** es el incidente más delicado. El equipo técnico tiene el procedimiento de reconciliación en [Pagos](/mantener/pagos/) e [Incidentes](/mantener/incidentes/). Para pagos de cursos con Bold existe además el botón "Consultar Bold" en la pantalla de inscripciones.
- **El cliente no puede descargar su modelo:** verifica cuántas descargas consumió su token (el límite es por diseño). Si agotó el límite por un problema real, escala al equipo técnico.
