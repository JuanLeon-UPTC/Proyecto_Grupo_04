## 4. Validaciones de campos y mensajes

| Código | Campo | Regla de validación | Mensaje literal |
|---|---|---|
| V-01 | Usuario | Obligatorio, 3–60 caracteres | `Ingrese su usuario.` |
| V-02 | Contraseña | Obligatoria, 8–72 caracteres al escribir/cambiar | `Ingrese una contraseña válida.` |
| V-03 | Código producto | Obligatorio, patrón `^[A-Z0-9-]{3,20}$`, único | `El código debe tener entre 3 y 20 caracteres y no estar registrado.` |
| V-04 | Nombre producto | Obligatorio, 2–80 caracteres; se recortan espacios externos | `El nombre debe tener entre 2 y 80 caracteres.` |
| V-05 | Categoría | Obligatoria, 2–40 caracteres | `Seleccione una categoría válida.` |
| V-06 | Precio | Entero COP entre 1 y 10.000.000 | `Ingrese un precio entre $1 y $10.000.000 COP.` |
| V-07 | Cantidad de venta | Entero entre 1 y 999 por línea | `La cantidad debe ser un número entero entre 1 y 999.` |
| V-08 | Medio de pago | Uno de EFECTIVO, TARJETA, TRANSFERENCIA, OTRO | `Seleccione un medio de pago.` |
| V-09 | Fecha inicial/final | Ambas válidas; inicio ≤ fin; rango ≤365 días | `Revise el rango de fechas seleccionado.` |
| V-10 | Motivo anulación | Obligatorio, 10–250 caracteres | `Describa el motivo de la anulación (10 a 250 caracteres).` |
| V-11 | Motivo ajuste | Obligatorio, 10–250 caracteres | `Describa el motivo del ajuste (10 a 250 caracteres).` |
| V-12 | Cantidad movimiento | Entero positivo entre 1 y 10.000 | `La cantidad debe ser un entero entre 1 y 10.000.` |
| V-13 | Existencia | Salida no puede superar existencia disponible | `La cantidad solicitada supera la existencia disponible.` |
| V-14 | Estado producto | Solo ACTIVO permite nuevas ventas | `El producto no está disponible para la venta.` |
| V-15 | Exportación | Máximo 50.000 filas por archivo | `El reporte supera 50.000 filas. Reduzca el rango de fechas.` |

### Normalizaciones
1. Recortar espacios iniciales/finales de usuario, código, nombre y motivos.
2. Convertir el código de producto a mayúsculas antes de comprobar unicidad.
3. Colapsar secuencias de espacios internos en el nombre del producto.
4. No modificar el texto del motivo más allá de recortar extremos.
5. Interpretar importes como enteros COP; no aceptar separadores decimales.
6. Fechas recibidas como `YYYY-MM-DD`; se interpretan en America/Bogota.
