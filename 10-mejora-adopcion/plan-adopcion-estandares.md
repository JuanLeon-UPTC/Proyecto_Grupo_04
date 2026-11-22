# Plan de adopción de estándares · v0.9

Proyecto Grupo 04 — Sistema de registro de ventas (Panadería El Arte de Amar)
2026-11-15

## 1. Estándares adoptados (consolidado de la Sesión 1)

| Estándar | Edición verificada | Decisión | Fuente |
|---|---|---|---|
| ISO/IEC/IEEE 29148 | 2018 | Aplica (parcial: solo SRS, no StRS/SyRS separados) | `06-estandares-mapa/matriz-aplicabilidad.md` |
| IEEE Std 830 | 1998 (reemplazado) | Parcial — se usa su estructura de secciones | ídem |
| ISO/IEC 25010 | 2023 | Aplica | ídem |
| ISO/IEC 29110 | — | Aplica (mínimo viable, equipo de 3 personas) | ídem |
| ISO 9001, ISO/IEC/IEEE 90003, ISO/IEC/IEEE 15288, CMMI V3.0 | — | No aplica | ídem |
| Ley 1581 de 2012 | — | Se cumple (mínimo: dato del empleado) | ídem |
| Resolución DIAN 000165 de 2023 | — | No aplica — fuera de alcance declarado | ídem |

Todas las ediciones se verificaron contra la descripción de la guía del curso, no contra el texto oficial de pago de cada estándar (ver `06-estandares-mapa/fuentes.md`).

## 2. Reglas derivadas que el equipo sigue

- Cada requisito se redacta en formato EARS, con ficha de identificación, origen, gestión y verificación (`08-requisitos-29148/fichas/`).
- Cada RNF se cataloga solo si su característica ISO 25010 obtiene ≥9 puntos o al menos un 3 en la matriz de relevancia (`09-calidad/matriz-relevancia.md`).
- Cada caso de uso y cada requisito llevan identificador estable (CU-nn, RF-nnn, RNF-nnn) que nunca se reutiliza.
- Los diagramas se versionan como código (`.puml`) en el repositorio, no como imágenes sueltas (adoptado desde Unidad 5).

## 3. Capacidad objetivo

Según `autoevaluacion-capacidad.md`, el equipo no alcanza aún el Nivel 1 completo (falta R4, validación real). La capacidad objetivo para el cierre del curso es: **Nivel 1 completo** (los cuatro indicadores R1-R4 en F) — no se apunta a Nivel 2 ni 3 completos, porque eso exigiría un plan de comunicación y una definición de proceso propia que exceden el alcance de un proyecto académico de un semestre.

## 4. Calendario de revisión

| Hito | Fecha | Responsable |
|---|---|---|
| Revisar si R4 puede subir a F (validación con interesado real, si el proyecto se usa fuera del curso) | Fuera del alcance de este semestre | Juan |
| Repasar el flujo de PR con el equipo (brecha D3) | Antes de empezar Unidad 6 | Juan |
| Actualizar este plan con lo que agregue la Unidad 7 (SRS integrador) | Al cerrar Unidad 7 | Equipo completo |

## 5. Responsables
Juan consolida y mantiene este plan. Emanuel y Santiago revisan cada entrega por pull request, como en el resto del proyecto.

## 6. Limitación declarada

Este plan **no incluye** la revisión entre equipos del curso (rúbrica de otro equipo) que pide la actividad de esta sesión — requiere coordinación con otro equipo real de la clase, algo que no se puede generar desde este repositorio. Ver `revision-recibida.md` para el detalle de este límite. El plan queda en **v0.9** por esta razón: la guía indica que se publica como v1.0 solo después de responder los hallazgos de esa revisión externa.
