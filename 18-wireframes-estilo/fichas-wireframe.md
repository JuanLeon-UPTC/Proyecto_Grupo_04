# Fichas de wireframe anotado

**Nota sobre los bocetos:** se hizo una ronda de bocetos en papel (descrita, no escaneada) con el Propietario simulado antes de pasar a wireframe HTML, siguiendo el método de la sesión.

## WF-P01 · Registrar venta

- **Encabezado:** WF-P01, Registrar venta, rol Cajera, CU-01, v0.1
- **Fuente:** `wireframes/WF-P01.html`

| # | Elemento | Regla | Requisito |
|---|---|---|---|
| 1 | Selector de producto | Lista del catálogo + opción "Otro producto…" | RF-001, CU-01 1a |
| 2 | Campo cantidad | Numérico, mínimo 1 | RF-001 |
| 3 | Botón Agregar | Agrega línea y actualiza subtotal | RF-001 |
| 4 | Lista de líneas (tarjetas) | Una tarjeta por línea de venta | RF-001 |
| 5 | Total | Suma de todas las líneas | RF-001 |
| 6 | Marcar venta completa | Deshabilitado si no hay líneas (3a) | RF-003 |
| 7 | Confirmar pago | Dispara guardado (RF-001/RF-002) | RF-001, RF-002 |

**Hoja de estados**

| Estado | Disparador | Qué se muestra | Qué se conserva | Salida | Mensaje |
|---|---|---|---|---|---|
| Vacía | abrir pantalla / venta anterior confirmada | Formulario sin líneas | — | — | — |
| Con productos | agregar producto | Líneas + subtotal | Líneas agregadas | — | — |
| Venta vacía (error) | marcar completa sin líneas | Mismo estado, con aviso | Líneas (ninguna) | vuelve a "con productos" vacía | M-02 |
| Lista para cobrar | marcar completa con líneas | Total + confirmar | Líneas | — | — |
| Error de servicio | falla el guardado tras reintento | Aviso de error | Línea en pantalla, no guardada | vuelve a vacía tras anotar en cuaderno (fuera del sistema) | M-01 (reutilizado como aviso de error de guardado) |

## WF-P02 · Sugerencia del día

- **Encabezado:** WF-P02, Sugerencia del día, rol Panadero, CU-02, v0.1
- **Fuente:** `wireframes/WF-P02.html`

| # | Elemento | Regla | Requisito |
|---|---|---|---|
| 1 | Tabla de productos | Una fila por producto con 4+ semanas de datos | RF-004 |
| 2 | Columna "Sin datos suficientes" | Reemplaza la cantidad si aplica (2a) | RF-004 |
| 3 | Campo cantidad del día | Editable, prellenado con la sugerida | RF-005 |
| 4 | Confirmar cantidad del día | Deshabilitado después de la 1:30 p. m. | RF-005 |

**Hoja de estados**

| Estado | Disparador | Qué se muestra | Qué se conserva | Salida | Mensaje |
|---|---|---|---|---|---|
| Antes de confirmar | abrir pantalla | Tabla editable | — | — | — |
| Confirmada | confirmar antes de la 1:30 p. m. | Tabla de solo lectura | Cantidades confirmadas | — | — |
| Fuera de horario (error) | confirmar después de la 1:30 p. m. | Aviso, campos bloqueados | Última cantidad vigente | — | M-04 |

## WF-P03 · Reporte semanal de rotación

- **Encabezado:** WF-P03, Reporte semanal, rol Propietario, CU-03, v0.1
- **Fuente:** `wireframes/WF-P03.html`

| # | Elemento | Regla | Requisito |
|---|---|---|---|
| 1 | Tabla de rotación | Resalta filas marcadas de rotación baja | RF-006 |
| 2 | Botón Descontinuar | Solo visible en filas marcadas | RF-006 |

**Hoja de estados**

| Estado | Disparador | Qué se muestra | Qué se conserva | Salida | Mensaje |
|---|---|---|---|---|---|
| Con productos marcados | abrir pantalla, hay rotación baja | Tabla con filas resaltadas | — | — | — |
| Sin productos marcados | abrir pantalla, ninguno marcado (3a) | Nota "sin productos de rotación baja" | — | — | — |
| Decisión registrada | confirmar descontinuar | Aviso de éxito | Decisión + evaluación de respaldo | vuelve a la tabla sin ese producto | M-06 |

## Pendientes
- Capturas `.png` de los 3 wireframes: se generan abriendo cada `.html` en un navegador (doble clic) — no se automatizó en esta sesión.
