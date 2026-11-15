# Matriz de trazabilidad bidireccional · NI → meta → HU → RF/RNF → verificación

## Matriz principal

| NI | Meta | HU | RF / RNF | Verificación |
|---|---|---|---|---|
| NI-01 | M1.1 | HU-01 | RF-001, RF-003, RNF-002 | Prueba |
| NI-02 | M2.1, M2.2 | HU-02a, HU-02b | RF-004, RF-005 | Análisis, Prueba |
| NI-03 | M3.1 | HU-03 | RF-006 | Análisis |
| NI-04 | M1.3 | HU-01 | RF-002, RNF-001 | Prueba, Demostración |
| NI-05 | — (sin meta en el árbol original) | — (sin HU) | RF-007 (Propuesto) | Prueba |
| NI-06 | — (sin meta) | — (sin HU) | **Ninguno — hueco** | — |

## Cobertura por NI

| NI | ¿Cubierta por al menos un RF/RNF Aprobado? | Estado |
|---|---|---|
| NI-01 | ✓ | Cubierta |
| NI-02 | ✓ | Cubierta |
| NI-03 | ✓ | Cubierta |
| NI-04 | ✓ | Cubierta |
| NI-05 | ◐ | Parcial — RF-007 existe pero sigue Propuesto, no Aprobado |
| NI-06 | ✗ | Sin cobertura — ver registro de decisiones, D-02 |

Ver `decisiones-trazabilidad.md` para el registro de decisiones sobre los huecos y huérfanos de esta tabla.
