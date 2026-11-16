# SRS-PAN-001 · Sistema de registro de ventas
## Panadería-cafetería El Arte de Amar

| Campo | Valor |
|---|---|
| Proyecto | Sistema de registro de ventas para la panadería-cafetería El Arte de Amar |
| Identificador | SRS-PAN-001 |
| Versión | 0.1 — borrador de Unidad 7, Sesión 1 |
| Estado | Para revisión del equipo y validación del alcance |
| Repositorio | `JuanLeon-UPTC/Proyecto_Grupo_04` |
| Línea base | No establecida |

> Este documento describe el contexto, propósito y límites del producto. No sustituye los requisitos detallados de la sección 3 ni los casos de uso existentes.

# 1. Introducción

## 1.1 Propósito

El propósito de este documento es especificar el contexto, alcance y características generales del Sistema de registro de ventas que se propone para la panadería-cafetería El Arte de Amar. El SRS sirve como referencia común para el propietario del negocio, los usuarios operativos y el equipo que analizará, construirá, verificará y mantendrá el sistema.

El documento busca reducir interpretaciones diferentes sobre qué problema se pretende resolver, qué capacidades forman parte del producto y cuáles quedan fuera. También establece las restricciones, supuestos y asuntos pendientes que deben considerarse antes de detallar y aprobar los requisitos funcionales y no funcionales.

Esta versión corresponde a la estructura y las secciones 1 y 2 solicitadas en la Unidad 7, Sesión 1. Los requisitos detallados se desarrollarán y consolidarán en la sección 3 a partir de los artefactos previos del proyecto.

## 1.2 Alcance del producto

El producto propuesto es un sistema de información para apoyar el registro de las ventas de la panadería-cafetería El Arte de Amar. Su propósito principal es conservar información de ventas por producto y utilizarla para apoyar decisiones relacionadas con la producción diaria y la rotación del catálogo.

El negocio cuenta con un solo local y su operación actual es principalmente manual. La registradora permite obtener un total de ventas, pero no conserva un historial organizado por producto y hora. La producción se estima con base en la experiencia y en referencias de días anteriores; de igual forma, la decisión de retirar productos se toma sin disponer de cifras históricas consolidadas.

### 1.2.1 Dentro del alcance

| ID | Capacidad / resultado | Meta relacionada | Motivo |
|---|---|---|---|
| D-01 | Registrar las ventas por producto. | M1 — disponer de información de ventas. | Responde a la falta de detalle de ventas por producto. |
| D-02 | Conservar la información registrada para consulta e histórico. | M1 — disponer de información de ventas. | Permite consultar datos y no depender únicamente del total diario de la registradora. |
| D-03 | Calcular una sugerencia de producción a partir del historial de ventas de las últimas cuatro semanas. | M2 — apoyar la planificación de producción. | Está descrito en el caso de uso CU-02 y en el rediseño TO-BE. |
| D-04 | Permitir que el panadero revise, ajuste y confirme la cantidad sugerida. | M2 — apoyar la planificación de producción. | La decisión operativa final se conserva en el panadero. |
| D-05 | Calcular la rotación de los productos y presentar un reporte semanal. | M3 — apoyar decisiones sobre el catálogo. | Está relacionado con HU-03 y CU-03. |
| D-06 | Permitir que el propietario consulte el reporte para decidir si mantiene o descontinúa productos. | M3 — apoyar decisiones sobre el catálogo. | El sistema aporta información; la decisión comercial permanece en el propietario. |

Las capacidades D-01 a D-06 resumen el alcance respaldado por las metas, historias y casos de uso disponibles. Su redacción detallada y sus criterios de aceptación deben verificarse contra el SRS de la Unidad 4 antes de congelar la línea base.

### 1.2.2 Fuera del alcance

| ID | Función excluida | Motivo |
|---|---|---|
| X-01 | Facturación electrónica y trámites ante la DIAN. | El acta de constitución excluye explícitamente esta capacidad. |
| X-02 | Costeo de productos e inventario de insumos. | No hace parte del propósito delimitado en el acta de constitución. |
| X-03 | Gestión de encargos o pedidos especiales. | Está identificado como fuera del alcance en los documentos de procesos. |
| X-04 | Gestión de comandas y mesas. | El proyecto no contempla administrar el servicio en mesa. |
| X-05 | Gestión de domicilios. | El negocio no presta domicilios según el contexto levantado. |
| X-06 | Registro y administración de clientes frecuentes. | No se contempla como capacidad del producto actual. |
| X-07 | Administración de varias sedes. | El negocio descrito opera en un solo local. |

### 1.2.3 Por decidir

| ID | Tema | Situación actual | Decisión requerida |
|---|---|---|---|
| PD-01 | Consulta de ventas del día por el panadero antes de la última tanda (RP-01). | Propuesta de la Unidad 5; no está consolidada como requisito aprobado. | Confirmar con el propietario si entra al alcance y si existe dispositivo disponible en producción. |
| PD-02 | Marcación de productos agotados con hora (RP-02). | Propuesta de la Unidad 5; su relación con CU-01 está por definir. | Confirmar necesidad y flujo de operación. |
| PD-03 | Registro del sobrante por producto (RP-03). | Propuesta de la Unidad 5; el conteo del sobrante aparece como práctica del panadero. | Confirmar si se registra en el sistema y quién lo ingresa. |
| PD-04 | Continuidad o reemplazo de la registradora actual. | Pregunta abierta en los pendientes de procesos. | Definir si el sistema funcionará en paralelo o reemplazará el registro actual. |

Hasta que estos puntos sean aprobados, no deben considerarse parte del alcance comprometido.

## 1.3 Definiciones, acrónimos y abreviaturas

| Término | Definición |
|---|---|
| SRS | Especificación de Requisitos de Software; documento que establece qué debe hacer el producto y bajo qué condiciones. |
| UPTC | Universidad Pedagógica y Tecnológica de Colombia. |
| HU | Historia de usuario. |
| CU | Caso de uso. |
| RF | Requisito funcional. |
| RNF | Requisito no funcional. |
| AS-IS | Representación del proceso tal como se realiza actualmente. |
| TO-BE | Representación del proceso propuesto después del cambio. |
| Rotación | Comportamiento de venta de un producto durante un periodo; en el proyecto se utiliza para apoyar decisiones sobre el catálogo. |
| Sobrante | Producto que permanece sin vender al finalizar la jornada, según el proceso descrito por el negocio. |
| Tanda | Cantidad de producto que se prepara u hornea en un ciclo de producción. |
| Registradora | Equipo utilizado actualmente para registrar y totalizar cobros. |

Los umbrales, fórmulas y definiciones operativas exactas de la rotación deben conservarse en el requisito o catálogo correspondiente de la sección 3; no se fijan aquí valores adicionales.

## 1.4 Referencias

Las siguientes fuentes se encuentran en el repositorio del proyecto y sustentan esta versión:

1. `01-kickoff/acta-constitucion.pdf` — contexto del negocio, problema y alcance inicial.
2. `01-kickoff/matriz-poder-interes.pdf` — identificación y clasificación de interesados.
3. `02-elicitacion/entrevista-propietario.pdf` — información levantada con el propietario.
4. `02-elicitacion/entrevistas-panadero-cajera.pdf` — información levantada con panadero y cajera.
5. `02-elicitacion/cuestionario.pdf` — cuestionario piloto.
6. `02-elicitacion/analisis-documental.pdf` — análisis documental del proyecto.
7. `02-elicitacion/trawling.pdf` — resultados de exploración y elicitación.
8. `03-especificacion/arbol-de-metas.pdf` — metas del sistema.
9. `03-especificacion/historias/historia-HU-01.pdf`, `historia-HU-02.pdf` y `historia-HU-03.pdf` — historias de usuario.
10. `03-especificacion/casos-de-uso/caso-de-uso-CU-01.pdf`, `caso-de-uso-CU-02.pdf` y `caso-de-uso-CU-03.pdf` — casos de uso.
11. `12-procesos-actividades/README.md`, `hallazgos-brechas` y diagramas DAC-01, DAC-02 y DAC-03 — análisis de procesos y trazabilidad preliminar.

**Referencia pendiente:** incorporar y verificar el documento SRS elaborado en la Unidad 4. La matriz de trazabilidad debe actualizarse con sus identificadores RF y RNF.

## 1.5 Visión general del documento

La sección 1 presenta el propósito del SRS, los límites del producto, los términos utilizados y las fuentes del proyecto. La sección 2 describe el contexto del sistema, sus funciones generales, las personas que lo utilizarán, las restricciones, los supuestos y los asuntos aplazados.

La sección 3 contendrá los requisitos detallados, organizados por grupos funcionales. Los apéndices podrán reunir glosario ampliado, matrices de trazabilidad, reglas de negocio, catálogos y material de apoyo, evitando repetir información que tenga una única fuente de verdad.

# 2. Descripción general

## 2.1 Perspectiva del producto

El sistema será una nueva herramienta de apoyo a la operación de la panadería-cafetería El Arte de Amar. Se plantea para un negocio que actualmente realiza el registro de cobros y varias decisiones operativas de manera manual.

El producto se relaciona principalmente con tres actividades del negocio: registrar las ventas, apoyar la planificación de la producción y aportar información para revisar la rotación de los productos. No se ha documentado una integración aprobada con sistemas externos. Tampoco se ha confirmado si el sistema reemplazará la registradora actual o funcionará inicialmente en paralelo.

### Diagrama de contexto

El diagrama muestra las personas y el entorno que interactúan con el sistema según el alcance respaldado. La DIAN aparece como interesado externo identificado en la matriz, pero no como actor que intercambie información con el producto, dado que la facturación electrónica está excluida.

![Diagrama de contexto](diagramas/contexto-sistema.png)

La fuente editable del diagrama está en `diagramas/contexto-sistema.puml`.

## 2.2 Funciones del producto

| ID | Función general | Descripción | Usuario principal | Fuente |
|---|---|---|---|---|
| F-01 | Registrar ventas | Permitir registrar las ventas por producto y conservar la información necesaria para su consulta. | Cajera | HU-01 / CU-01 |
| F-02 | Consultar información de ventas | Disponer de información histórica de ventas para apoyar decisiones del negocio. | Propietario; detalle de permisos por confirmar | Meta M1 / CU-01 |
| F-03 | Calcular sugerencia de producción | Obtener una cantidad sugerida por producto con base en las ventas de las últimas cuatro semanas. | Panadero principal | HU-02 / CU-02 |
| F-04 | Revisar y confirmar producción | Permitir que el panadero revise la sugerencia, ajuste la cantidad y la confirme. | Panadero principal | HU-02 / CU-02 |
| F-05 | Calcular rotación | Analizar la rotación de los productos y preparar el reporte semanal. | Propietario | HU-03 / CU-03 |
| F-06 | Consultar reporte y decidir | Permitir que el propietario consulte el reporte y registre la decisión sobre los productos marcados, de acuerdo con CU-03. | Propietario | HU-03 / CU-03 |

Las funciones F-01 a F-06 son una vista resumida. Los flujos, excepciones, datos obligatorios, permisos y criterios verificables se especificarán en la sección 3, conservando los identificadores originales de requisitos cuando se incorpore el SRS previo.

## 2.3 Características de los usuarios

| Usuario | Participación en el proceso | Necesidad frente al sistema | Conocimiento / característica relevante |
|---|---|---|---|
| Propietario | Define lineamientos de producción y decide si mantiene o retira productos. | Consultar información de ventas y reportes que apoyen decisiones del negocio. | Conoce la operación y toma decisiones comerciales. |
| Panadero principal | Prepara las tandas y participa en la definición de cantidades de producción. | Revisar y ajustar la sugerencia de producción. | Conoce los productos, tiempos y dinámica de producción. |
| Cajera | Atiende a los clientes, registra los cobros y realiza el cierre de caja. | Registrar las ventas durante la operación. | Utiliza el sistema en el punto de venta; el registro debe ajustarse al flujo de atención. |

Los clientes, el soporte técnico externo y la DIAN aparecen como interesados en los documentos del proyecto. No se clasifican como usuarios directos del sistema en esta versión porque no se ha identificado una interacción funcional aprobada para ellos.

## 2.4 Restricciones

| ID | Restricción | Fuente / evidencia | Efecto sobre el producto |
|---|---|---|---|
| R-01 | El sistema se especifica para la operación de un único local. | Acta de constitución y README del proyecto. | No se debe asumir gestión multi-sede. |
| R-02 | La facturación electrónica y los trámites ante la DIAN están fuera del alcance. | Acta de constitución y README del proyecto. | No diseñar funciones de facturación ni integración tributaria como parte de esta versión. |
| R-03 | El producto debe responder al proceso operativo de venta en mostrador descrito por la cajera. | Entrevistas de elicitación y CU-01. | El registro debe integrarse al flujo de atención y cobro documentado. |
| R-04 | La sugerencia de producción no elimina la revisión y confirmación del panadero. | HU-02, CU-02 y decisiones D-02b de `hallazgos-brechas`. | El sistema apoya la decisión; no sustituye la responsabilidad operativa del panadero. |
| R-05 | La decisión de descontinuar un producto permanece en el propietario. | HU-03, CU-03 y decisión D-06 de `hallazgos-brechas`. | El reporte es informativo; no debe retirar automáticamente productos del catálogo. |
| R-06 | No se ha confirmado la disponibilidad de computador o celular en la zona de producción. | Pendiente PE-07 de `hallazgos-brechas`. | La consulta de ventas por el panadero no se considera aprobada hasta verificar el dispositivo y el alcance. |

No se atribuyen a una norma legal o técnica restricciones que no estén documentadas en las fuentes revisadas. Si el equipo identifica obligaciones adicionales, deberá agregarlas con la fuente y la persona que las valida.

## 2.5 Suposiciones y dependencias

| ID | Suposición o dependencia | Dueño propuesto para confirmar | Fecha de confirmación | Estado | Qué ocurre si no se cumple |
|---|---|---|---|---|---|
| S-01 | El negocio continuará operando en un solo local durante el alcance de esta versión. | Propietario | Por acordar | Por confirmar | Revisar el alcance si se abre otra sede. |
| S-02 | El propietario y el panadero podrán revisar y validar la lógica de sugerencia de producción. | Propietario y panadero principal | Por acordar | Por confirmar | Mantener la sugerencia como pendiente y no aprobar su regla de cálculo. |
| S-03 | La información histórica de ventas será suficiente para calcular sugerencias con las últimas cuatro semanas cuando exista ese periodo de datos. | Equipo del proyecto y propietario | Por acordar | Por confirmar | Definir cómo se presenta el resultado cuando aún no haya cuatro semanas completas. |
| S-04 | El propietario podrá consultar y utilizar el reporte semanal para tomar decisiones sobre el catálogo. | Propietario | Por acordar | Por confirmar | Revisar la utilidad del reporte y el flujo de decisión. |
| D-01 | La disponibilidad de un equipo en la zona de producción condiciona la posible consulta de ventas por el panadero (RP-01). | Propietario | Por acordar | Pendiente | No incluir RP-01 hasta verificar el dispositivo y su ubicación. |
| D-02 | La definición de si el sistema reemplaza o acompaña la registradora actual depende de una decisión del propietario y la cajera. | Propietario y cajera | Por acordar | Pendiente | Especificar operación en paralelo como alternativa temporal solo después de validación. |

Las fechas se dejan “por acordar” porque no aparecen confirmadas en los insumos disponibles. El equipo debe asignar fechas reales y registrar la confirmación.

## 2.6 Requisitos aplazados y asuntos por resolver

| ID | Asunto | Motivo de aplazamiento | Responsable propuesto | Fecha | Tratamiento temporal |
|---|---|---|---|---|---|
| A-01 | RP-01: consulta de ventas del día por el panadero. | Propuesta aún no aprobada; falta confirmar dispositivo en producción. | Propietario y equipo | Por acordar | Mantener el proceso actual de comunicación entre cajera y panadero. |
| A-02 | RP-02: marcar productos agotados con producto y hora. | Propuesta pendiente de alcance y de definición de su relación con CU-01. | Propietario, cajera y equipo | Por acordar | Continuar con el aviso verbal o anotación actual, según el proceso vigente. |
| A-03 | RP-03: registrar sobrantes por producto. | Propuesta pendiente de aprobación y definición de responsable de captura. | Propietario y panadero | Por acordar | Mantener el conteo actual del sobrante sin afirmar que el sistema lo registra. |
| A-04 | Decidir si la registradora actual se conserva en paralelo o se reemplaza. | Pregunta abierta PE-04. | Propietario y cajera | Por acordar | No asumir reemplazo hasta tener decisión explícita. |
| A-05 | Incorporar identificadores RF/RNF del SRS de Unidad 4. | El equipo de procesos dejó esta incorporación pendiente (PE-09). | Equipo | Antes de aprobar LB-0.5 | Mantener trazabilidad por HU/CU/metas y no inventar IDs de requisitos. |

La aprobación de estos asuntos debe quedar registrada por escrito. Un asunto aplazado no se convierte automáticamente en requisito comprometido.

**Vista previa:** `diagramas/contexto-sistema.svg`.
