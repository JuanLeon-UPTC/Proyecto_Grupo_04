# Evaluación heurística · prototipo v0.1 (P-01)

**3 evaluadores independientes** (Juan, Emanuel, Santiago — revisan por separado antes de unificar), heurísticas de Nielsen, severidad 0-4 (0 no es problema, 4 catastrófico).

## Lista unificada

| # | Heurística | Hallazgo | Severidad | Evaluador que lo encontró |
|---|---|---|---|---|
| H-1 | 5. Prevención de errores / 3. Control del usuario | "Cancelar venta" borra la venta en curso sin pedir confirmación — un toque accidental la pierde | 3 | Juan, Emanuel (coinciden) |
| H-2 | 1. Visibilidad del estado del sistema | El aviso "Reintentando…" es solo texto; en una pantalla real podría pasar desapercibido en hora pico | 2 | Santiago |
| H-3 | 1. Visibilidad / 7. Flexibilidad | El aviso de éxito desaparece con un tiempo fijo (800 ms), sin que la cajera controle cuánto lo ve | 1 | Emanuel |
| H-4 | 10. Ayuda y documentación | No hay ayuda contextual | 0 | Juan |

## Recorrido cognitivo (T1, como si fuera la primera vez)
1. ¿Sabe qué hacer? Sí, el formulario es el primer elemento visible.
2. ¿Ve que su acción tuvo efecto? Sí, la tarjeta de línea aparece de inmediato.
3. ¿Interpreta el resultado correctamente? Sí, el total se actualiza de forma visible.
Sin problemas nuevos encontrados en el recorrido cognitivo, más allá de H-1 a H-4.
