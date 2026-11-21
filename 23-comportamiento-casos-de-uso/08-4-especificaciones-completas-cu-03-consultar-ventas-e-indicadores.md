### CU-03 — Consultar ventas e indicadores

| Campo | Especificación |
|---|---|
| Actor primario | Dueño/administrador; cajero consulta solo ventas propias del día |
| Disparador | El usuario abre «Reportes de ventas». |
| Precondiciones | Usuario autenticado y con permiso. |
| Garantía de éxito | Resultados calculados sobre ventas confirmadas no anuladas y filtros seleccionados. |
| Pantallas | FP-05 Reporte de ventas |
| Reglas | RN-09 a RN-12, RN-14 |

**Escenario principal**

| Paso | Actor | Acción / respuesta |
|---:|---|---|
| 1 | Usuario | Abre reportes. |
| 2 | Sistema | Propone últimos 30 días como periodo inicial. |
| 3 | Usuario | Define fecha inicial/final y filtros opcionales. |
| 4 | Sistema | Valida rango y permisos. |
| 5 | Sistema | Consulta ventas válidas y agrega cantidades e ingresos por producto/categoría. |
| 6 | Sistema | Muestra tabla, total general, unidades y participación porcentual. |
| 7 | Usuario | Ordena o cambia filtros. |
| 8 | Sistema | Actualiza resultados con los mismos criterios. |

**Extensiones**
- 3a. Fecha inicial posterior a fecha final: MSG-20 y retorno al paso 3.
- 3b. Periodo superior a 365 días: MSG-21 y retorno al paso 3.
- 5a. No existen ventas en el periodo: tabla vacía y total COP 0; no es error.
- 5b. Usuario cajero intenta consultar ventas ajenas o fechas anteriores: el servidor restringe la consulta a sus ventas del día.
