# Catálogo de mensajes (20)

Amplía el catálogo de la Sesión 2 (M-01 a M-08) con los errores de campo de las 3 pantallas críticas.

| ID | Pantalla | Disparador | Texto | Tipo | Regla / requisito |
|---|---|---|---|---|---|
| M-01 | P-01 | Agregar un producto Descontinuado | "Este producto ya no está disponible." | Error | RF-007 |
| M-02 | P-01 | Marcar venta completa sin productos | "Agrega al menos un producto para continuar." | Error | RF-003 |
| M-03 | P-01 | Venta guardada con éxito | "Venta registrada." | Éxito | RF-001 |
| M-04 | P-02 | Confirmar después de la 1:30 p. m. | "Ya pasó el horario de ajuste. Queda la última cantidad vigente." | Advertencia | RF-005 |
| M-05 | P-00 | Credencial inválida | "Rol o clave incorrectos." | Error | Transversal |
| M-06 | P-03 | Decisión de descontinuar registrada | "Decisión registrada con el reporte de respaldo." | Éxito | RF-006 |
| M-07 | P-04 | No hay productos pendientes | "No hay productos por clasificar." | Información | CU-04, 1a |
| M-08 | P-04 | Nombre duplicado al clasificar | "Ya existe un producto con ese nombre. ¿Fusionar las ventas?" | Confirmación | RF-009 |
| M-09 | P-01 | Agregar sin elegir producto | "Selecciona un producto antes de agregar." | Error | RF-001 |
| M-10 | P-01 | Cantidad en 0 o vacía | "La cantidad debe ser mayor a 0." | Error | RF-001 |
| M-11 | P-01 | Falla el primer intento de guardado | "No se pudo guardar. Reintentando…" | Información | RF-002 |
| M-12 | P-01 | Falla también el reintento (servicio) | "No se pudo guardar la venta. Anótala en el cuaderno de contingencia." | Error (servicio) | RF-002 |
| M-13 | P-02 | Cantidad del día no numérica | "Ingresa un número válido." | Error | CU-02, 4b |
| M-14 | P-02 | Cantidad del día negativa | "La cantidad no puede ser negativa." | Error | CU-02, 4b |
| M-15 | P-02 | Cantidad del día guardada | "Cantidad del día guardada." | Éxito | RF-005 |
| M-16 | P-03 | Ningún producto marcado esta semana | "No hay productos de rotación baja esta semana." | Información | RF-006, 3a |
| M-17 | P-04 | Nombre vacío al clasificar | "Ingresa un nombre para el producto." | Error | RF-008 |
| M-18 | P-04 | Categoría vacía al clasificar | "Ingresa una categoría para el producto." | Error | RF-008 |
| M-19 | P-04 | Producto clasificado con éxito | "Producto clasificado correctamente." | Éxito | RF-008 |
| M-20 | P-00 | Ningún rol seleccionado | "Selecciona un rol para continuar." | Error | Transversal |

**Nota sobre lo que no se incluye:** la guía pide "al menos un correo automático completo". Este proyecto **no tiene ninguna funcionalidad de correo** en ningún caso de uso (no hay notificaciones por correo en CU-01 a CU-04, a diferencia del ejemplo PQRS). Se declara explícitamente que no aplica, en vez de inventar una funcionalidad de correo que ningún CU pidió.
