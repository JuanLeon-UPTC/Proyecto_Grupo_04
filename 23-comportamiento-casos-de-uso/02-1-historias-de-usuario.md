## 1. Historias de usuario

| ID | Prioridad | Historia | Criterios resumidos |
|---|---|---|---|
| HU-01 | Must | Como cajero, quiero registrar una venta con varios productos para dejar constancia exacta de lo vendido. | Venta confirmada con ID; total coincide con sus líneas; usuario y fecha quedan asociados. |
| HU-02 | Must | Como administrador, quiero mantener el catálogo y los precios para que el cajero use información vigente. | Código único; precio histórico inalterado; inactivos no se venden. |
| HU-03 | Must | Como dueño, quiero consultar ventas por periodo y producto para conocer el desempeño del negocio. | Filtros combinables; unidades, ingresos y participación coinciden con datos de ventas válidas. |
| HU-04 | Must | Como panadero, quiero obtener una sugerencia de producción para planear la jornada con base en la demanda. | Promedio de 7 días válidos; factor 1,10; sin histórico suficiente no se inventa estimación. |
| HU-05 | Should | Como administrador, quiero analizar la rotación para identificar productos que requieren revisión. | Ranking y cuartil inferior; no se descontinúa automáticamente ningún producto. |
| HU-06 | Should | Como administrador, quiero controlar existencias y ajustes para conocer disponibilidad operativa. | Cada movimiento guarda cantidad, motivo, responsable y fecha. |
| HU-07 | Must | Como dueño, quiero anular una venta con motivo y autorización para corregir errores sin perder trazabilidad. | Venta queda anulada, no se borra y se excluye de reportes/estimaciones. |
| HU-08 | Should | Como usuario autorizado, quiero exportar reportes para compartir o archivar resultados. | CSV respeta filtros, columnas y totales mostrados. |
