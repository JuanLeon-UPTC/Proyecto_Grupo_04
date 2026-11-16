# Ficha de pantalla con reglas · P-01 Registrar venta

## A. Identificación
- Pantalla: P-01, Registrar venta
- Rol: Cajera
- Caso de uso: CU-01
- Versión: 0.1

## B. Campos
| Campo | Tipo de dato | Obligatorio |
|---|---|---|
| producto | selección (catálogo) | Sí |
| cantidad | número entero | Sí |

## C. Normalizaciones
- `cantidad`: se descarta cualquier parte decimal antes de validar (se vende por unidad, no por fracción).

## D. Reglas por campo

| ID | Campo | Tipo | Cuándo aplica | Qué comprueba | Mensaje | Ejemplo válido | Ejemplo inválido |
|---|---|---|---|---|---|---|---|
| R-01 | producto | obligatorio | al agregar | que haya un producto seleccionado | M-09 "Selecciona un producto antes de agregar." | "Pan de sal" | "" (vacío) |
| R-02 | producto | no-descontinuado | al agregar | que el producto no tenga estado Descontinuado | M-01 "Este producto ya no está disponible." | "Pan de sal" (Activo) | "Torta de chocolate" (Descontinuado) |
| R-03 | cantidad | obligatorio | al agregar | que haya un valor de cantidad | M-10 "La cantidad debe ser mayor a 0." | "2" | "" (vacío) |
| R-04 | cantidad | entero-positivo | al agregar | que sea un entero ≥ 1 | M-10 "La cantidad debe ser mayor a 0." | "2" | "0", "-1", "1.5" |

## E. Dependencias
R-02 depende del catálogo (`datos/datos.js`): el estado de cada producto puede cambiar (CU-03, CU-04), así que la regla consulta el dato en vivo, no un valor fijo.

## F. Política de validación
Validación al momento de agregar la línea (no se espera a confirmar el pago): cada regla que falla bloquea solo esa acción y muestra su mensaje junto al campo.

## G. Estados y acciones
Ver `18-wireframes-estilo/fichas-wireframe.md`, hoja de estados de WF-P01 (vacía, con productos, lista para cobrar, error de servicio).

## H. Cálculos
- `subtotalLinea = cantidad × precioUnitarioAlMomento`
- `total = suma de subtotalLinea de todas las líneas`

**Casos resueltos:**
1. Pan de sal x2 a $1.500 → subtotal $3.000
2. Croissant x1 a $2.500 → subtotal $2.500; total de la venta = $5.500
3. **Caso frontera:** cantidad = 1 (el mínimo permitido por R-04) → subtotal = precioUnitarioAlMomento, sin redondeos

## I. Parámetros
- Cantidad mínima: 1 (no configurable en este prototipo)

## J. Trazabilidad
RF-001, RF-002, RF-003, RF-007 · CU-01 · HU-01
