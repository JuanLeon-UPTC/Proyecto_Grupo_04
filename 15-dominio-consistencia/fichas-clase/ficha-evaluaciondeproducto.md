# Ficha de clase · EvaluacionDeProducto

**Versión:** 1.0 · 2026-11-15

## Definición
Resultado de calcular la rotación de un producto para un reporte semanal concreto: cuánto vendió en las últimas 8 semanas y si queda marcado de rotación baja. Es la pieza analítica que sustenta la decisión de descontinuar.

## Atributos
| Atributo | Tipo de negocio | Descripción |
|---|---|---|
| rotaciónÚltimas8Semanas | Número | Resultado del cálculo de CU-03, paso 2 |
| /marcadoRotaciónBaja | Sí/No (derivado) | Se calcula del umbral del 25 % frente al promedio de los demás, 4 semanas seguidas |
| nota | Texto | "menos de 4 semanas de datos" cuando aplica (extensión 2a), vacío en caso normal |

## Relaciones
- `ReporteSemanal "1" -- "0..*" EvaluacionDeProducto` — contiene
- `Producto "1" -- "0..*" EvaluacionDeProducto` — es evaluado en
- `EvaluacionDeProducto "0..1" -- "0..1" DecisionDeDescontinuar` — respalda

## Reglas de negocio
- Garantía mínima de CU-03: el reporte nunca marca un producto de rotación baja sin mostrar las 8 semanas que lo sustentan — por eso `DecisionDeDescontinuar` siempre respalda contra una `EvaluacionDeProducto` concreta, nunca contra el reporte en general.

## Casos de uso que la tocan
- CU-03 (crea: una evaluación por producto y por reporte semanal; es la base de la extensión 5a)

## Estados
No tiene ciclo de vida propio: se calcula una vez por semana y no cambia después (es un hecho histórico).

## Preguntas abiertas
Ninguna específica de esta clase.
