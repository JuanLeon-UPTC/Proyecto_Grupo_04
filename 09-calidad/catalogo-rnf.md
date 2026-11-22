# Catálogo de requisitos no funcionales (RNF) · ISO/IEC 25010:2023

6 RNF, cubriendo 4 características: Eficiencia de desempeño, Capacidad de interacción, Fiabilidad, Mantenibilidad.

## RNF-001 (ya existe, de la Sesión 2 — se amplía aquí)
- **Característica:** Eficiencia de desempeño
- **Preocupación del interesado:** la Cajera y el Cliente no quieren fila en hora pico
- **Escenario:** hora pico, varias ventas seguidas
- **Métrica:** tiempo entre confirmar el pago y la confirmación al cajero
- **Umbral objetivo:** < 10 s · **mínimo aceptable:** < 15 s
- **Origen del umbral:** meta M1.3 del árbol de metas
- **Método de medición:** demostración, 20 ventas de prueba
- **Responsable de medición:** Soporte técnico externo
- **Prioridad:** Must
- **Trazabilidad:** NI-04 → M1.3 → HU-01 → RNF-001
- **Antes → después:** "el sistema debe ser rápido" → "menos de 10 segundos en el 95 % de los casos, medido en 20 ventas de prueba en hora pico"
- **Estado / versión:** Aprobado / 1.0

## RNF-002 (ya existe, de la Sesión 2 — se amplía aquí)
- **Característica:** Fiabilidad
- **Preocupación del interesado:** Propietario y Soporte técnico no quieren datos corruptos o parciales
- **Escenario:** falla de guardado a mitad de una venta
- **Métrica:** proporción de ventas guardadas parcialmente (debe ser 0)
- **Umbral objetivo:** 0 ventas parciales · **mínimo aceptable:** 0 (no negociable, es garantía mínima del CU)
- **Origen del umbral:** CU-01, garantía mínima
- **Método de medición:** prueba, forzando interrupción a mitad de guardado
- **Responsable de medición:** Soporte técnico externo
- **Prioridad:** Must
- **Trazabilidad:** NI-01 → M1.1 → HU-01 → RNF-002
- **Antes → después:** "nunca debe quedar a medias" → "operación atómica, verificada forzando una interrupción en pruebas"
- **Estado / versión:** Aprobado / 1.1

## RNF-003 (nuevo)
- **Característica:** Eficiencia de desempeño
- **Preocupación del interesado:** el Propietario quiere revisar el reporte sin esperar
- **Escenario:** abrir el reporte semanal de rotación (CU-03) con el catálogo completo
- **Métrica:** tiempo de generación del reporte
- **Umbral objetivo:** < 5 s · **mínimo aceptable:** < 10 s
- **Origen del umbral:** estimación del equipo (sin dato real del negocio) — **marcado como supuesto pendiente de confirmar**
- **Método de medición:** demostración con el catálogo completo simulado
- **Responsable de medición:** Soporte técnico externo
- **Prioridad:** Should
- **Trazabilidad:** NI-03 → M3.1 → HU-03 → RF-006 → RNF-003
- **Antes → después:** "el reporte debe cargar rápido" → "menos de 5 segundos con el catálogo completo"
- **Estado / versión:** Propuesto / 1.0

## RNF-004 (nuevo)
- **Característica:** Capacidad de interacción
- **Preocupación del interesado:** el Panadero no tiene experticia técnica (ver SRS, 2.3)
- **Escenario:** primera vez que el panadero usa la pantalla de sugerencia del día (CU-02)
- **Métrica:** ¿completa el ajuste sin ayuda externa?
- **Umbral objetivo:** completa sin ayuda tras 10 minutos de explicación inicial · **mínimo aceptable:** tras 20 minutos
- **Origen del umbral:** característica de usuario 2.3 del SRS (experticia básica)
- **Método de medición:** demostración con el panadero (simulado)
- **Responsable de medición:** Propietario
- **Prioridad:** Should
- **Trazabilidad:** NI-02 → M2.1/M2.2 → HU-02a/HU-02b → RF-004/RF-005 → RNF-004
- **Antes → después:** "debe ser fácil de usar" → "completa el ajuste sin ayuda tras 10 minutos de explicación"
- **Estado / versión:** Propuesto / 1.0

## RNF-005 (nuevo)
- **Característica:** Fiabilidad
- **Preocupación del interesado:** CU-03 necesita 8 semanas de historial para calcular rotación; Soporte técnico no quiere perder ese histórico
- **Escenario:** reinicio inesperado del dispositivo de caja
- **Métrica:** semanas de histórico de ventas conservadas
- **Umbral objetivo:** 0 semanas perdidas · **mínimo aceptable:** 0 (es prerrequisito de CU-03)
- **Origen del umbral:** CU-03, precondición (necesita 4-8 semanas de datos)
- **Método de medición:** prueba, simulando un reinicio
- **Responsable de medición:** Soporte técnico externo
- **Prioridad:** Must
- **Trazabilidad:** NI-03 → M3.1 → HU-03 → RF-006 → RNF-005
- **Antes → después:** "no se debe perder el histórico" → "0 semanas perdidas ante un reinicio, verificado simulándolo"
- **Estado / versión:** Aprobado / 1.0

## RNF-006 (nuevo)
- **Característica:** Mantenibilidad
- **Preocupación del interesado:** Soporte técnico externo mantiene el sistema sin tocar código
- **Escenario:** el negocio decide cambiar el umbral de 25 % de rotación baja (RN-03)
- **Métrica:** ¿el cambio requiere modificar código fuente?
- **Umbral objetivo:** el umbral es un valor de configuración, no código · **mínimo aceptable:** igual (no hay rango intermedio aceptable)
- **Origen del umbral:** RN-03 (Unidad 5, Sesión 5)
- **Método de medición:** inspección del diseño cuando se construya
- **Responsable de medición:** Soporte técnico externo
- **Prioridad:** Could
- **Trazabilidad:** NI-03 → M3.1 → HU-03 → RF-006 → RNF-006
- **Antes → después:** "debe ser fácil de mantener" → "el umbral del 25 % es configurable, no está en el código"
- **Estado / versión:** Propuesto / 1.0

## Tensión documentada

**RNF-001 (velocidad) vs. RNF-002 (fiabilidad):** garantizar que el guardado sea atómico (RNF-002) puede costar unos milisegundos extra frente a un guardado sin esa garantía, lo que podría acercar el tiempo al límite de RNF-001 (10 s). **Decisión:** se prioriza la fiabilidad sobre la velocidad marginal — perder o duplicar una venta es peor que medio segundo adicional. **Decidido por:** Propietario (simulado), porque es quien asume el costo de un error de caja.
