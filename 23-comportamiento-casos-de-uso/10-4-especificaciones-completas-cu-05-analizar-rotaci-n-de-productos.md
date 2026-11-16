### CU-05 — Analizar rotación de productos

| Campo | Especificación |
|---|---|
| Actor primario | Dueño/administrador |
| Disparador | El usuario abre «Rotación». |
| Precondiciones | Usuario autorizado y rango válido. |
| Garantía de éxito | Ranking calculado sin ventas anuladas. |
| Pantallas | FP-07 Análisis de rotación |
| Reglas | RN-09, RN-14, RN-16, RN-17 |

**Escenario principal**: 1) abre análisis; 2) sistema propone 30 días; 3) usuario selecciona rango; 4) sistema cuenta unidades por producto activo; 5) ordena descendentemente; 6) calcula cuartil inferior si hay al menos cuatro productos; 7) muestra etiqueta «Revisar baja rotación» sin desactivar automáticamente.

**Extensiones**: rango inválido (MSG-20); menos de cuatro productos activos (mostrar ranking sin cuartil); empates (orden secundario alfabético por nombre); ausencia total de ventas (ranking con ceros y aviso).
