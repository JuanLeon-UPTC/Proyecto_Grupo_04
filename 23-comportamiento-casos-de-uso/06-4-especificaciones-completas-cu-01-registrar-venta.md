### CU-01 — Registrar venta

| Campo | Especificación |
|---|---|
| Alcance / nivel | Sistema de ventas / objetivo de usuario |
| Actor primario | Cajero autenticado |
| Interesados | Dueño (integridad), cajero (rapidez), cliente (detalle correcto), panadero (datos históricos) |
| Disparador | El cliente solicita productos y el cajero inicia una nueva venta. |
| Precondiciones | Cajero autenticado; al menos un producto disponible en catálogo. |
| Garantía mínima | No se registra una venta parcial si falla la confirmación. |
| Garantía de éxito | Venta persistida con ID único, líneas, total, fecha/hora, usuario y auditoría. |
| Pantallas | FP-01 Inicio de venta; FP-02 Confirmación de venta |
| Reglas | RN-01 a RN-08, RN-18, RN-20 |

**Escenario principal**

| Paso | Actor | Acción / respuesta del sistema |
|---:|---|---|
| 1 | Cajero | Selecciona «Nueva venta». |
| 2 | Sistema | Muestra catálogo de productos disponibles y buscador. |
| 3 | Cajero | Busca y selecciona un producto. |
| 4 | Sistema | Muestra nombre, precio vigente y disponibilidad. |
| 5 | Cajero | Ingresa cantidad entera positiva y agrega el producto. |
| 6 | Sistema | Incorpora la línea y recalcula el subtotal y total. |
| 7 | Cajero | Repite selección para cada producto solicitado. |
| 8 | Cajero | Selecciona el medio de pago informativo y pulsa «Confirmar venta». |
| 9 | Sistema | Valida líneas, disponibilidad y cantidades; calcula total definitivo. |
| 10 | Sistema | Persiste venta y detalles en una transacción atómica, registra auditoría y descuenta existencias cuando aplique. |
| 11 | Sistema | Muestra identificador, fecha/hora y total; ofrece vista imprimible. |

**Extensiones**
- 3a. Producto inexistente: el sistema informa «No se encontró el producto» y mantiene la venta sin cambios; vuelve al paso 3.
- 4a. Producto inactivo: no permite agregarlo y muestra «El producto no está disponible para la venta»; vuelve al paso 2.
- 5a. Cantidad no entera o menor que 1: muestra mensaje MSG-02; vuelve al paso 5.
- 6a. El cajero elimina una línea antes de confirmar: el sistema la retira y recalcula el total; vuelve al paso 7.
- 9a. Catálogo/precio cambió en otra sesión: el sistema actualiza el precio vigente y solicita reconfirmación; vuelve al paso 8.
- 10a. Falla la persistencia: revierte la transacción completa, no descuenta inventario y muestra «No se pudo registrar la venta. Intente nuevamente»; termina sin venta.
- 10b. Existencia insuficiente con control habilitado: informa el producto y existencia disponible; permite ajustar cantidad o cancelar; vuelve al paso 5.
- 11a. Impresora no disponible: la venta permanece confirmada y se ofrece reimpresión posterior.
