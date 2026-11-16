# Ficha de clase · Venta

**Versión:** 1.0 · 2026-11-15

## Definición
Transacción que la cajera registra en caja: una o más líneas de producto, cobradas y guardadas juntas. Es el corazón de CU-01.

## Atributos
| Atributo | Tipo de negocio | Descripción |
|---|---|---|
| fecha | Fecha | Día en que se registró |
| hora | Hora | Momento exacto, usado para el histórico por hora |
| valorTotal | Dinero | Suma de todas sus líneas; se calcula, no se captura a mano |

## Relaciones
- `Cajera "1" -- "0..*" Venta` — registra
- `Venta "1" -- "1..*" LineaVenta` — contiene

## Reglas de negocio
- RN-01: una venta siempre tiene al menos 1 línea (CU-01, extensión 3a) — nunca se guarda vacía.
- Garantía mínima de CU-01: una venta se guarda completa o no se guarda; nunca queda a medias.

## Casos de uso que la tocan
- CU-01 (crea: paso 6, se guarda completa con sus líneas)

## Estados
No tiene máquina de estados propia — la "venta en curso" (antes de confirmar pago) y la "venta guardada" son el mismo objeto Venta en distintos momentos del escenario, no estados persistidos con reglas propias.

## Preguntas abiertas
Ninguna específica de esta clase.
