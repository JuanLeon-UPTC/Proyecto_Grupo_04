# Acta del taller de alcance del SRS-PAN-001
## Escenario previsto para discusión y validación

## 1. Datos generales propuestos

- Proyecto: Sistema de registro de ventas — Panadería-cafetería El Arte de Amar.
- Fecha sugerida: viernes 20 de noviembre de 2026.
- Hora sugerida: 10:00 a. m. – 11:15 a. m.
- Lugar sugerido: local de la panadería, en un momento de baja afluencia.
- Participantes previstos:
  - Propietario (nombre por confirmar).
  - Panadero principal (nombre por confirmar).
  - Cajera (nombre por confirmar).
  - Juan León (@JuanLeon-UPTC), integrante del equipo.
  - Emanuel Caro (@emanuel-caro), integrante del equipo.
  - Javier Santiago Becerra Jiménez (@semillita23), integrante del equipo.
- Facilitador sugerido: Emanuel Caro.
- Relator sugerido: Javier Santiago Becerra Jiménez.
- Evidencia: fotografía del tablero/ficha y confirmación posterior de los participantes (pendiente).

## 2. Objetivo y orden del día

1. Explicar el propósito del SRS y el objetivo del taller.
2. Leer la lista de funciones dentro del alcance.
3. Leer la lista de funciones fuera del alcance.
4. Revisar RP-01, RP-02 y RP-03.
5. Resolver el papel del panadero en la cantidad final de producción.
6. Revisar la registradora actual y la disponibilidad de dispositivos.
7. Asignar responsables y fechas a los asuntos abiertos.

## 3. Desarrollo previsto

| Tiempo | Actividad | Resultado esperado |
|---|---|---|
| 10:00–10:10 | Contexto del proyecto y problema actual | Confirmar que el propósito es registrar ventas por producto y apoyar decisiones de producción y catálogo. |
| 10:10–10:25 | Lectura del alcance incluido | Confirmar registro de ventas, histórico, sugerencia de producción, revisión por panadero y reporte de rotación. |
| 10:25–10:35 | Lectura de exclusiones | Mantener fuera facturación electrónica, inventario de insumos, encargos, comandas/mesas, domicilios, clientes frecuentes y varias sedes. |
| 10:35–10:55 | Propuestas RP-01, RP-02 y RP-03 | Mantenerlas fuera de la primera versión hasta verificar dispositivo, carga operativa y responsable de captura. |
| 10:55–11:05 | Desacuerdo sobre producción | Acordar, como resultado recomendado, que el sistema sugiera y el panadero confirme la cantidad. |
| 11:05–11:15 | Registradora, pendientes y cierre | Proponer operación en paralelo durante un piloto y fijar responsables para validar la decisión. |

## 4. Desacuerdo previsto: quién decide la cantidad final de producción

**Advertencia:** las posturas siguientes son una predicción basada en el proceso actual descrito en las entrevistas y en las decisiones propuestas de `hallazgos-brechas`. Deben sustituirse por las palabras y argumentos reales de los participantes.

| Participante / rol | Posición prevista | Fundamento que se espera discutir |
|---|---|---|
| Propietario | Espera que el sistema sugiera cantidades con base en ventas históricas para reducir sobrantes y faltantes. | En el proceso actual la cantidad se estima “a ojo” y se reportan sobrantes varias veces por semana. |
| Panadero principal | Solicita conservar la posibilidad de ajustar la sugerencia y decidir la cantidad final. | Conoce la capacidad del horno, las tandas y las condiciones particulares de cada jornada. |
| Equipo de análisis | Propone separar la sugerencia calculada de la cantidad finalmente confirmada. | Evita que el sistema sustituya una decisión operativa que hoy realiza el panadero. |

**Decisión recomendada para someter a aprobación:** el sistema calcula la sugerencia; el panadero la revisa, puede ajustarla y confirma la cantidad del día. La sugerencia y la cantidad confirmada se conservan como datos distintos.

**Quién debe aprobar:** propietario y panadero principal.  
**Estado:** decisión prevista; no aprobada todavía.

## 5. Segundo asunto previsto: registradora actual

- **Pregunta:** ¿el sistema reemplaza inmediatamente la registradora?
- **Predicción:** es probable que el propietario prefiera conservar la registradora durante un periodo inicial para no interrumpir los cobros mientras se adapta al nuevo registro.
- **Recomendación:** proponer un piloto en paralelo y comparar los totales, sin convertir el paralelo en requisito definitivo hasta que el propietario lo apruebe.
- **Responsables de validar:** propietario y cajera.
- **Estado:** pendiente de confirmación.

## 6. Decisiones previstas

| ID | Decisión recomendada | Responsable de aprobación | Estado |
|---|---|---|---|
| DT-01 | Confirmar D-01 a D-06 como alcance funcional de la primera versión. | Propietario | Por validar |
| DT-02 | Mantener X-01 a X-07 fuera del alcance. | Propietario | Se espera confirmación |
| DT-03 | El panadero conserva la decisión final de producción después de revisar la sugerencia. | Propietario y panadero | Por validar |
| DT-04 | RP-01 queda aplazado hasta verificar un dispositivo en producción. | Propietario | Por validar |
| DT-05 | RP-02 queda aplazado hasta medir el tiempo adicional de registro y definir su flujo. | Propietario y cajera | Por validar |
| DT-06 | RP-03 queda aplazado hasta definir responsable y procedimiento de captura del sobrante. | Propietario y panadero | Por validar |
| DT-07 | La registradora se mantiene durante un posible piloto paralelo, sujeto a aprobación. | Propietario y cajera | Por validar |

## 7. Compromisos previstos

| ID | Compromiso | Responsable propuesto | Fecha objetivo | Evidencia esperada |
|---|---|---|---|---|
| C-01 | Confirmar si existe un equipo disponible en la zona de producción. | Propietario | 23/11/2026 | Confirmación durante visita o mensaje. |
| C-02 | Revisar si el flujo de CU-01 permite registrar ventas sin demorar la atención. | Cajera y equipo | 24/11/2026 | Prueba de recorrido o medición. |
| C-03 | Verificar la regla de cálculo de rotación contra CU-03 y el SRS de Unidad 4. | Equipo | 24/11/2026 | Matriz de trazabilidad corregida. |
| C-04 | Confirmar si la registradora se conserva durante el piloto. | Propietario y cajera | 23/11/2026 | Decisión escrita. |
| C-05 | Enviar el acta y la ficha para correcciones. | Relator | Dentro de las 24 horas posteriores al taller real | Mensaje enviado y respuestas recibidas. |

## 8. Confirmación posterior

- Fecha real en que se celebró el taller: pendiente.
- Asistentes reales: pendiente.
- Desacuerdo que realmente ocurrió: pendiente de transcripción.
- Decisiones aprobadas: pendiente.
- Fotografía / evidencia del muro: pendiente de adjuntar.
- Fecha de envío del acta: pendiente.
- Confirmaciones de participantes: pendiente.

**Estado del acta:** borrador predictivo. Convertir a acta final únicamente después de realizar el taller y reemplazar las predicciones por los hechos.
