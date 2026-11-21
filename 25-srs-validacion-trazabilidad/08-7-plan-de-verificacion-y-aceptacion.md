## 7. Plan de verificación y aceptación

| ID de prueba | Requisito / caso | Tipo | Datos | Resultado esperado |
|---|---|---|---|---|
| PT-01 | RF-001, RF-002 | Seguridad | Usuario activo/inactivo y credenciales erróneas | Solo el usuario activo válido ingresa |
| PT-02 | CU-01, RF-005–007 | Funcional | Venta con 1, 5 y 10 líneas | Persistencia atómica y total exacto |
| PT-03 | RF-004 | Regresión | Venta anterior y cambio de precio | Histórico mantiene precio aplicado |
| PT-04 | RF-010, CU-07 | Seguridad/funcional | Anulación por cajero y administrador | Cajero bloqueado; admin con motivo puede anular |
| PT-05 | RF-011, RF-012 | Funcional | Ventas confirmadas, anuladas y vacías | Agregados exactos y exclusión de anuladas |
| PT-06 | RF-013–015 | Cálculo | 2, 3 y 5 días con ventas | Umbral y redondeo correctos |
| PT-07 | RF-016 | Cálculo | 3, 4 y 8 productos activos | Cuartil aplicado solo cuando corresponde |
| PT-08 | RF-008, RF-019 | Integridad | Entrada, salida, venta y anulación | Existencias consistentes y no negativas |
| PT-09 | RF-018 | Exportación | Reporte con filtros | CSV coincide con pantalla |
| PT-10 | RNF-001, RNF-002 | Rendimiento | 10 usuarios concurrentes | Umbrales cumplidos |
| PT-11 | RNF-004, RNF-005 | Seguridad | Intentos de acceso cruzado | Hash seguro y permisos servidor |
| PT-12 | RNF-007 | Recuperación | Backup diario y restauración | RPO/RTO definidos cumplidos |
