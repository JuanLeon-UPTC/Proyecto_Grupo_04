# Ficha de alcance y supuestos
## Taller de alcance del SRS-PAN-001

**Proyecto:** Sistema de registro de ventas — Panadería-cafetería El Arte de Amar  
**Versión:** 0.2 — escenario previsto para validación  
**Estado:** diligenciada como predicción razonada; no equivale a aprobación real del propietario.

> **Nota de transparencia:** esta ficha anticipa respuestas plausibles a partir del acta de constitución, entrevistas, metas, historias, casos de uso y documentos de procesos del repositorio. Las decisiones marcadas como “predicción” deben leerse con el propietario y los usuarios reales antes de convertirlas en acuerdos.

## 1. Propósito del taller

Confirmar los límites del producto, las funciones incluidas y excluidas, las propuestas pendientes, las suposiciones y las decisiones que dependen del propietario o de los usuarios operativos.

## 2. Alcance dentro — resultado previsto

| ID | Elemento | Meta relacionada | Predicción de confirmación |
|---|---|---|---|
| D-01 | Registrar ventas por producto. | M1 | **Se espera aprobación.** Es el núcleo del proyecto y responde directamente a la falta de información desagregada. |
| D-02 | Conservar información histórica de ventas. | M1 | **Se espera aprobación.** Es necesaria para consultar tendencias y calcular sugerencias. |
| D-03 | Calcular una sugerencia de producción con base en las últimas cuatro semanas. | M2 | **Se espera aprobación condicionada.** El panadero debe poder revisar la sugerencia y conocer el periodo de datos utilizado. |
| D-04 | Permitir que el panadero ajuste y confirme la cantidad de producción. | M2 | **Se espera aprobación.** La herramienta apoya, pero no reemplaza, el criterio operativo del panadero. |
| D-05 | Calcular la rotación y presentar un reporte semanal. | M3 | **Se espera aprobación.** Está respaldado por HU-03 y CU-03. |
| D-06 | Permitir que el propietario consulte el reporte y decida si mantiene o descontinúa productos. | M3 | **Se espera aprobación.** La decisión comercial debe permanecer en el propietario. |

## 3. Alcance fuera — resultado previsto

| ID | Elemento excluido | Motivo | Predicción de confirmación |
|---|---|---|---|
| X-01 | Facturación electrónica y trámites ante la DIAN. | Excluido en el acta de constitución. | Se espera que se mantenga excluido. |
| X-02 | Costeo e inventario de insumos. | No corresponde al propósito de esta versión. | Se espera que se mantenga excluido. |
| X-03 | Gestión de encargos. | Fuera del alcance delimitado. | Se espera que se mantenga excluido. |
| X-04 | Comandas y mesas. | No se contempla administrar servicio en mesa. | Se espera que se mantenga excluido. |
| X-05 | Domicilios. | El levantamiento indica que el negocio no presta domicilios. | Se espera que se mantenga excluido. |
| X-06 | Registro de clientes frecuentes. | No está contemplado en el alcance actual. | Se espera que se mantenga excluido. |
| X-07 | Administración de varias sedes. | El negocio descrito opera en un solo local. | Se espera que se mantenga excluido. |

## 4. Asuntos por decidir — decisión prevista

| ID | Pregunta | Predicción razonada | Recomendación para validación |
|---|---|---|---|
| PD-01 / RP-01 | ¿El panadero consulta las ventas del día antes de la última tanda? | Probablemente será útil, pero depende de que exista un dispositivo disponible en producción. | Dejarlo fuera de la primera versión hasta confirmar el dispositivo. |
| PD-02 / RP-02 | ¿La cajera marca los productos agotados con hora? | Puede mejorar la información de demanda no atendida, pero agrega pasos al registro. | Aplazarlo para no sobrecargar CU-01; medir primero el tiempo de registro. |
| PD-03 / RP-03 | ¿Se registra el sobrante por producto? | Es coherente con medir la reducción de sobrantes, pero requiere una actividad de cierre y responsable definido. | Mantener el conteo actual como procedimiento y aplazar la captura en sistema hasta validar el flujo. |
| PD-04 | ¿La registradora actual se conserva o se reemplaza? | Es probable que el propietario prefiera conservarla temporalmente como respaldo durante la adaptación. | Operar en paralelo durante un piloto corto, si el propietario lo aprueba, y revisar diferencias antes de retirarla. |
| PD-05 | ¿Existe computador o celular disponible en producción? | No hay evidencia suficiente para responder. | No asumir que existe; verificar físicamente en el local. |

## 5. Suposiciones y dependencias — resultado previsto

| ID | Suposición / dependencia | Dueño propuesto | Fecha objetivo de confirmación | Estado previsto | Qué ocurre si no se cumple |
|---|---|---|---|---|---|
| S-01 | El negocio mantiene un solo local durante la primera versión. | Propietario | 20/11/2026 | Por confirmar | Revisar alcance si se abre otra sede. |
| S-02 | El panadero revisa y confirma la cantidad sugerida. | Propietario y panadero principal | 20/11/2026 | Se espera confirmar | No automatizar la decisión final de producción. |
| S-03 | La sugerencia utiliza cuatro semanas de historial cuando exista información suficiente. | Equipo y propietario | 23/11/2026 | Por confirmar | Definir mensaje y comportamiento cuando no haya historial suficiente. |
| S-04 | El propietario consulta el reporte semanal para decidir sobre el catálogo. | Propietario | 20/11/2026 | Se espera confirmar | Revisar el formato y utilidad del reporte. |
| D-01 | La consulta de ventas por el panadero depende de un dispositivo en producción. | Propietario | 20/11/2026 | Pendiente de verificación | RP-01 permanece aplazado. |
| D-02 | La continuidad de la registradora depende de decisión del propietario y de la cajera. | Propietario y cajera | 20/11/2026 | Pendiente de decisión | No asumir reemplazo; conservar el proceso vigente hasta decidir. |

## 6. Desacuerdo previsto y decisión recomendada

**Tema:** quién tiene la decisión final sobre la cantidad que se producirá.

- **Posición que probablemente defenderá el propietario:** desea que la sugerencia del sistema refleje las ventas históricas y reduzca la producción “a ojo”.
- **Posición que probablemente defenderá el panadero:** necesita conservar la posibilidad de ajustar la cantidad por experiencia, capacidad del horno y condiciones del día.
- **Decisión recomendada:** el sistema calcula y presenta una sugerencia; el panadero puede revisarla, ajustarla y confirmarla. La sugerencia y la cantidad confirmada quedan diferenciadas.
- **Estado:** predicción para discutir; no es un acuerdo real hasta que ambos participantes lo confirmen.

## 7. Aprobación real

| Participante | Nombre | Confirmación / firma | Fecha |
|---|---|---|---|
| Propietario | N.N. — confirmar nombre | Pendiente | Pendiente |
| Panadero principal | N.N. — confirmar nombre | Pendiente | Pendiente |
| Cajera | N.N. — confirmar nombre | Pendiente | Pendiente |
| Representante del equipo | Por asignar | Pendiente | Pendiente |

**Criterio:** esta ficha puede utilizarse como guion del taller. No debe presentarse como aprobada ni firmada mientras no se recojan las confirmaciones reales.
