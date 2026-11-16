# Checklist de revisión del SRS-PAN-001
## Revisión simulada y propuesta de correcciones

**Versión revisada:** 0.1  
**Fecha propuesta para revisión:** 19/11/2026  
**Estado:** simulación predictiva; no constituye evidencia de una revisión humana ya realizada.


## 1. Identificación de la revisión

- Autor / integrador: integrante que prepare la versión final del SRS.
- Revisor sugerido: un integrante distinto del autor; por ejemplo, Juan León (@JuanLeon-UPTC), si no es el autor de esta versión.
- Fuentes que deben contrastarse: acta de constitución, entrevistas, árbol de metas, HU-01 a HU-03, CU-01 a CU-03, `hallazgos-brechas` y SRS de Unidad 4.
- Método: lectura del documento completo y comparación con las fuentes; registrar solo hallazgos que el revisor confirme.

## 2. Hallazgos previstos

| ID | Ubicación | Propiedad | Hallazgo previsto | Severidad | Resolución propuesta | Estado |
|---|---|---|---|---|---|---|
| H-01 | 1.2.1, D-02 | Verificable | “Conservar información histórica” no fija por sí solo qué datos quedan guardados ni durante cuánto tiempo. | Mayor | Remitir los campos al requisito detallado de CU-01/RF correspondiente y dejar la retención como decisión pendiente si no aparece en las fuentes. | Corregido en redacción; detalle pendiente de sección 3. |
| H-02 | 1.2.1, D-03 y 2.5, S-03 | Consistente | La sugerencia usa cuatro semanas de ventas, pero el documento debe explicar qué ocurre si aún no hay cuatro semanas completas. | Mayor | Declarar el caso de datos insuficientes como pendiente de especificación y no inventar un valor alternativo. | Pendiente de decisión funcional. |
| H-03 | 1.2.3, PD-01 a PD-03 | Completo | Las propuestas RP-01, RP-02 y RP-03 podrían confundirse con alcance aprobado si se leen rápidamente. | Mayor | Mantenerlas en una lista separada “por decidir”, etiquetarlas como propuestas y excluirlas de la lista de funciones comprometidas. | Corregido en estructura. |
| H-04 | 1.4 | Trazable | Se cita el SRS de Unidad 4 como referencia pendiente, pero no se identifica versión ni se enlazan los RF/RNF existentes. | Mayor | Incorporar el archivo y completar la matriz de trazabilidad antes de aprobar la línea base. | Abierto por falta de fuente incorporada. |
| H-05 | 2.1, diagrama de contexto | Correcto | El diagrama debe evitar representar como interacción confirmada la consulta del panadero si RP-01 sigue pendiente. | Mayor | Mostrar actores e interacciones confirmadas; mantener RP-01, RP-02 y RP-03 fuera del flujo comprometido o con nota explícita. | Corregido en diagrama de contexto. |
| H-06 | 2.3 | Consistente | Cliente, soporte técnico y DIAN aparecen como interesados en el proyecto, pero no necesariamente son usuarios directos. | Menor | Mantener como usuarios directos solo propietario, panadero y cajera; describir los demás como interesados externos. | Corregido en redacción. |
| H-07 | 2.4, R-03 | Trazable | “El registro debe integrarse al flujo de atención” es una restricción general y su fuente debe quedar asociada a CU-01 y entrevistas. | Menor | Conservar la referencia a entrevista/CU-01 y trasladar el comportamiento verificable a requisitos detallados. | Corregido en fuente. |
| H-08 | 2.5 y 2.6 | Completo | Los supuestos y pendientes deben tener responsable y fecha; “por acordar” no sirve como compromiso final. | Menor | Proponer responsables por rol y fechas objetivo; sustituirlas por fechas aceptadas por el equipo/propietario. | Parcial: fechas propuestas, requieren confirmación. |
| H-09 | 2.6 / CU-03 | Consistente | En `hallazgos-brechas` aparece una regla de rotación que combina ocho semanas de análisis, cuatro semanas con datos y cuatro semanas consecutivas bajo el 25%; debe contrastarse con el CU-03 original. | Mayor | Mantener la regla solo si el caso de uso la confirma; aclarar ventana, condición y población de comparación en un único requisito. | Abierto hasta cotejar CU-03 y SRS Unidad 4. |
| H-10 | 1.2.2 | Completo | La exclusión de inventario de insumos podría confundirse con el registro de sobrantes de producto terminado. | Menor | Diferenciar inventario de materias primas (excluido) del posible registro de sobrantes de producto terminado (RP-03, por decidir). | Corregido en redacción. |

## 3. Resumen previsto

- Hallazgos previstos: 10.
- Mayores previstos: 6.
- Menores previstos: 4.
- Correcciones editoriales propuestas: H-03, H-05, H-06, H-07 y H-10.
- Asuntos que requieren confirmación o fuente adicional: H-01, H-02, H-04, H-08 y H-09.
- Resultado de la simulación: el borrador puede continuar a validación del equipo, pero **no debe declararse línea base aprobada** hasta resolver los hallazgos mayores y completar la revisión independiente.

## 4. Segundo pase real

| Campo | Dato |
|---|---|
| Nombre / usuario del revisor | Pendiente |
| Fecha de revisión real | Pendiente |
| Hallazgos confirmados | Pendiente |
| Hallazgos descartados y razón | Pendiente |
| Correcciones verificadas | Pendiente |
| Aprobación del revisor | Pendiente |

**Instrucción al equipo:** el integrante revisor debe modificar la tabla según lo que compruebe. Si un hallazgo no existe, marcarlo como descartado y explicar por qué; no conservarlo solo para completar un número.
