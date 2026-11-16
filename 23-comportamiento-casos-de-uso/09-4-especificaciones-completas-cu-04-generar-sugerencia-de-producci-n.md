### CU-04 — Generar sugerencia de producción

| Campo | Especificación |
|---|---|
| Actor primario | Panadero |
| Disparador | El panadero abre «Plan de producción». |
| Precondiciones | Usuario autenticado; fecha de consulta válida. |
| Garantía de éxito | Sugerencia calculada con ventas válidas, fórmula y periodo visibles. |
| Pantallas | FP-06 Sugerencia de producción |
| Reglas | RN-13 a RN-17 |

**Escenario principal**

| Paso | Actor | Acción / respuesta |
|---:|---|---|
| 1 | Panadero | Abre plan de producción y selecciona fecha objetivo. |
| 2 | Sistema | Recupera ventas no anuladas de los 7 días anteriores disponibles. |
| 3 | Sistema | Cuenta días con ventas registradas por producto. |
| 4 | Sistema | Si existen al menos 3 días con ventas, calcula promedio diario × 1,10 y redondea hacia arriba. |
| 5 | Sistema | Muestra producto, unidades vendidas, promedio, factor, cantidad sugerida y advertencia de revisión humana. |
| 6 | Panadero | Consulta la recomendación y decide la cantidad real a producir. |

**Extensiones**
- 3a. Menos de 3 días con ventas: muestra MSG-30 y no presenta cantidad pronosticada.
- 2a. Producto inactivo: se excluye del cálculo.
- 2b. Venta anulada: se excluye del cálculo.
- 4a. Resultado cero: sugerencia 0, sin inventar demanda.
- 5a. No hay datos en el rango: mensaje de ausencia de histórico y enlace a reportes.
