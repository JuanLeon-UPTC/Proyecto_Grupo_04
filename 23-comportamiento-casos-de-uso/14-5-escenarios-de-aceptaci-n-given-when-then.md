## 5. Escenarios de aceptación (Given/When/Then)

| ID | Dado | Cuando | Entonces |
|---|---|---|---|
| AC-01 | Cajero autenticado y dos productos activos de $3.000 y $2.500 | Registra 2 unidades del primero y 1 del segundo | Venta confirmada por COP 8.500 con dos líneas y usuario asociado |
| AC-02 | Una venta tiene 3 líneas | Se confirma | Total = suma exacta de las 3 líneas |
| AC-03 | Producto inactivo | Cajero intenta agregarlo | El sistema rechaza la línea y no cambia el total |
| AC-04 | Cantidad ingresada es 0 | Cajero agrega producto | Se muestra MSG-02 y no se agrega la línea |
| AC-05 | Precio de catálogo cambia después de una venta | Se consulta la venta anterior | Se conserva el precio histórico original |
| AC-06 | Venta confirmada | Falla persistencia de un detalle durante la transacción | No queda cabecera parcial ni descuento de inventario |
| AC-07 | Usuario cajero | Intenta consultar reporte global | Solo ve ventas propias del día |
| AC-08 | Periodo con ventas confirmadas y anuladas | Se genera reporte | Los totales excluyen las ventas anuladas |
| AC-09 | Fecha inicial posterior a final | Se consulta reporte | MSG-20 y no se ejecuta consulta inválida |
| AC-10 | Producto con ventas en 5 de los últimos 7 días, 21 unidades | Se genera sugerencia | Promedio 4,2 × 1,10 = 4,62; sugerencia 5 unidades |
| AC-11 | Producto con ventas en solo 2 días | Se genera sugerencia | MSG-30; no se presenta pronóstico numérico |
| AC-12 | Existen 4 productos activos con ventas | Se consulta rotación | Se presenta ranking y cuartil inferior |
| AC-13 | Solo hay 3 productos activos | Se consulta rotación | Se presenta ranking sin clasificación por cuartil |
| AC-14 | Producto con control de inventario habilitado y existencia 10 | Se confirma venta de 3 | Existencia queda en 7 |
| AC-15 | Existencia 2 | Se intenta registrar salida de 3 | MSG-41 y existencia permanece en 2 |
| AC-16 | Venta confirmada y no anulada | Administrador anula con motivo válido | Venta queda anulada y conserva registro original |
| AC-17 | Cajero autenticado | Intenta anular una venta | Operación denegada y no se modifica la venta |
| AC-18 | Reporte filtrado por 30 días | Se exporta CSV | El CSV contiene los mismos totales y filtros |
| AC-19 | Dos peticiones de confirmación con mismo token idempotente | Se procesan ambas | Solo se crea una venta |
| AC-20 | Usuario inactivo | Intenta iniciar sesión | Acceso denegado con mensaje definido en RF-002 |
