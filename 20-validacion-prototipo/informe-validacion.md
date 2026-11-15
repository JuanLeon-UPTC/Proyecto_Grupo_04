# Informe de validación · Unidad 6

## Hallazgos (8, PR-nn)

| ID | Hallazgo | Causa probable | Recomendación | Decisión |
|---|---|---|---|---|
| PR-01 | Cancelar venta no pide confirmación | Falta un diálogo de confirmación | Confirmar antes de cancelar | **Cambiar el prototipo** (v0.2) |
| PR-02 | Aviso "Reintentando…" poco visible | Solo texto, sin refuerzo visual fuerte | Ya usa el token de advertencia correcto | No cambiar — menor |
| PR-03 | El aviso de éxito desaparece en un tiempo fijo | Timeout fijo de 800 ms | Dejarlo configurable en una iteración futura | Diferir |
| PR-04 | Participante C necesitó una pista sobre el cuaderno de contingencia | El mensaje de error no menciona la acción de forma explícita | Reforzar el texto de M-12 | **Cambiar el requisito** (RF-011 nuevo) y el prototipo |
| PR-05 | Participante B tardó 13 s (cerca del límite de RNF-008) | Primera vez usando el formulario | Considerar ayuda inicial en una iteración futura | Diferir |
| PR-06 | No existe "quitar línea" en v0.1, aunque CU-01 extensión 1b lo pide | Quedó fuera del alcance de la ficha de la Sesión 4 | Agregarlo | **Cambiar el prototipo** (v0.2) |
| PR-07 | Pregunta de negocio real: ¿el sistema calcula el cambio al pagar? | Ningún CU ni HU lo pide | Declarar explícitamente fuera de alcance | Aclarar el requisito (SRS, 1.2 Alcance) |
| PR-08 | Sin ayuda contextual (heurística 10) | No estaba planeada para v0.1 | — | Descartar — aceptado para un prototipo v0.1 |

## Requisitos nuevos nacidos de la prueba

**RF-010** (Propuesto): CUANDO la cajera cancele una venta con al menos un producto, el sistema deberá pedir confirmación antes de descartarla. [Origen: PR-01]

**RF-011** (Propuesto): el mensaje de error tras una falla de guardado (M-12) deberá indicar explícitamente la acción a seguir ("anótala en el cuaderno de contingencia"), no solo que falló. [Origen: PR-04] *(ya implementado así en el texto de v0.1; la prueba sugiere que el texto necesita más énfasis visual, no solo contenido — se ajusta en v0.2)*

## Comparación con los umbrales de la Sesión 1

| Requisito | Umbral | Resultado | ¿Cumple? |
|---|---|---|---|
| RNF-007 (efectividad) | ≥95 % éxito | 100 % (3/3) en T1 | Sí |
| RNF-008 (eficiencia) | ≤10 s objetivo / ≤15 s mínimo | 8, 9, 13 s | Mínimo cumplido; objetivo cumplido en 2/3 |
| RNF-010 (satisfacción, SUS) | ≥70 objetivo / ≥50 mínimo | 77.5 promedio | Sí, cumple el objetivo |

**Cautela:** 3 participantes simulados no alcanzan el poder estadístico de una muestra real; sirven para encontrar problemas grandes, no para medir con precisión (como advierte la guía).

## Trazabilidad actualizada
Ver `17-pantallas-navegacion/trazabilidad/matriz.md` — se agregan filas para RF-010 y RF-011, ambos trazados a PR-01 y PR-04 respectivamente, pendientes de pantalla (se resuelven en el prototipo v0.2, no requieren pantalla nueva).

## Limitaciones declaradas
- Participantes simulados, no usuarios reales del negocio.
- Evaluación heurística con el equipo del mismo proyecto, no con un evaluador de otro equipo (la guía lo sugiere; no fue posible coordinarlo en el tiempo de esta sesión).
