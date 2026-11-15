# Matriz de relevancia · ISO/IEC 25010:2023 × interesados

Escala: 0 no le afecta · 1 le afecta poco · 2 importante · 3 crítica o incumplimiento legal

| Característica | Cajera | Panadero | Propietario | Cliente | Soporte técnico | Total | Decisión |
|---|---|---|---|---|---|---|---|
| Adecuación funcional | 3 | 3 | 3 | 2 | 1 | 12 | Cubierta de otra forma — ya la cubren RF-001 a RF-007; no se cataloga un RNF aparte |
| Eficiencia de desempeño | 3 | 1 | 1 | 3 | 0 | 8 | **Catalogar RNF** (tiene un 3) |
| Compatibilidad | 0 | 0 | 0 | 0 | 1 | 1 | Descartar — no hay integración con sistemas externos (DIAN descartado en Sesión 1) |
| Capacidad de interacción | 3 | 2 | 2 | 1 | 0 | 8 | **Catalogar RNF** (tiene un 3) |
| Fiabilidad | 2 | 2 | 3 | 2 | 3 | 12 | **Catalogar RNF** |
| Seguridad | 1 | 1 | 2 | 0 | 1 | 5 | Descartar — no se manejan pagos electrónicos ni datos sensibles de clientes |
| Mantenibilidad | 0 | 0 | 1 | 0 | 3 | 4 | **Catalogar RNF** (tiene un 3) |
| Flexibilidad | 0 | 0 | 1 | 0 | 1 | 2 | Descartar — restricción 2.4 del SRS ya fija el dispositivo de caja existente |
| Seguridad física (safety) | 0 | 0 | 0 | 0 | 0 | 0 | Descartar — un sistema de registro de ventas no controla maquinaria ni genera riesgo físico |

## Ranking (por relevancia, de mayor a menor)
1. Fiabilidad (12) y Adecuación funcional (12)
2. Eficiencia de desempeño (8) y Capacidad de interacción (8)
3. Mantenibilidad (4)
4. Seguridad (5)
5. Flexibilidad (2)
6. Compatibilidad (1)
7. Seguridad física (0)

4 de las 9 características quedan catalogadas con RNF propio (Eficiencia de desempeño, Capacidad de interacción, Fiabilidad, Mantenibilidad); 1 se cubre de otra forma (Adecuación funcional, ya cubierta por los RF); 4 se descartan con justificación (Compatibilidad, Seguridad, Flexibilidad, Seguridad física). La matriz discrimina: no todo quedó en 2 o 3.
