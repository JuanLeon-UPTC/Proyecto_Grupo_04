# Proyecto Grupo 04 · Panadería-cafetería

Trabajo de **Ingeniería de Requisitos** (UPTC · Facultad de Ingeniería · 2026), Unidad 3: Técnicas y herramientas en Ingeniería de Requisitos.

## El proyecto

Levantamiento, especificación, priorización y validación de requisitos de software para una **panadería-cafetería de barrio**.

**Contexto del negocio**

- 8 años de operación, un solo local, capacidad para unas 20 personas.
- Operación totalmente manual: registradora no electrónica, sin facturación electrónica ni reportes de ventas.
- Inventario: conteo semanal manual, sin alertas de insumos por agotarse y sin costeo exacto por unidad.
- Producción: se decide "a ojo" con el promedio de ventas.
- Catálogo: los productos se descontinúan "al tanteo", sin datos que respalden la decisión.
- Sin domicilios, sin redes sociales y sin registro de clientes frecuentes.

**Sistema a especificar:** un sistema de registro de ventas por producto que permita decidir, con datos, cuánto producir cada día y qué productos descontinuar (acta de constitución, en `01-kickoff/`).

## Equipo

| Integrante | Usuario de GitHub |
|---|---|
| Juan León | [@JuanLeon-UPTC](https://github.com/JuanLeon-UPTC) |
| Emanuel Caro | [@emanuel-caro](https://github.com/emanuel-caro) |
| Javier Santiago Becerra Jiménez | [@semillita23](https://github.com/semillita23) |

## Stakeholders

Identificados en la Sesión 1 y clasificados con la matriz de poder-interés (`01-kickoff/matriz-poder-interes.pdf`): dueño del negocio, panadero principal, cajera, cliente, soporte técnico externo y DIAN (ente de control externo).

## Estructura del repositorio

| Carpeta / archivo | Sesión | Contenido |
|---|---|---|
| `CONTRIBUCIONES.md` | Todas | Bitácora de quién aportó qué en cada sesión |
| `01-kickoff/` | 1 | Matriz de poder-interés y acta de constitución |
| `02-elicitacion/` | 2 | Trawling, entrevistas, cuestionario y análisis documental |
| `03-especificacion/` | 3 | Árbol de metas, historias de usuario y casos de uso |
| `04-priorizacion/` | 4 | Priorización del backlog |
| `05-validacion/` | 5 | Validación de requisitos |

## Cómo trabajamos

1. Cada entrega es un **pull request** desde una rama propia, hacia `main`. `main` está protegida: no se le puede hacer push directo.
2. Cada integrante hace **al menos un commit propio por sesión**, con su propio usuario.
3. **Nadie aprueba su propio PR**: otro integrante lo revisa y comenta antes de fusionar.
4. Los documentos del proyecto se suben en **PDF**, con su código **SHA-256** en la descripción del PR (no dentro del documento). Los `.docx` originales se conservan solo en el equipo, no se publican en el repositorio.
5. Al fusionar se usa siempre **Create a merge commit**; las ramas no se eliminan, quedan como registro.
6. `CONTRIBUCIONES.md` se actualiza en cada sesión.
7. Si se usó IA para transcribir, resumir, filtrar o agrupar datos de campo (entrevistas, cuestionario), se declara en el propio documento y se indica qué se verificó a mano.
