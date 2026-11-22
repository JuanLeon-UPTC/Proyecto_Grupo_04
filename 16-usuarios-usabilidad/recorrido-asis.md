# Mapa de recorrido AS-IS · Persona primaria (PER-01, Cajera)

| Etapa | Qué hace | Cómo se siente | Dolor | Oportunidad |
|---|---|---|---|---|
| 5:45 a. m. | Alista la caja | Tranquila | — | — |
| 6:00-7:00 a. m. | Apertura, poco movimiento | Tranquila | — | — |
| 7:00-9:00 a. m. | Hora pico desayuno, fila | Apurada, bajo presión | **DOL-01:** se forma fila; cobrar y anotar pedidos de mesa a mano toma tiempo [EV-02] | Registro de venta más rápido (RF-001, RNF-001) |
| 9:00 a. m.-4:00 p. m. | Calma, organiza vitrina | Tranquila | **DOL-02:** no sabe qué se vende más sin preguntar de memoria [EV-02] | CU-01 ya deja el dato por producto automáticamente |
| 4:00-6:00 p. m. | Segunda hora pico | Apurada | **DOL-03:** clientes preguntan por pan de sal y no hay; no queda registrado [EV-02] | Histórico por producto alimenta CU-02 (ver hallazgo abajo) |
| Durante el día | Un producto se agota | Resignada | **DOL-05:** avisa al panadero de palabra, sin ningún registro [EV-01, EV-02] | Ver hallazgo H-U6-01 abajo |
| Durante el día | Llega un encargo especial | Neutral | **DOL-06:** se anota en un cuaderno aparte, fuera de cualquier sistema [EV-01] | Fuera de alcance (confirmado, nunca estuvo en el acta) |
| 8:00 p. m. | Cierre de caja | Cansada | **DOL-04:** toma media hora, hasta una hora si no cuadra, al final del turno [EV-02] | Total automático del sistema (RF-001) evita contar a mano |

6 puntos de dolor documentados (mínimo pedido: 5).

## Hallazgo H-U6-01

**Ningún caso de uso cubre "marcar que un producto se agotó durante el día"** (DOL-03 y DOL-05). Es distinto de CU-01 extensión 1a (producto fuera de catálogo): aquí el producto SÍ está en el catálogo, pero se acabó antes de cerrar. Hoy el aviso es verbal y no deja rastro. **Decisión:** se registra como pregunta abierta para un posible requisito nuevo (ver `pendientes.md`); no se crea un CU nuevo en esta sesión para no desbordar el alcance de Unidad 6.
