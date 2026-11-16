# Glosario del dominio · Unidad 5, Sesión 5

Proyecto Grupo 04 — Sistema de registro de ventas (Panadería El Arte de Amar)

## Tabla de depuración de sustantivos

Sustantivos candidatos encontrados al leer CU-01 a CU-04, con su destino en el modelo.

| Candidato | Fuente | Destino | Dónde queda |
|---|---|---|---|
| Cajera | CU-01 | Clase (subclase de Empleado) | Vista 1 |
| Panadero principal | CU-02 | Clase (subclase de Empleado) | Vista 2 |
| Propietario | CU-03, CU-04 | Clase (subclase de Empleado) | Vista 2 |
| Cliente | CU-01 a CU-04 (interesado) | Descartado | No interactúa directo con el sistema (no envía ni recibe mensajes en ninguna DSE); es interesado, no concepto que el sistema gestione |
| Producto | CU-01 a CU-04 | Clase | Vista 1 y Vista 2 (compartida) |
| Venta | CU-01 | Clase | Vista 1 |
| "Venta en curso" | CU-01 | Descartado (sinónimo) | Es la misma Venta antes de guardarse; no se modela estado propio de Venta |
| Línea (de venta) | CU-01 | Clase | Vista 1 (LineaVenta) |
| Subtotal | CU-01 | Descartado | Es un cálculo en pantalla (suma de líneas), no un dato persistido |
| Catálogo | CU-01 a CU-04 | Descartado | Es el conjunto de instancias de Producto, no una clase propia |
| "Otro producto" | CU-01, extensión 1a | Valor de enumeración | Producto.estado = PorClasificar |
| Total (del día / de la venta) | CU-01 | Atributo | Venta.valorTotal |
| Pago | CU-01 | Paso del caso de uso | No se modela un objeto "Pago"; solo la confirmación del paso 5 |
| Sistema | CU-01 a CU-04 | Descartado | Es el sistema mismo (caja negra en las DSE), no un concepto de negocio |
| Cuaderno de contingencia | CU-01, extensión 6a | Fuera de alcance | Artefacto físico externo al sistema (garantía mínima lo da por fuera) |
| Fecha / hora | CU-01 a CU-04 | Atributo | En Venta, CantidadDelDia, ReporteSemanal, DecisionDeDescontinuar |
| Pantalla de sugerencia del día | CU-02 | Descartado (diseño/interfaz) | Pertenece a la Unidad 6, no al dominio |
| Cantidad sugerida | CU-02 | Atributo | CantidadDelDia.cantidadSugerida |
| Promedio de ventas (4 semanas) | CU-02 | Regla de negocio | Cálculo para sugerir cantidad; no es clase ni atributo persistido |
| Cantidad del día | CU-02 | Clase | Vista 2 |
| Horario (1:30 p. m.) | CU-02, extensión 5a | Regla de negocio (constante) | No se modela como clase |
| Reporte semanal de rotación | CU-03 | Clase | Vista 2 (ReporteSemanal) |
| Rotación | CU-03 | Atributo | EvaluacionDeProducto.rotaciónÚltimas8Semanas |
| Promedio de los demás productos | CU-03 | Regla de negocio | Parte del cálculo del umbral de 25 %; no es clase |
| Nota | CU-03 | Atributo | EvaluacionDeProducto.nota |
| Decisión (de descontinuar) | CU-03, extensión 5a | Clase | Vista 2 (DecisionDeDescontinuar) |
| Lista de pendientes por clasificar | CU-04 | Descartado | Es una consulta/filtro sobre Producto (estado = PorClasificar), no una clase |
| Nombre / categoría | CU-04 | Atributo | Producto.nombre, Producto.categoría |
| Fusión (de productos duplicados) | CU-04, extensión 3b | Paso del caso de uso | No se modela como clase propia |

## Glosario de términos (16 términos)

| # | Término | Definición de negocio | Sinónimos prohibidos | Ejemplo válido | Ejemplo inválido | Regla | Fuente |
|---|---|---|---|---|---|---|---|
| 1 | Empleado | Persona que trabaja en la panadería y usa el sistema bajo alguno de los tres roles del acta. | "usuario", "staff" | Una persona dada de alta como Cajera | Un cliente que compra pan | — | Acta de constitución |
| 2 | Cajera | Empleado que registra ventas en caja. | "vendedora" | Quien atiende el mostrador | El propietario cuando revisa el reporte | — | CU-01 |
| 3 | Panadero principal | Empleado que ajusta la producción del día. | "el panadero" (sin "principal") | Quien confirma la cantidad del día | Un ayudante de panadería sin ese rol | — | CU-02 |
| 4 | Propietario | Empleado dueño del negocio, revisa rotación y decide descontinuar productos. | "dueño", "administrador" | Quien ve el reporte semanal | La cajera | — | CU-03, CU-04 |
| 5 | Producto | Artículo que la panadería vende o produce, con un estado de clasificación. | "artículo", "ítem" | "Pan de sal" | Una venta individual | RN-02 | CU-01 |
| 6 | Catálogo | Conjunto de todos los productos del negocio, clasificados o no. | "inventario" | Todos los Producto existentes | Una sola venta | — | CU-01 |
| 7 | Venta | Transacción de una o más líneas que la cajera registra y cobra. | "transacción", "ticket" | Una venta de 3 productos a un cliente | Un producto suelto sin comprador | RN-01 | CU-01 |
| 8 | Línea de venta | Un producto y su cantidad dentro de una venta, con el precio congelado al momento de vender. | "ítem de venta", "renglón" | "2 unidades de Pan de sal a $2.000" | El total de la venta completa | — | CU-01 |
| 9 | Clasificar un producto | Darle nombre y categoría a un producto que entró como "Otro producto". | "catalogar", "registrar" (a secas) | Nombrar "Torta de chocolate" a un producto ad-hoc | Cambiar el precio de un producto ya activo | — | CU-04 |
| 10 | Cantidad del día | Cantidad de un producto que se confirma producir hoy, con su sugerencia de referencia. | "producción del día" | 80 unidades de Pan de sal para hoy | El total vendido hoy | — | CU-02 |
| 11 | Cantidad sugerida | Cantidad que el sistema propone producir, calculada del historial de ventas. | "recomendación" | 60 unidades sugeridas para un jueves | Una cantidad que el panadero inventó | — | CU-02 |
| 12 | Reporte semanal de rotación | Documento que el propietario revisa cada semana con la rotación de cada producto. | "informe de ventas" | El reporte del 10 al 16 de noviembre | Una venta individual | — | CU-03 |
| 13 | Rotación | Qué tanto se vendió un producto en las últimas 8 semanas frente al promedio de los demás. | "popularidad" | 15 % del promedio de los demás | El precio del producto | — | CU-03 |
| 14 | Rotación baja | Marca que recibe un producto que vendió menos del 25 % del promedio de los demás, 4 semanas seguidas. | "producto malo" | "Almojábana" marcada esta semana | Un producto nuevo sin 4 semanas de datos | — | CU-03 |
| 15 | Descontinuar | Decisión del propietario de dejar de ofrecer un producto marcado de rotación baja. | "eliminar", "borrar" | Descontinuar "Almojábana" con su reporte de respaldo | Quitar un producto del catálogo sin reporte que lo respalde | RN-02 | CU-03 |
| 16 | Estado del producto | Situación en la que está un producto: PorClasificar, Activo o Descontinuado. | "status", "bandera" | Activo | "en oferta" (eso es un dato, no un estado) | — | Sesión 4 (máquina de estados) |

## Multiplicidad validada y pregunta abierta

- **Multiplicidad validada (simulado con el Propietario, interesado invertido según permiso del docente):** `Producto "1" -- "0..1" DecisionDeDescontinuar`. Se preguntó "¿un producto descontinuado puede tener más de una decisión registrada, por ejemplo si se reconsidera?" El propietario respondió que no: una vez descontinuado, la decisión es definitiva (no hay flujo de reconsideración en ningún CU), así que la multiplicidad queda en `0..1`, nunca `0..*`.
- **Pregunta abierta:** ¿Debe el sistema permitir reactivar un producto descontinuado? Ninguna historia de usuario lo pide hoy. Responsable: Propietario. Fecha sugerida: antes de cerrar la Unidad 7 (SRS), por si se vuelve un requisito nuevo.
