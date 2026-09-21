# Proyecto Grupo 04 · Panadería-cafetería

Trabajo de **Ingeniería de Requisitos** (UPTC · Facultad de Ingeniería · 2026), Unidad 3: Técnicas y herramientas en Ingeniería de Requisitos.

## El proyecto

Levantamiento, especificación, priorización y validación de requisitos de software para una **panadería-cafetería de barrio**.

**Contexto del negocio** (charla real con el propietario)

- 8 años de operación, un solo local, capacidad para unas 20 personas.
- Operación totalmente manual: registradora no electrónica, sin facturación electrónica ni reportes de ventas.
- Inventario: conteo semanal manual, sin alertas de insumos por agotarse y sin costeo exacto por unidad.
- Producción: se decide "a ojo" con el promedio de ventas.
- Catálogo: los productos se descontinúan "al tanteo", sin datos que respalden la decisión.
- Sin domicilios, sin redes sociales y sin registro de clientes frecuentes.

**Sistema a especificar:** un sistema de apoyo a las decisiones de producción y de catálogo. Registra las ventas por producto, sugiere cuánto producir cada día y señala los productos de baja rotación para decidir cuáles descontinuar. El objetivo y el alcance están en el acta de constitución (`01-kickoff/acta-constitucion.docx`).

## Equipo

| Integrante | Usuario de GitHub |
|---|---|
| Juan Leon | [@JuanLeon-UPTC](https://github.com/JuanLeon-UPTC) |
| Emanuel Caro | [@emanuel-caro](https://github.com/emanuel-caro) |
| Javier Santiago Jimenez | [@semillita23](https://github.com/semillita23) |

## Stakeholders

Identificados con mapeo organizacional y bola de nieve, y puntuados en la matriz de poder-interés (`01-kickoff/matriz-poder-interes.docx`).

| Stakeholder | Categoría | Cuadrante |
|---|---|---|
| Dueño del negocio (real) | Patrocinador y alta dirección | Gestionar de cerca |
| Panadero principal (ficticio) | Usuario / operador directo | Gestionar de cerca |
| Cajera (ficticia) | Usuario / operador directo | Mantener informado |
| Cliente (ficticio) | Usuario final afectado | Monitorear |
| Soporte técnico externo (ficticio) | Área técnica | Monitorear |
| DIAN (ente de control externo) | Ente regulador o de control | Mantener satisfecho |

Las personas marcadas como *ficticias* se inventaron, con autorización del docente, para completar el análisis de las guías.

## Estructura del repositorio

| Carpeta / archivo | Sesión | Contenido |
|---|---|---|
| `CONTRIBUCIONES.md` | Todas | Bitácora de quién aportó qué en cada sesión |
| `01-kickoff/` | 1 | Matriz de poder-interés y acta de constitución |
| `02-elicitacion/` | 2 | Guía de entrevista, cuestionario y observación o análisis documental |
| `03-especificacion/` | 3 | Especificación de requisitos |
| `04-priorizacion/` | 4 | Priorización (`backlog.md`) |
| `05-validacion/` | 5 | Validación de requisitos |

## Cómo trabajamos

1. Cada entrega es un **pull request** desde una rama propia. Nunca se hace push directo a `main`.
2. Cada integrante hace **al menos un commit propio por sesión**, con su propio usuario.
3. **Nadie aprueba su propio PR**: otro integrante lo revisa y comenta antes de fusionar.
4. `CONTRIBUCIONES.md` se actualiza en cada sesión.
5. Si se usó IA para transcribir, resumir, filtrar o agrupar datos, se declara en el propio documento y se indica qué se verificó a mano.
6. El repositorio es público: no se publican datos personales reales (nombres, teléfonos o correos del dueño o de empleados). Las personas del negocio que se inventaron para completar el análisis, con autorización del docente, se marcan como **ficticias**.
