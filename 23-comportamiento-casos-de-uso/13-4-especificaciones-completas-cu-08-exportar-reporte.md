### CU-08 — Exportar reporte

| Campo | Especificación |
|---|---|
| Actor primario | Dueño/administrador; panadero para reportes autorizados |
| Disparador | Usuario pulsa «Exportar CSV» desde un reporte. |
| Precondiciones | Reporte generado y permisos válidos. |
| Garantía de éxito | Archivo refleja los filtros y resultados visibles. |
| Pantallas | FP-05, FP-06 o FP-07 |
| Reglas | RN-11, RN-12, RN-21 |

**Escenario principal**: 1) usuario aplica filtros; 2) revisa resultados; 3) pulsa exportar; 4) sistema genera CSV UTF-8 con encabezados, moneda y filtros; 5) navegador descarga archivo; 6) sistema registra auditoría de exportación.

**Extensiones**: conjunto vacío (CSV con encabezados y cero filas); volumen superior a 50.000 filas (solicita acotar rango); fallo de generación (MSG-60, no descarga archivo corrupto).
