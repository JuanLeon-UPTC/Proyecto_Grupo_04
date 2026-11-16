## 5. Requisitos funcionales (RF)

| ID | EARS | Requisito | Prioridad | Verificación |
|---|---|---|---|---|
| RF-001 | E | Cuando un usuario con credenciales válidas envíe el formulario de inicio de sesión, el sistema deberá autenticarlo y mostrar las opciones autorizadas para su rol. | Must | T |
| RF-002 | N | Si las credenciales son inválidas o la cuenta está inactiva, el sistema deberá denegar el acceso y mostrar `No fue posible iniciar sesión. Verifique sus datos.` | Must | T |
| RF-003 | E | Cuando el administrador registre un producto, el sistema deberá guardar código único, nombre, categoría, precio vigente y estado de disponibilidad. | Must | T |
| RF-004 | E | Cuando el administrador modifique el precio de un producto, el sistema deberá conservar el precio aplicado a las ventas históricas y usar el nuevo precio solo en ventas posteriores. | Must | T |
| RF-005 | E | Cuando el cajero seleccione un producto disponible e indique una cantidad entera positiva, el sistema deberá agregarlo al detalle de la venta con el precio vigente. | Must | T |
| RF-006 | E | Cuando el cajero confirme una venta con al menos un detalle válido, el sistema deberá generar un identificador único, registrar fecha/hora, usuario, medio de pago informativo, subtotal y total. | Must | T |
| RF-007 | E | Cuando se confirme una venta, el sistema deberá calcular el total como la suma de cantidad por precio unitario de cada detalle. | Must | T |
| RF-008 | E | Cuando se confirme una venta, el sistema deberá descontar del inventario la cantidad vendida si el control de existencias está habilitado para el producto. | Should | T |
| RF-009 | E | Cuando el cajero consulte las ventas del día, el sistema deberá mostrar únicamente las ventas registradas en la fecha local actual, salvo que el usuario tenga permiso de administración. | Must | T |
| RF-010 | E | Cuando el administrador autorice la anulación de una venta, el sistema deberá conservar el registro original, marcarlo como anulado y registrar motivo, usuario y fecha/hora de la anulación. | Must | T |
| RF-011 | E | Cuando el usuario consulte el reporte de ventas, el sistema deberá permitir filtrar por rango de fechas, producto y categoría. | Must | T |
| RF-012 | E | Cuando se genere un reporte de ventas, el sistema deberá presentar unidades vendidas, ingresos brutos y participación porcentual por producto. | Must | T |
| RF-013 | E | Cuando el panadero consulte la sugerencia de producción para una fecha, el sistema deberá calcular una cantidad recomendada por producto a partir de las ventas históricas disponibles. | Must | T |
| RF-014 | U | En todo cálculo de sugerencia de producción, el sistema deberá excluir ventas anuladas y productos inactivos. | Must | T |
| RF-015 | E | Cuando un producto no tenga histórico suficiente para el cálculo, el sistema deberá mostrar `Sin datos suficientes para estimar la producción.` y no presentar una cantidad como pronóstico confiable. | Must | T |
| RF-016 | E | Cuando el administrador consulte el análisis de rotación, el sistema deberá clasificar los productos según unidades vendidas en el periodo seleccionado. | Should | T |
| RF-017 | E | Cuando el administrador desactive un producto, el sistema deberá impedir que se agregue a nuevas ventas y conservar su historial. | Must | T |
| RF-018 | E | Cuando el usuario exporte un reporte, el sistema deberá generar un archivo CSV con los mismos filtros y totales visibles en pantalla. | Should | T |
| RF-019 | E | Cuando un usuario registre una entrada o ajuste de inventario, el sistema deberá guardar producto, cantidad, tipo de movimiento, motivo, usuario y fecha/hora. | Should | T |
| RF-020 | U | En toda operación de creación, modificación, anulación o ajuste de inventario, el sistema deberá registrar una entrada de auditoría con actor, acción, entidad, identificador y marca de tiempo. | Must | I/T |
| RF-021 | E | Cuando el administrador cree o desactive una cuenta, el sistema deberá asignar uno de los roles definidos y conservar el estado de la cuenta. | Should | T |
| RF-022 | E | Cuando el panadero registre la producción realizada, el sistema deberá guardar producto, cantidad, fecha y usuario responsable. | Could | T |
