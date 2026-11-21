## 2. Tabla de decisión de sugerencia de producción

| Días distintos con ventas en 7 días | Producto activo | Datos válidos | Resultado |
|---:|---|---|---|
| 0–2 | Sí | Sí | Sin sugerencia numérica; MSG-30 |
| 3–7 | Sí | Sí | `ceil((unidades_7d / días_con_venta) × 1,10)` |
| 3–7 | No | Sí | Producto excluido |
| 3–7 | Sí | No | Excluir ventas inválidas/anuladas; si quedan menos de 3 días, MSG-30 |
| 0–7 | Sí | No hay ventas | Sugerencia no disponible; MSG-30 |

**Ejemplo reproducible:** unidades vendidas en 5 días distintos = 21. Promedio = 21/5 = 4,2. Ajuste = 4,2×1,10 = 4,62. Redondeo superior = 5 unidades sugeridas.
