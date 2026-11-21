## 2. Inspección formal del paquete

### 2.1 Roles propuestos

| Rol | Responsable asignado para la revisión del equipo | Función |
|---|---|---|
| Autor/editor | Integrante que consolide los archivos 22–26 | Explica el documento; no modera la inspección |
| Moderador | Integrante distinto del autor | Controla agenda, criterios de entrada y cierre |
| Lector | Integrante distinto del autor | Parafrasea requisitos y casos de uso |
| Registrador | Integrante distinto del autor | Registra hallazgos HR-nn |
| Inspectores | Al menos otro integrante y, si es posible, un usuario del negocio | Revisan requisitos, lógica y uso real |

Los nombres personales no se asignan ficticiamente. El equipo debe distribuir estos roles al realizar la reunión.

### 2.2 Lista de verificación

| Control | Criterio | Estado de revisión documental |
|---|---|---|
| IDs únicos | Ningún RF/RNF/RN/CU/HU/AC/FP/MSG se repite | Diseñado para cumplir; ejecutar verificador antes de publicar |
| Atomicidad | Un resultado por requisito | Revisado durante redacción |
| EARS | Plantilla coherente con el disparador | Revisado en 22 |
| Medibilidad | RNF tiene umbral y método | Revisado en 22 |
| CU completos | Actor, precondición, garantías, flujo y extensiones | Revisado en 23 |
| Criterios verificables | Given/When/Then con datos concretos | Revisado en 23 |
| Reglas | Fuente, identificador y condición inequívoca | Revisado en 24; supuestos explícitos |
| Pantallas | Campos, acciones, mensajes, permisos y estados | Revisado en 24 |
| Trazabilidad | Necesidad a verificación | Revisado en 25 |
| Honestidad | No se declaran pruebas o aprobaciones inexistentes | Cumple: se identifican como pendientes de ejecución |

### 2.3 Registro inicial de hallazgos

Estos son hallazgos preventivos de revisión documental, no defectos observados en una implementación.

| ID | Severidad | Hallazgo | Resolución propuesta |
|---|---|---|---|
| HR-01 | Mayor | No se dispone en el README público del detalle de entrevistas ni respuestas originales del dueño. | Mantener supuestos explícitos y contrastarlos con `02-elicitacion/` antes de congelar línea base aceptada. |
| HR-02 | Mayor | El factor 1,10 de sugerencia de producción no tiene evidencia empírica del negocio. | Validarlo con panadero y dueño; dejar configurable. |
| HR-03 | Mayor | El registro simplificado de inventario puede no reflejar mermas, recetas ni producción en proceso. | Validar si el MVP requiere control por unidades o por ingredientes. |
| HR-04 | Menor | El periodo de 7 días puede no representar estacionalidad semanal o festiva. | Mantenerlo como versión inicial y evaluar comparación 4 semanas. |
| HR-05 | Menor | La especificación de medio de pago es informativa y no concilia pagos reales. | Confirmar que no se espera integración con datáfono. |
| HR-06 | Menor | La clasificación por cuartil puede marcar productos con volumen bajo por razones estacionales. | Mostrar volumen y periodo; nunca desactivar automáticamente. |
| HR-07 | Menor | Los umbrales de rendimiento no han sido medidos en entorno desplegado. | Ejecutar PT-10 y registrar evidencia antes de afirmar cumplimiento RNF. |

### 2.4 Métricas de inspección

Las métricas reales se calculan al finalizar la reunión: total de hallazgos, mayores, menores, densidad por 100 requisitos, hallazgos corregidos y reabiertos. No se inventan cantidades de defectos cerrados ni tasa de aprobación.
