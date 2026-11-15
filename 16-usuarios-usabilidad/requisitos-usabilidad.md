# Requisitos de usabilidad medibles

Fórmula de seis partes: tarea, usuario, contexto, medida, umbral (objetivo/mínimo), método de verificación.

## RNF-007 · Efectividad en el registro de venta
- **Tarea:** cobrar una venta de 2 productos | **Usuario:** Cajera | **Contexto:** hora pico, primera semana de uso
- **Medida:** tasa de éxito (venta completada sin error)
- **Umbral:** objetivo ≥95 % · mínimo aceptable ≥90 %
- **Origen del umbral:** riesgo/consecuencia — un error en caja afecta dinero real
- **Verificación:** prueba de usabilidad moderada (Unidad 6, Sesión 5)

## RNF-008 · Eficiencia en el registro de venta
- **Tarea:** cobrar una venta de 2 productos | **Usuario:** Cajera | **Contexto:** hora pico
- **Medida:** tiempo y número de toques
- **Umbral:** objetivo ≤10 s / ≤4 toques · mínimo aceptable ≤15 s (consistente con RNF-001, Unidad 4)
- **Origen del umbral:** meta M1.3 del árbol de metas
- **Verificación:** prueba de usabilidad moderada

## RNF-009 · Eficiencia en el ajuste de producción
- **Tarea:** ajustar la cantidad sugerida del día | **Usuario:** Panadero principal | **Contexto:** manos limpias, antes de la última tanda
- **Medida:** tiempo para completar el ajuste
- **Umbral:** objetivo ≤2 min · mínimo aceptable ≤5 min
- **Origen del umbral:** línea base AS-IS — hoy lo decide "a ojo" en segundos; si el sistema es más lento, PER-02 ha dicho explícitamente que no lo usaría [EV-02]
- **Verificación:** prueba de usabilidad moderada

## RNF-010 · Satisfacción al revisar el reporte semanal
- **Tarea:** revisar el reporte de rotación y decidir | **Usuario:** Propietario | **Contexto:** cierre de semana
- **Medida:** cuestionario SUS (System Usability Scale)
- **Umbral:** objetivo SUS ≥70 · mínimo aceptable ≥50
- **Origen del umbral:** benchmark interno de la industria para SUS (umbral estándar de "aceptable")
- **Verificación:** cuestionario SUS, Unidad 6 Sesión 5

## RNF-011 · Accesibilidad
> El sistema deberá permitir completar el registro de una venta (CU-01) usando solo el teclado, con el foco visible en cada campo, siguiendo WCAG 2.1 nivel AA **(nivel por confirmar según presupuesto del negocio)**.

- **Trazabilidad:** DOL-01 → RNF-007/008 → RNF-011
- **Verificación:** inspección en la Sesión 4 (prototipo funcional), checklist de accesibilidad

## RNF-012 · Adaptabilidad
> El sistema deberá mostrarse sin desplazamiento horizontal en una pantalla de al menos 7 pulgadas, consistente con el dispositivo nuevo de bajo costo asumido en `contexto-uso.md`.

- **Trazabilidad:** corrección de la restricción 2.4 del SRS (Unidad 4) → RNF-012
- **Verificación:** inspección visual del prototipo a 360 px de ancho mínimo (Sesión 4)
