# Unidad 5 · Sesión 5 — Modelo de dominio y consistencia

Proyecto Grupo 04 — Sistema de registro de ventas (Panadería El Arte de Amar).

## Contenido del paquete
- `dominio/` — modelo de dominio en 2 vistas (Ventas; Producción y rotación), `.puml` + imagen.
- `glosario.md` — tabla de depuración de sustantivos y glosario (16 términos).
- `fichas-clase/` — ficha de las 3 clases más importantes: Producto, Venta, EvaluacionDeProducto.
- `matriz-consistencia.md` — 4 vistas, reglas RC-01 a RC-10, 5 hallazgos, 1 requisito nuevo.
- `preguntas-abiertas.md` — 4 preguntas con responsable y fecha.
- `CAMBIOS.md` — registro de versión.

## Taller simulado y casos instanciados

El taller con un interesado real, y los 5 casos instanciados, se **simularon** con los roles del acta (Cajera, Panadero principal, Propietario), con el permiso del docente de inventar interesados para este proyecto. No son datos de una panadería real.

### Caso 1 · Venta normal (CU-01, camino feliz)
Venta #001, 2026-11-10 09:15, cajera María. Líneas: "Pan de sal" × 3 @ $1.500, "Croissant" × 1 @ $2.500. `valorTotal` = $7.000.

### Caso 2 · Producto fuera del catálogo (CU-01, extensión 1a)
Venta #002, 2026-11-10 10:00. Línea: "Empanada especial" × 2 @ $3.000. El producto "Empanada especial" nace con `estado = PorClasificar`.

### Caso 3 · Clasificar el producto (CU-04)
El propietario Carlos clasifica "Empanada especial": `categoría = Salados`, `estado → Activo`. Las 2 unidades de la Venta #002 quedan asociadas al producto ya clasificado.

### Caso 4 · Ajustar producción (CU-02)
`CantidadDelDia` para "Pan de sal", 2026-11-11: `cantidadSugerida = 60`, el panadero Luis la ajusta a `cantidadConfirmada = 80`, antes de la 1:30 p. m.

### Caso 5 · Descontinuar un producto (CU-03, extensión 5a)
`ReporteSemanal` del 2026-11-03 al 2026-11-09. `EvaluacionDeProducto` de "Almojábana": `rotaciónÚltimas8Semanas = 12`, `marcadoRotaciónBaja = Sí`. El propietario Carlos registra `DecisionDeDescontinuar` el 2026-11-10, respaldada por esa evaluación. "Almojábana" pasa a `estado = Descontinuado`.

### Qué no cupo en estos 5 casos
- La fusión de nombre duplicado (CU-04, extensión 3b) no se ejerció — pendiente de probar con un caso 6 si se necesita más adelante.
- Intentar vender "Almojábana" ya Descontinuada (para probar `RF-NUEVO-01`) no se incluyó porque ese requisito nace justo de este modelado — es la prueba natural una vez `RF-NUEVO-01` se confirme.

## Multiplicidad validada con un interesado

Ver `glosario.md`, sección final: se validó `Producto "1" -- "0..1" DecisionDeDescontinuar` con el Propietario (simulado).
