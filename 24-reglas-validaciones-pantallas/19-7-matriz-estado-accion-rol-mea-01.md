## 7. Matriz estado × acción × rol (MEA-01)

Estados de venta: `BORRADOR`, `CONFIRMADA`, `ANULADA`. Los permisos se aplican en servidor.

| Acción | Cajero | Panadero | Administrador |
|---|---|---|---|
| Crear borrador | Permitido | No permitido | Permitido |
| Agregar detalle a borrador | Permitido | No permitido | Permitido |
| Confirmar venta | Permitido | No permitido | Permitido |
| Consultar venta propia | Permitido | No permitido | Permitido |
| Consultar cualquier venta | No permitido | No permitido | Permitido |
| Anular venta | No permitido | No permitido | Permitido con motivo |
| Administrar catálogo | No permitido | No permitido | Permitido |
| Consultar sugerencia producción | No permitido | Permitido | Permitido |
| Consultar rotación | No permitido | No permitido | Permitido |
| Consultar inventario | No permitido | Permitido | Permitido |
| Registrar movimiento inventario | No permitido | Permitido si autorizado | Permitido |
| Exportar reporte | No permitido | Permitido para sugerencias | Permitido |
| Gestionar usuarios | No permitido | No permitido | Permitido |

### Transiciones de venta

| Desde | Acción | Hacia | Condición |
|---|---|---|---|
| BORRADOR | Confirmar | CONFIRMADA | Al menos una línea válida; transacción completa |
| BORRADOR | Cancelar | BORRADOR descartado | Sin persistencia de venta |
| CONFIRMADA | Anular | ANULADA | Admin autorizado, motivo válido |
| ANULADA | Anular | Sin cambio | Rechazada: ya anulada |
| ANULADA | Confirmar | Sin cambio | Rechazada: no se reactiva una venta anulada |
