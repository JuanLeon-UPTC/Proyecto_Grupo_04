### FP-01 — Inicio de venta
- **Objetivo:** construir el detalle de una nueva venta.
- **Roles:** cajero, administrador.
- **Componentes:** búsqueda de producto, categoría, listado, cantidad, detalle de venta, subtotal/total, medio de pago informativo.
- **Acciones:** agregar línea, quitar línea, confirmar, cancelar.
- **Validaciones:** V-07, V-08, V-14.
- **Estados:** vacía, con líneas, validación fallida, procesando, confirmada, error de persistencia.
- **Comportamiento:** al confirmar deshabilita el botón para evitar doble envío; usa clave idempotente.
