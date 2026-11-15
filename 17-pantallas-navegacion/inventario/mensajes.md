# Catálogo de mensajes

| ID | Pantalla | Disparador | Texto | Tipo | Regla / requisito |
|---|---|---|---|---|---|
| M-01 | P-01 | Agregar un producto Descontinuado | "Este producto ya no está disponible." | Error | RF-007 |
| M-02 | P-01 | Marcar venta completa sin productos | "Agrega al menos un producto para continuar." | Error | RF-003 (CU-01, 3a) |
| M-03 | P-01 | Venta guardada con éxito | "Venta registrada." | Éxito | RF-001 |
| M-04 | P-02 | Confirmar después de la 1:30 p. m. | "Ya pasó el horario de ajuste. Queda la última cantidad vigente." | Advertencia | RF-005 (CU-02, 5a) |
| M-05 | P-00 | Credencial inválida | "Rol o clave incorrectos." | Error | Transversal, fuera de los 4 CU (supuesto de diseño) |
| M-06 | P-03 | Decisión de descontinuar registrada | "Decisión registrada con el reporte de respaldo." | Éxito | RF-006 (CU-03, 5a) |
| M-07 | P-04 | No hay productos pendientes | "No hay productos por clasificar." | Información | CU-04, extensión 1a |
| M-08 | P-04 | Nombre duplicado al clasificar | "Ya existe un producto con ese nombre. ¿Fusionar las ventas?" | Confirmación | CU-04, extensión 3b |

8 mensajes identificados para esta sesión (el catálogo completo, con al menos 20, se arma en la Sesión 3 junto con los wireframes).
