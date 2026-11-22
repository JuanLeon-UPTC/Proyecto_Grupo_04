# Ficha de clase · Producto

**Versión:** 1.0 · 2026-11-15

## Definición
Artículo que la panadería vende o produce. Es la clase más compartida del dominio: aparece en las dos vistas porque la tocan los 4 casos de uso.

## Atributos
| Atributo | Tipo de negocio | Descripción |
|---|---|---|
| nombre | Texto | Nombre con el que se identifica en catálogo, ventas y reportes |
| categoría | Texto | Agrupación del producto (p. ej. "Panes", "Tortas") |
| precioActual | Dinero | Precio vigente hoy; no es el precio histórico de una venta ya hecha |
| estado | {PorClasificar, Activo, Descontinuado} | Ver Sesión 4 (máquina de estados) |

## Relaciones
- `Producto "1" -- "0..*" LineaVenta` — aparece en (Vista 1)
- `Producto "1" -- "0..*" CantidadDelDia` — tiene (Vista 2)
- `Producto "1" -- "0..*" EvaluacionDeProducto` — es evaluado en (Vista 2)
- `Producto "1" -- "0..1" DecisionDeDescontinuar` — tiene (Vista 2)

## Reglas de negocio
- RN-02: una `DecisionDeDescontinuar` solo existe si `estado = Descontinuado`.
- No existe transición de vuelta a `Activo` (decisión de alcance, ver `preguntas-abiertas.md`).

## Casos de uso que la tocan
- CU-01 (lee: aparece en líneas de venta; no se puede vender si está Descontinuado — por confirmar como regla explícita, ver hallazgo H-03 en la matriz)
- CU-02 (lee: solo productos Activo reciben sugerencia)
- CU-03 (lee/actualiza: se evalúa su rotación; su estado cambia a Descontinuado)
- CU-04 (crea/actualiza: nace PorClasificar, pasa a Activo)

## Estados (Sesión 4)
PorClasificar → Activo → Descontinuado. Ver `14-estados/diagramas/estados_producto.puml`.

## Preguntas abiertas
- ¿El sistema debe impedir explícitamente vender un producto Descontinuado, o basta con que ya no aparezca en el catálogo visible? (hallazgo H-03, ver matriz de consistencia)
