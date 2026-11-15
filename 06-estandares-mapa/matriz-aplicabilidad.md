# Matriz de aplicabilidad de estándares · Unidad 4, Sesión 1

Proyecto Grupo 04 — Sistema de registro de ventas (Panadería El Arte de Amar)

## Preguntas de contexto

1. **¿Quién pide evidencia de estándares, y para qué?** El docente del curso, para evaluar el proceso de ingeniería de requisitos. No hay cliente ni contrato real que lo exija.
2. **¿Tiene la organización un sistema de gestión de calidad (ISO 9001)?** No. Es un negocio familiar pequeño, sin certificación ni intención de certificarse.
3. **¿Un contrato o licitación exige un estándar específico?** No existe contrato; el único marco que obliga es la rúbrica del curso.
4. **¿Qué produce el equipo en esta fase?** Solo especificación de requisitos (Unidades 3 a 7). No se construye ni se opera software en este curso.
5. **¿Tamaño del equipo y tiempo disponible?** 3 estudiantes, dedicación parcial durante un semestre.
6. **¿Es solo software, o un sistema con hardware/personas/instalaciones?** Es software (sistema de registro de ventas) operado por personas (cajera, panadero, propietario) en un dispositivo de caja; no hay hardware propio del proyecto que especificar.

## Escala de decisión

- **Aplica** — se adopta y se declarará conformidad, total o con adaptaciones.
- **Parcial** — solo se adoptan partes identificadas (procesos, capítulos o métodos puntuales).
- **Referencia** — se consulta para entender o justificar, sin declarar conformidad.
- **No aplica** — no corresponde al proyecto o está reemplazado.

## Matriz

| Estándar | Nivel | Decisión | Justificación |
|---|---|---|---|
| ISO 9000:2015 | Organización | Referencia | Se usa su vocabulario para hablar con un lenguaje común; no se certifica nada |
| ISO 9001:2015 | Organización | No aplica | No hay SGC ni intención de certificarse (pregunta 2) |
| ISO/IEC/IEEE 90003:2018 | Organización | No aplica | Es guía para aplicar ISO 9001 a software; no aplica sin ISO 9001 |
| ISO/IEC/IEEE 12207:2026 | Proceso | Parcial | Se reconoce el proceso de "especificación de requisitos" de su ciclo de vida, pero no se sigue el estándar completo (pregunta 4) |
| ISO/IEC/IEEE 15288 | Proceso | No aplica | Es para sistemas con hardware/instalaciones propias; el proyecto es solo software (pregunta 6) |
| CMMI V3.0 | Proceso | No aplica | Modelo organizacional, desproporcionado para 3 personas (pregunta 5) |
| ISO/IEC 33000 (p. ej. 33001:2015) | Proceso | Parcial | Se usa su lógica de niveles de capacidad para la autoevaluación ligera de la Sesión 5, no una evaluación formal |
| ISO/IEC 29110 | Proceso | Aplica | El equipo es, literalmente, la "entidad muy pequeña" que describe el estándar; se adopta lo mínimo viable (ver Sesión 5) |
| ISO/IEC/IEEE 29148:2018 | Producto de requisitos | Aplica | Es la referencia central del curso para escribir y trazar requisitos |
| IEEE Std 830-1998 | Producto de requisitos | Parcial | Se usa su plantilla de estructura del SRS (secciones 1-3), aunque está reemplazada por 29148 |
| ISO/IEC 25010:2023 | Producto software | Aplica | Catálogo de características de calidad para los RNF (Sesión 4) |
| IEEE Std 1061 | Producto software | Parcial | Se usa su procedimiento de 6 pasos para redactar RNF medibles, no el estándar completo |
| ISO/IEC 9126 | Producto software | No aplica | Reemplazado por ISO/IEC 25010:2023 |

## Normativa legal del dominio (no es un estándar, se cumple, no se adapta)

| Norma | Aplica a | Decisión |
|---|---|---|
| Ley 1581 de 2012 (protección de datos personales) | El dominio solo guarda `Empleado.nombre` como dato personal; ningún dato de Cliente se almacena (confirmado en el modelo de dominio) | Aplica mínimamente — no hay tratamiento de datos de clientes que proteger |
| Resolución DIAN 000165 de 2023 (facturación electrónica) | CU-01 registra ventas; en Colombia, según el régimen tributario del negocio, esto puede implicar factura electrónica | **No aplica — declarada fuera de alcance** |

## Decisión difícil

La más difícil fue **Resolución DIAN (facturación electrónica)**. Ningún CU ni HU del proyecto la menciona, y en principio dependería de un dato que el equipo no tiene (el régimen tributario del negocio simulado). Se decide **no perseguirla**: es un proyecto académico de alcance ya fijado en el acta (4 casos de uso, sin integración con sistemas externos de facturación), y abrir esa puerta ahora significaría rediseñar CU-01 y el modelo de dominio sin que ninguna historia de usuario lo haya pedido. Se declara explícitamente **fuera de alcance**, no como pregunta abierta: si en el futuro el negocio simulado lo necesitara, sería un proyecto nuevo, no una extensión de este.

## Tabla de adaptaciones

| Estándar | Qué se adapta | Por qué |
|---|---|---|
| IEEE 830-1998 | Solo se usa la estructura de secciones (1, 2, 3); no se exige su formato de página ni su lenguaje de 1998 | Es una plantilla, no un contrato con un cliente |
| ISO/IEC/IEEE 29148:2018 | Se usa la ficha de requisito y las 9 pruebas, no el estándar completo (no se producen StRS/SyRS/OpsCon separados) | El proyecto es de alcance pequeño: 4 casos de uso, no un sistema complejo que justifique toda la cadena documental |
| ISO/IEC 29110 | Se adopta solo "lo mínimo viable" (identificador, fuente, prioridad, criterio verificable, estado, trazabilidad) | Así lo indica la propia guía para equipos ágiles pequeños |

## Borrador de declaración de aplicación (v0.1)

> El equipo del proyecto "Sistema de registro de ventas" declara que adopta ISO/IEC/IEEE 29148:2018 y la estructura de IEEE 830-1998 para especificar requisitos, ISO/IEC 25010:2023 para calidad del producto, y los hábitos mínimos de ISO/IEC 29110 para un equipo muy pequeño. No declara conformidad con ISO 9001, ISO/IEC/IEEE 15288 ni CMMI por ser desproporcionados para el tamaño y alcance del proyecto. La aplicabilidad de la Resolución DIAN de facturación electrónica queda pendiente de confirmar con el Propietario (interesado simulado).
