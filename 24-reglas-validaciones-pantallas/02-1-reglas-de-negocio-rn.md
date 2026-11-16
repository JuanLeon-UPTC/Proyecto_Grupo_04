## 1. Reglas de negocio (RN)

| ID | Regla | Motivo / requisito |
|---|---|---|
| RN-01 | El sistema manejará una sola sede comercial identificada como `SEDE-01`. | Alcance del negocio |
| RN-02 | La moneda de presentación y cálculo será COP; se almacenarán valores monetarios como enteros en pesos, sin coma flotante. | Integridad / supuesto |
| RN-03 | Cada producto tendrá código único, nombre, categoría, precio vigente y estado activo/inactivo. | RF-003 |
| RN-04 | El código de producto tendrá entre 3 y 20 caracteres alfanuméricos, guion permitido, sin espacios. | RF-003 |
| RN-05 | El precio de venta será mayor que cero y no superará COP 10.000.000 por unidad. | RF-003, supuesto |
| RN-06 | Un producto con ventas o movimientos históricos no podrá eliminarse físicamente; solo podrá desactivarse. | RF-017 |
| RN-07 | La confirmación de venta será atómica: cabecera, detalles, auditoría y movimientos de inventario se confirman juntos o ninguno. | RF-006, RF-008 |
| RN-08 | El total de venta será `Σ(cantidad × precio_unitario_aplicado)`; los valores se calculan en COP enteros. | RF-007 |
| RN-09 | Los reportes solo incluirán ventas en estado `CONFIRMADA`. | RF-011, RF-012 |
| RN-10 | Una venta anulada se conserva y queda excluida de reportes, rotación y sugerencias de producción. | RF-010, RF-014 |
| RN-11 | El rango de reportes incluirá ambas fechas (inicio y fin) y se interpretará en America/Bogota. | RF-011 |
| RN-12 | La participación porcentual será `ingreso_producto / ingreso_total_periodo × 100`; si el total es cero, se muestra 0 %. | RF-012 |
| RN-13 | La sugerencia se calcula por producto con promedio de unidades vendidas en días con ventas dentro de los últimos 7 días calendario completos, multiplicado por 1,10 y redondeado hacia arriba. | RF-013, supuesto |
| RN-14 | Los registros anulados y los productos inactivos se excluyen de todos los cálculos analíticos. | RF-014 |
| RN-15 | Para mostrar una sugerencia numérica deben existir ventas en al menos 3 días distintos del periodo de 7 días. | RF-015 |
| RN-16 | La clasificación «baja rotación» corresponde al cuartil inferior de unidades vendidas entre productos activos del periodo, con al menos 4 productos activos. | RF-016, supuesto |
| RN-17 | El sistema no descontinúa productos automáticamente; la recomendación solo inicia una revisión del administrador. | RF-016, alcance |
| RN-18 | Cuando el control de inventario esté habilitado, una venta reduce existencias en la misma transacción de confirmación. | RF-008 |
| RN-19 | Todo movimiento de inventario requiere tipo, cantidad positiva, motivo y usuario responsable. | RF-019 |
| RN-20 | Las anulaciones y ajustes deben generar auditoría inmutable desde la interfaz ordinaria. | RF-020 |
| RN-21 | La exportación respetará exactamente filtros, periodo, estados y orden aplicados en pantalla. | RF-018 |
| RN-22 | El sistema no procesa pagos; el medio de pago se almacena únicamente como dato informativo. | Alcance adoptado |
| RN-23 | El día operativo y los reportes se calculan con la zona horaria America/Bogota. | RNF-006 / supuesto |
| RN-24 | Las ventas confirmadas no se editan directamente; cualquier corrección se realiza mediante anulación y nueva venta. | Integridad / supuesto |
| RN-25 | El periodo de consulta máximo será de 365 días; el periodo inicial sugerido será de 30 días. | RNF-001 / supuesto |
| RN-26 | El histórico mínimo para sugerencia es 3 días con ventas dentro de los últimos 7 días calendario completos. | RF-015 |
| RN-27 | La sugerencia de producción es orientativa y requiere decisión del panadero. | RF-013 |
| RN-28 | Si el resultado de promedio es cero, la sugerencia será cero. | RN-13 |
| RN-29 | Los empates en el ranking de rotación se resolverán por nombre de producto ascendente. | RF-016 |
| RN-30 | El acceso de soporte técnico será temporal, autorizado por administrador y auditado. | RNF-005 |
