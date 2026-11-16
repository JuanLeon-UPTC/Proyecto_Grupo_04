### CU-07 — Anular venta

| Campo | Especificación |
|---|---|
| Actor primario | Administrador/propietario |
| Disparador | Se detecta una venta que debe corregirse. |
| Precondiciones | Venta existente y no anulada; administrador autenticado. |
| Garantía mínima | Si la anulación falla, la venta conserva su estado anterior. |
| Garantía de éxito | Venta marcada anulada, motivo y responsable auditados; excluida de indicadores. |
| Pantallas | FP-10 Detalle de venta; FP-11 Anulación |
| Reglas | RN-10, RN-14, RN-20 |

**Escenario principal**: 1) administrador busca venta; 2) sistema muestra detalle; 3) administrador elige anular; 4) ingresa motivo de al menos 10 caracteres; 5) confirma; 6) sistema marca anulada en transacción, registra actor/fecha/motivo y revierte inventario si el descuento original se había aplicado; 7) muestra confirmación.

**Extensiones**: venta inexistente (MSG-50); venta ya anulada (MSG-51); motivo insuficiente (MSG-52); error al actualizar inventario (reversión total de la operación); cajero intenta anular (403, sin cambio).
