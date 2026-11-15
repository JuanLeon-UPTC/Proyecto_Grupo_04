# Autoevaluación ligera de capacidad del proceso de requisitos

Proyecto Grupo 04. **No es una evaluación conforme a ninguna norma** — es la autoevaluación ligera que pide el curso, con evidencia de este repositorio. Un integrante distinto (Emanuel) contrasta esta valoración.

Escala: N (no logrado) · P (parcial) · L (ampliamente logrado) · F (totalmente logrado). Regla del curso: un indicador en N impide F en su atributo; para alcanzar un nivel, los atributos de los niveles inferiores deben estar en F.

## Nivel 1 · Realización del proceso

| # | Indicador | Valor | Evidencia (ruta) |
|---|---|---|---|
| R1 | Interesados y necesidades identificados | F | `01-kickoff/matriz-poder-interes.pdf`; tablas de interesados en cada CU |
| R2 | Elicitación con técnicas documentadas y fuentes registradas | F | `02-elicitacion/` (cuestionario, entrevistas, trawling, análisis documental) |
| R3 | Requisitos especificados, identificados y priorizados | L | `07-srs-830/srs.md`, `08-requisitos-29148/fichas/` — identificados y priorizados, pero sin el backlog MoSCoW completo de Unidad 3 Sesión 4 (nunca se hizo) |
| R4 | Requisitos validados con los interesados | P | Validación **simulada** únicamente (`15-dominio-consistencia/README.md`), no con interesados reales |

**Nivel 1 no se alcanza en F completo** (R4 en P), según la regla del curso.

## Nivel 2 · Gestión de la realización

| # | Indicador | Valor | Evidencia (ruta) |
|---|---|---|---|
| G1 | Objetivos y plan de actividades de requisitos | P | Se siguió el plan de las guías del curso sesión a sesión, pero no existe un plan propio del equipo por escrito |
| G2 | La realización se sigue y se ajusta | P | Hubo seguimiento y corrección real (ej. bugs encontrados y corregidos en diagramas de actividad/secuencia), pero no quedó en un artefacto propio, solo en el historial de la conversación y los PR |
| G3 | Responsabilidades y roles asignados | L | `CONTRIBUCIONES.md`, revisores asignados en cada PR |
| G4 | Comunicación con interesados gestionada según lo planificado | N | No hubo comunicación real con interesados (son simulados) ni un plan de comunicación |

## Nivel 2 · Gestión de los productos de trabajo

| # | Indicador | Valor | Evidencia (ruta) |
|---|---|---|---|
| P1 | Productos con requisitos definidos (plantillas, reglas de calidad) | F | `material-del-curso/plantillas/` usadas consistentemente |
| P2 | Control de versiones y cambios registrados | F | Historial de pull requests del repo; sección "Historia de la ficha" en `08-requisitos-29148/fichas/*.md` |
| P3 | Productos revisados contra criterios explícitos | F | `07-srs-830/revision-checklist.md`, `08-requisitos-29148/checklist-conjunto.md`, checklists de cada sesión de Unidad 5 |
| P4 | Trazabilidad al día | L | `08-requisitos-29148/matriz-trazabilidad.md` — al día, pero con un hueco conocido (NI-06) |

## Nivel 3 · Definición del proceso

| # | Indicador | Valor | Evidencia (ruta) |
|---|---|---|---|
| D1 | Descripción del proceso que el equipo sigue | P | Se sigue el proceso de las guías del curso; no hay una descripción propia del equipo, independiente de ellas |
| D2 | Adaptaciones documentadas y justificadas | F | `06-estandares-mapa/matriz-aplicabilidad.md`, tabla de adaptaciones |

## Nivel 3 · Despliegue del proceso

| # | Indicador | Valor | Evidencia (ruta) |
|---|---|---|---|
| D3 | El proceso definido se usa de forma consistente por todos | P | Juan lo siguió consistentemente; Santiago repitió el error de rama base equivocada (PR #15), y hubo demoras de revisión de Emanuel — evidencia real de inconsistencia entre integrantes |
| D4 | Se recogen datos del uso del proceso para mejorarlo | N | No existe un artefacto que consolide datos del proceso (hallazgos por sesión, tiempos de revisión, etc.) |

## Nivel alcanzado

**No se alcanza completamente ni el Nivel 1**, porque uno de sus cuatro atributos (R4) está en P, no en F — y la regla del curso exige F en todos los atributos del nivel para considerarlo logrado. El perfil real del equipo es fuerte en elicitación y en el uso de plantillas/checklists, y débil en: validación real con interesados, planificación explícita del propio proceso, y consistencia de ejecución entre integrantes.

## Brechas priorizadas y acciones de mejora

| # | Brecha | Acción | Responsable | Fecha | Evidencia de cierre |
|---|---|---|---|---|---|
| 1 | R4: no hay validación real con interesados | Si el proyecto se usa fuera del curso, validar al menos 3 requisitos con el propietario real de una panadería | Juan | Fuera del alcance de este semestre | — |
| 2 | G4: sin plan de comunicación con interesados | Declarar explícitamente (en el README del proyecto) que los interesados son simulados y por qué | Juan | Antes de Unidad 7 | Línea en `README.md` del repo |
| 3 | D3: inconsistencia de ejecución entre integrantes (rama base equivocada, demoras de revisión) | Repasar con el equipo el flujo correcto de PR una vez más antes de Unidad 6 | Juan | Antes de empezar Unidad 6 | Mensaje de confirmación del equipo |
| 4 | D4: no se recogen datos del proceso | Mantener este mismo archivo actualizado cada vez que se cierre una unidad, en vez de crear uno nuevo | Juan | Continuo | Historial de cambios de este archivo |
