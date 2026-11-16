## 6. Matriz de trazabilidad

| Necesidad | Meta | HU | CU | RF | RN / RNF | Pantalla | Escenario |
|---|---|---|---|---|---|---|---|
| N-01 Registrar ventas confiables | G-01 Centralizar ventas | HU-01 | CU-01 | RF-005–008, RF-020 | RN-07, RN-08, RN-18; RNF-006 | FP-01, FP-02 | AC-01, AC-02, AC-06, AC-14 |
| N-02 Mantener catálogo actualizado | G-02 Catálogo consistente | HU-02 | CU-02 | RF-003, RF-004, RF-017, RF-021 | RN-03–RN-06 | FP-03, FP-04 | AC-03, AC-05 |
| N-03 Conocer ventas | G-03 Medir desempeño | HU-03 | CU-03, CU-08 | RF-009, RF-011, RF-012, RF-018 | RN-09–RN-12, RN-21, RN-25 | FP-05 | AC-07–AC-09, AC-18 |
| N-04 Planear producción | G-04 Estimar demanda | HU-04 | CU-04 | RF-013–RF-015 | RN-13–RN-15, RN-26–RN-28 | FP-06 | AC-10, AC-11 |
| N-05 Detectar baja rotación | G-05 Apoyar revisión del catálogo | HU-05 | CU-05 | RF-016, RF-017 | RN-16, RN-17, RN-29 | FP-07 | AC-12, AC-13 |
| N-06 Controlar existencias | G-06 Mejorar visibilidad de inventario | HU-06 | CU-06 | RF-008, RF-019, RF-020 | RN-18–RN-20 | FP-08, FP-09 | AC-14, AC-15 |
| N-07 Corregir errores con trazabilidad | G-07 Preservar integridad | HU-07 | CU-07 | RF-010, RF-014, RF-020 | RN-10, RN-14, RN-20, RN-24 | FP-10, FP-11 | AC-16, AC-17 |
| N-08 Compartir resultados | G-08 Facilitar análisis externo | HU-08 | CU-08 | RF-018 | RN-21 | FP-05–FP-07 | AC-18 |

### 6.1 Trazabilidad no funcional

| RNF | Requisitos relacionados | Verificación |
|---|---|---|
| RNF-001 | RF-003, RF-011 | Carga de catálogo y reportes |
| RNF-002 | RF-006, RF-007 | Carga de confirmación de venta |
| RNF-003 | RF-001 a RF-022 | Monitoreo mensual |
| RNF-004 | RF-001, RF-002, RF-021 | Inspección de almacenamiento de credenciales |
| RNF-005 | RF-001, RF-009, RF-010, RF-021 | Pruebas negativas por rol |
| RNF-006 | RF-006, RF-007, RF-008, RF-010 | Invariantes de transacción |
| RNF-007 | Persistencia de todos los RF | Simulacro de backup/restore |
| RNF-008 | RF-005, RF-006 | Prueba de tarea con cajeros |
| RNF-009 | Todas las pantallas FP | Matriz de navegadores |
| RNF-010 | RF-010, RF-019, RF-020 | Consulta de auditoría |
