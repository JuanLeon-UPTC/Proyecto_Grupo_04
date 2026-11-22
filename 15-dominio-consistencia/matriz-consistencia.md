# Matriz de consistencia entre modelos · Unidad 5, Sesión 5

Proyecto Grupo 04 — Sistema de registro de ventas. Verifica que los 5 modelos (casos de uso, actividades, secuencia, estados, dominio) cuenten la misma historia.

Símbolos: ✓ cumple · ✗ hueco · ○ no aplica (justificado) · ◐ parcial

## Vista 1 · Por caso de uso

| CU | Modelo de dominio | Actividad | Secuencia | Estados | Cobertura |
|---|---|---|---|---|---|
| CU-01 Registrar una venta | Venta, LineaVenta, Producto | ✓ | ✓ | Producto nace/se usa | ✓ |
| CU-02 Ajustar cantidad sugerida | CantidadDelDia, Producto | ✓ | ✓ | ○ (no cambia estado) | ✓ |
| CU-03 Revisar reporte de rotación | ReporteSemanal, EvaluacionDeProducto, DecisionDeDescontinuar, Producto | ✓ | ✓ | ✓ (dispara Activo→Descontinuado) | ✓ |
| CU-04 Clasificar producto | Producto (transición PorClasificar→Activo) | ✗ | ✗ | ✓ | ◐ |

**Hallazgo H-01:** CU-04 no tiene su propio diagrama de actividad ni de secuencia (solo el texto fully dressed y la máquina de estados). **Decisión:** aplazar — CU-04 es una acción simple de una sola pantalla; se construyen solo si el equipo nota falta de claridad al implementarlo. No bloquea el cierre de la Sesión 5.

## Vista 2 · Por requisito (garantías de los CU, a falta del SRS de Unidad 4)

| Garantía / regla | CU de origen | Clase del dominio | Diagrama que la muestra |
|---|---|---|---|
| Una venta nunca queda a medias (RN-01) | CU-01 | Venta, LineaVenta | actividad_CU_01, secuencia_CU_01 |
| Nunca se usa una cantidad no guardada (CU-02, garantía mínima) | CU-02 | CantidadDelDia | actividad_CU_02, secuencia_CU_02 |
| Toda rotación baja muestra sus 8 semanas de respaldo (RN-02) | CU-03 | EvaluacionDeProducto, DecisionDeDescontinuar | actividad_CU_03, secuencia_CU_03, vista2_produccion_rotacion |
| Clasificar no pierde ni duplica ventas previas | CU-04 | Producto, LineaVenta | (solo texto de CU-04; sin diagrama, ver H-01) |

**Hallazgo H-02:** no existe un documento de requisitos funcionales/no funcionales formal (RF/RNF) fuera de las garantías de cada CU — eso es contenido de la Unidad 4, que el equipo no ha abordado todavía. **Decisión:** diferir a cuando se trabaje la Unidad 4; no se inventa un SRS aquí.

## Vista 3 · Por clase

| Clase | Vista | CU que la crea | CU que la lee | CU que la actualiza |
|---|---|---|---|---|
| Empleado / Cajera / Panadero / Propietario | 1 y 2 | — (datos del equipo, fuera de los 4 CU) | CU-01 a CU-04 | — |
| Producto | 1 y 2 | CU-01 (1a), CU-04 | CU-01, CU-02, CU-03 | CU-04 (estado), CU-03 (estado) |
| Venta | 1 | CU-01 | — | — |
| LineaVenta | 1 | CU-01 | CU-04 (fusión, 3b) | CU-04 (fusión, 3b) |
| CantidadDelDia | 2 | CU-02 | — | CU-02 |
| ReporteSemanal | 2 | CU-03 | — | — |
| EvaluacionDeProducto | 2 | CU-03 | CU-03 (5a) | — |
| DecisionDeDescontinuar | 2 | CU-03 (5a) | — | — |

Ninguna clase queda sin caso de uso que la toque (RC-07 cumple).

## Vista 4 · Por actor y estado

| Actor | Subclase de Empleado | CU que ejecuta | Estados de Producto que puede cambiar |
|---|---|---|---|
| Cajera | Cajera | CU-01 | Ninguno directamente (solo crea Producto en PorClasificar vía 1a) |
| Panadero principal | Panadero | CU-02 | Ninguno |
| Propietario | Propietario | CU-03, CU-04 | Activo → Descontinuado (CU-03); PorClasificar → Activo (CU-04) |

## Aplicación de las reglas RC-01 a RC-10

| Regla | Qué verifica | Resultado |
|---|---|---|
| RC-01 | Actores vs. lanes/participantes | ✓ mismos nombres en los 4 tipos de diagrama |
| RC-02 | CU vs. requisitos | ✗ ver H-02 |
| RC-03 | CU vs. actividades/secuencia | ◐ ver H-01 (CU-04 sin diagramas propios) |
| RC-04 | Mensajes/datos vs. atributos del dominio | ✓ |
| RC-05 | Estados y eventos | ✓ el evento "decide descontinuarlo" es la extensión 5a de CU-03 |
| RC-06 | Valores de estado vs. dominio | ✓ Producto.estado = los 3 estados del diagrama de Sesión 4 |
| RC-07 | Clases vs. CU (create/read/update) | ✓ ninguna clase huérfana |
| RC-08 | Glosario y nombres | ✓ |
| RC-09 | Requisitos nuevos trazados en el SRS | ✗ ver H-02 (no hay SRS todavía; se trazan aquí mientras tanto) |
| RC-10 | Multiplicidades y reglas trazadas a RN-nn | ✓ RN-01 y RN-02 trazadas; ver RN-03 nueva abajo |

## Hallazgos (5)

| # | Hallazgo | Decisión |
|---|---|---|
| H-01 | CU-04 sin diagrama de actividad ni secuencia propios | Aplazar (acción simple, no bloquea) |
| H-02 | No hay RF/RNF formal (Unidad 4 pendiente) | Diferir a Unidad 4 |
| H-03 | Ningún CU dice explícitamente que no se puede vender un producto Descontinuado | **Nace un requisito nuevo (ver abajo)** |
| H-04 | No está definido qué pasa si se recalcula un reporte semanal pasado | Pregunta abierta (ver `preguntas-abiertas.md`) |
| H-05 | La regla "4 semanas de datos mínimas" está duplicada e implícita en CU-02 y CU-03, sin una regla de negocio única | Se declara regla transversal RN-03 (ver abajo) |

## Requisito nuevo que nace de este modelado (H-03)

**RF-NUEVO-01** (formato EARS, estado: Propuesto)
> CUANDO la cajera intente agregar a una venta un producto cuyo estado sea Descontinuado, el sistema deberá rechazar la línea y mostrar un aviso indicando que el producto ya no está disponible.

**Trazado a:** CU-01 (extensión nueva propuesta, pendiente de incorporar al texto aprobado), `Producto.estado`, RN-02. **Dueño de la decisión:** Propietario — queda Propuesto hasta que lo confirme.

## Regla de negocio nueva (H-05)

**RN-03:** un producto necesita al menos 4 semanas de ventas registradas para entrar en el cálculo de sugerencia de producción (CU-02) o de rotación (CU-03). Antes de eso, se muestra "Sin datos suficientes" o "menos de 4 semanas de datos" según el caso, y no se incluye en el cálculo.
