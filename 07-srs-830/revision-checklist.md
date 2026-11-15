# Revisión con el checklist de las ocho características · IEEE 830

SRS-VENTAS-001, muestra de 8 requisitos (Sesión 2). Revisor: Emanuel (distinto de quien redactó el borrador).

## Matriz requisito × característica (antes de corregir)

✓ cumple · ✗ falla · N/A no aplica

| Requisito | Correcto | No ambiguo | Completo | Consistente | Clasificado | Verificable | Modificable | Trazable |
|---|---|---|---|---|---|---|---|---|
| RF-001 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-002 | ✓ | ✓ | ✗ (H-02) | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-003 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-004 | ✓ | ✗ (H-01) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-005 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-006 | ✗ (H-05) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RF-007 | ✓ | ✓ | ✓ | ✓ | ✗ (H-04) | ✓ | ✓ | ✓ |
| RNF-001 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RNF-002 | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ (H-03) | ✓ | ✓ |

## Tabla de hallazgos

| ID | Requisito | Característica | Qué se encontró | Corrección |
|---|---|---|---|---|
| H-01 | RF-004 | No ambiguo | "Calcular y mostrar la cantidad sugerida" no decía si se muestra producto por producto o todos juntos — dos lectores podrían implementarlo distinto | Se agregó "en una sola pantalla" y "con 4 semanas de datos o más" |
| H-02 | RF-002 | Completo | No decía qué pasa si el reintento de guardado también falla (sí lo dice el CU-01 original, extensión 6a, pero el RF no lo heredó) | Se completó con "si el reintento también falla, deberá informar el error... sin guardar la venta" |
| H-03 | RNF-002 | Verificable | "Nunca deberá dejar una venta guardada parcialmente" no es verificable tal cual — "nunca" no se puede probar directamente | Se reescribió como una propiedad verificable (operación atómica) con un método de prueba concreto (forzar interrupción) |
| H-04 | RF-007 | Clasificado | Tenía una prioridad MoSCoW firme (Should) pero su estado es Propuesto — no debería tener prioridad en firme antes de que el interesado lo confirme | Se marcó "Should (tentativa)" explícitamente, con la referencia a su estado |
| H-05 | RF-006 | Correcto | Decía "marcar como de rotación baja los productos que vendieron menos del 25%..." sin excluir a los productos con menos de 4 semanas de datos — contradice la extensión 2a de CU-03, que los excluye del cálculo | Se agregó "con 4 semanas de datos o más" y la referencia a RN-03 |

5 hallazgos, en 4 características distintas (No ambiguo, Completo, Verificable, Clasificado, Correcto — en realidad 5 características distintas).

## Segundo pase (después de la reescritura)

Los 5 requisitos corregidos (RF-002, RF-004, RF-006, RF-007, RNF-002) se revisaron de nuevo contra la característica que habían fallado: los 5 pasan en el segundo pase. El documento `srs.md` ya contiene la versión corregida (no se dejaron dos versiones distintas).

## Mini-acta de revisión

- **Fecha:** 2026-11-15
- **Revisó:** Emanuel (simulado, rol de revisor distinto del autor)
- **Redactó el borrador:** Juan
- **Método:** lectura de los 8 requisitos contra las 8 características, uno por uno
- **Resultado:** 5 hallazgos, todos corregidos en el mismo documento; 0 hallazgos pendientes
- **Decisión:** el documento queda apto para continuar a la Sesión 3 (fichas completas y trazabilidad)
