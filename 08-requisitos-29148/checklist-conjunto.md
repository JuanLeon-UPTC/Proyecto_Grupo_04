# Checklist 29148 — Partes A, B y C

Revisión de las 6 fichas de `fichas/`. Revisor: Emanuel (distinto del autor).

## Parte A · Individual (las nueve pruebas)

Sí · No (con hallazgo) · ? (depende de alguien externo)

| Prueba | RF-001 | RF-002 | RF-006 | RF-007 | RNF-001 | RNF-002 |
|---|---|---|---|---|---|---|
| Necesario | Sí | Sí | Sí | Sí | Sí | Sí |
| Apropiado | Sí | Sí | Sí | Sí | Sí | Sí |
| No ambiguo | Sí | Sí | Sí | Sí | Sí | Sí |
| Completo | Sí | Sí | Sí | Sí | Sí | Sí |
| Singular | Sí | ? | Sí | Sí | Sí | Sí |
| Factible | ? | ? | ? | ? | ? | ? |
| Verificable | Sí | Sí | Sí | Sí | Sí | Sí |
| Correcto | Sí | Sí | Sí | ? | Sí | Sí |
| Conforme | Sí | Sí | Sí | Sí | Sí | Sí |

**Notas sobre los "?":**
- **Factible (los 6):** nadie del equipo de desarrollo ha confirmado que esto se pueda construir — este curso es de requisitos, no de construcción. Queda como riesgo abierto, no como hallazgo que bloquee.
- **RF-002, Singular:** combina "reintentar" y "avisar el error" en un solo enunciado. Se decide mantenerlo así: son una sola unidad de comportamiento (manejo del fallo de guardado); separarlo duplicaría el disparador ("SI el guardado falla").
- **RF-007, Correcto:** su fuente (el Propietario) todavía no lo ha confirmado — por eso su estado es Propuesto, no Aprobado.

## Parte B · De conjunto (las cinco características)

| Característica | Técnica aplicada | Resultado |
|---|---|---|
| Completo | Matriz de trazabilidad recorrida en ambos sentidos | ✗ parcial — NI-06 no tiene RF (ver hallazgo H-06) |
| Consistente | Revisión cruzada de términos y de enunciados | ✓ ningún término con dos significados, ninguna contradicción |
| Factible | Comparación contra las restricciones de 2.4 (dispositivo de caja existente, sin servidor propio) | ✓ razonable para el contexto, con la salvedad de Parte A |
| Comprensible | Revisión de que el glosario (Unidad 5 S5) y los identificadores se usan consistentemente | ✓ |
| Validable | Simulado con el Propietario: reconoce RF-001 a RF-006 como lo que esperaba | ✓ para NI-01 a NI-04; ◐ para NI-05 (depende de que confirme RF-007) |

## Parte C · Hallazgos de esta revisión

| # | Requisitos implicados | Característica | Descripción | Corrección acordada | Aprobó | Estado |
|---|---|---|---|---|---|---|
| H-06 | — (NI-06) | Completo (conjunto) | NI-06 no tiene ningún RF que la cubra | Crear un RF nuevo (ver matriz de trazabilidad, D-02) | Juan | Abierto |
| H-07 | Los 6 | Factible (individual) | Ninguna confirmación técnica real de que se pueda construir | Queda como riesgo abierto, no bloquea el curso | Emanuel | Aceptado como riesgo |
| H-08 | RF-007 | Correcto (individual) | No se puede confirmar como correcto hasta que el Propietario lo apruebe | Mantener estado Propuesto | Juan | Abierto, pendiente del Propietario |

Al menos un hallazgo real de consistencia/factibilidad con un interesado: **H-08**, resuelto en el sentido de "se necesita al interesado" — no se inventa su respuesta.
