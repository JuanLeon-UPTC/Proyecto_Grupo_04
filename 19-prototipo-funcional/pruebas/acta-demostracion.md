# Acta de demostración del prototipo v0.1

**Duración:** 10 minutos (simulada, con el Propietario como interesado) · **Fecha:** 2026-11-15

## Guion
1. Agregar "Pan de sal" x2 y "Croissant" x1
2. Intentar agregar "Torta de chocolate" (Descontinuado) → ver M-01
3. Marcar venta completa y confirmar pago
4. Repetir activando "Simular falla de guardado" → ver reintento y error de servicio
5. Mostrar la autoprueba (17/17)

## Hallazgos

| # | Tipo | Observación | Dueño | Decisión |
|---|---|---|---|---|
| 1 | Funcional | El total se ve bien, pero preguntó si se puede quitar una línea ya agregada antes de pagar (CU-01, 1b) | Propietario | Diferir a v0.2 — no estaba en el alcance de esta pantalla crítica |
| 2 | Negocio (pregunta real) | "¿Qué pasa si el cliente paga con billete grande y hay que dar cambio? ¿Eso lo calcula el sistema?" | Propietario | Fuera de alcance — ningún CU ni HU lo pide; se registra como pregunta para una futura ampliación, no se construye ahora |
| 3 | Usabilidad | El botón "Agregar" queda muy cerca del campo cantidad en pantallas pequeñas | Equipo | Ajustar espaciado en v0.2 |
| 4 | Funcional | Confirmó que "Torta de chocolate" (Descontinuado) se rechaza correctamente (RF-007) | Propietario | Sin cambios — funciona como se esperaba |
| 5 | Datos | Preguntó si el catálogo de ejemplo (`datos.js`) representa productos reales | Propietario | Se confirma que son datos ficticios, declarados en el README |

## Resultado de la autoprueba mostrado en la demostración
17 de 17 comprobaciones aprobadas.

## Lo que se conserva / descarta
Ver `README.md` del prototipo.
