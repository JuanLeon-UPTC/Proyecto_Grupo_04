# Decisiones de estructura del SRS
## Tailoring para el Sistema de registro de ventas — El Arte de Amar

**Documento base:** esquema completo de SRS trabajado en la Unidad 7, Sesión 1.  
**Estado:** propuesta para aprobación del equipo.

| Apartado | Decisión | Justificación |
|---|---|---|
| Portada, identificación y control de versiones | Conservar | Permite identificar el documento, su versión y estado de aprobación. |
| 1. Introducción | Conservar | Es necesaria para que los lectores conozcan propósito, alcance y referencias. |
| 1.1 Propósito | Conservar | Explica para qué se utilizará el SRS y quiénes lo consultan. |
| 1.2 Alcance | Conservar y ampliar | Se separa en dentro, fuera y por decidir para evitar alcance implícito. |
| 1.3 Definiciones y acrónimos | Conservar | Evita interpretaciones distintas de términos del negocio y del proyecto. |
| 1.4 Referencias | Conservar | Permite rastrear las fuentes previas del repositorio. |
| 1.5 Visión general | Conservar | Explica cómo se organiza el documento. |
| 2. Descripción general | Conservar | Contextualiza el producto antes de detallar requisitos. |
| 2.1 Perspectiva del producto | Renombrar ligeramente como “Perspectiva del producto y contexto” | Hace explícita la relación del sistema con el negocio y con actores externos. |
| 2.2 Funciones del producto | Conservar | Resume capacidades sin reemplazar los requisitos detallados de la sección 3. |
| 2.3 Características de los usuarios | Conservar | Distingue usuarios directos de otros interesados. |
| 2.4 Restricciones | Conservar y estructurar en tabla | Cada restricción debe tener fuente y efecto. |
| 2.5 Suposiciones y dependencias | Conservar y ampliar | Se agregan dueño, fecha, estado y consecuencia si no se cumple. |
| 2.6 Aplazados y asuntos por resolver | Agregar | El proyecto tiene propuestas aún no aprobadas y decisiones abiertas que deben quedar visibles. |
| 3. Requisitos específicos | Conservar y organizar por grupos funcionales | Facilita la lectura por capacidades y mantiene la trazabilidad con metas, HU y CU. |
| Apéndices | Conservar | Permiten consultar glosario, matrices, reglas y catálogos sin duplicar el cuerpo principal. |

## Organización propuesta de la sección 3

La dimensión principal será la **funcionalidad del sistema**. La propuesta inicial de grupos es:

1. Registro y consulta de ventas.
2. Sugerencia, revisión y confirmación de producción.
3. Reporte de rotación y apoyo a decisiones del catálogo.

Cada requisito conservará el identificador original que tenga en el SRS previo. Las historias HU-01 a HU-03 y los casos CU-01 a CU-03 se usarán como trazabilidad, no como sustitutos de los requisitos formales.

Las demás dimensiones (usuario, prioridad, fuente, criterio de aceptación, datos y reglas) se manejarán como atributos o vistas de los requisitos, no como ejes alternos de organización. Esto evita repetir el mismo requisito en varios lugares.

## Apéndices propuestos

- A. Glosario ampliado.
- B. Matriz de trazabilidad (metas → HU → CU → RF/RNF).
- C. Catálogo de reglas de negocio y parámetros.
- D. Registro de pendientes y decisiones de alcance.
- E. Evidencias de validación y revisión, cuando existan.

## Decisiones que debe aprobar el equipo

- Confirmar los nombres definitivos de los grupos funcionales de la sección 3.
- Incorporar el SRS de la Unidad 4 para conservar sus identificadores RF/RNF.
- Aprobar o rechazar RP-01, RP-02 y RP-03 con el propietario.
