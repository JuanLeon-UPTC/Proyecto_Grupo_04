### CU-06 — Gestionar inventario

| Campo | Especificación |
|---|---|
| Actor primario | Administrador; panadero con permiso de inventario |
| Disparador | El usuario abre «Inventario» y registra entrada o ajuste. |
| Precondiciones | Sesión autorizada; producto existente. |
| Garantía de éxito | Movimiento guardado y existencia recalculada de forma atómica. |
| Pantallas | FP-08 Inventario; FP-09 Movimiento de inventario |
| Reglas | RN-18 a RN-20 |

**Escenario principal**: 1) elige producto; 2) sistema muestra existencia actual; 3) selecciona entrada, salida o ajuste; 4) ingresa cantidad y motivo; 5) sistema valida; 6) usuario confirma; 7) sistema guarda movimiento, actualiza existencia y audita; 8) muestra nueva existencia.

**Extensiones**: cantidad cero/negativa (MSG-40); salida mayor que existencia (MSG-41); motivo vacío (MSG-42); doble envío (idempotencia por token de operación, sin duplicar movimiento); producto inactivo (solo consulta de histórico, no nuevos movimientos ordinarios).
