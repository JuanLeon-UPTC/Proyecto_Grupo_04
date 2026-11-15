# Ficha de contexto de uso

Proyecto Grupo 04 — Sistema de registro de ventas. Fuente principal: entrevistas de elicitación (Unidad 3, Sesión 2) a Propietario, Panadero principal y Cajera — mezcla de conversación real (agosto de 2026) y respuestas simuladas con permiso del docente.

## 1. Usuarios
| Usuario | Experiencia en el rol | Relación con la tecnología |
|---|---|---|
| Cajera | 2 años | Usa celular personal, pero no durante la atención ("tengo las manos ocupadas con el pedido") [fuente: entrevista cajera] |
| Panadero principal | 6 años | Tiene celular pero no lo usa con masa en las manos [fuente: entrevista panadero] |
| Propietario | 8 años con el negocio | Sin herramientas digitales hoy; decide "a ojo" [fuente: entrevista propietario] |

## 2. Tareas y objetivos
- Cajera: cobrar rápido sin fila, cerrar caja sin que tome más de media hora [fuente: entrevista cajera, "el cierre... cuando uno ya está cansado"]
- Panadero: decidir cuánto producir sin quedarse corto ni sobrar [fuente: entrevista panadero]
- Propietario: saber qué productos ya no vale la pena hacer [fuente: entrevista propietario]

## 3. Equipo
**Hallazgo que corrige el SRS:** el equipo actual es una **caja registradora mecánica**, no un computador [fuente: entrevista cajera, "la registradora es la de siempre"]. Se corrigió la restricción 2.4 del SRS (Unidad 4): el proyecto asume un dispositivo nuevo (tablet o computador básico), no la reutilización de la registradora actual.

## 4. Entorno físico
- Zona de caja: alto tráfico 7-9 a. m. y ~4 p. m., con fila [fuente: entrevista cajera, "sí, casi todos los días de 7 a 9"]
- Zona de producción: el panadero trabaja con las manos en la masa, cerca de hornos calientes, sin ver el mostrador [fuente: entrevista panadero, "yo no veo el mostrador desde acá"]
- **Supuesto sin confirmar:** el horno tiene una capacidad máxima por tanda [fuente: entrevista panadero, "el horno solo aguanta cierta cantidad por tanda. Eso limita lo que se puede hacer de última hora"] — no estaba registrado en ningún CU anterior; ver `pendientes.md`.

## 5. Entorno social y organizacional
Negocio familiar pequeño, sin personal de TI. El propietario decide el alcance, pero el panadero exige mantener su autonomía: "que me sugieran y yo decido" [fuente: entrevista panadero] — confirma que CU-02 debe seguir siendo una *sugerencia*, nunca una orden automática.
