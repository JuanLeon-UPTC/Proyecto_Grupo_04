## 9. Supuestos cuantitativos adoptados

- La fecha/hora se almacena en UTC y se presenta en `America/Bogota`.
- El periodo predeterminado de análisis es de los últimos 30 días; el usuario puede elegir hasta 365 días.
- Para sugerir producción se usa promedio móvil de los últimos 7 días con ventas válidas; si hay menos de 3 días con ventas, se aplica RF-015.
- Se propone un factor de ajuste inicial de 1,10 (10 %) como margen operativo configurable por administrador.
- Se redondea la sugerencia hacia arriba a unidades enteras; nunca puede ser negativa.
- La clasificación de baja rotación se basa en el cuartil inferior de unidades vendidas entre productos activos del periodo. Si hay menos de 4 productos activos, se muestra el ranking sin etiqueta de cuartil.
- No se incluyen festivos ni temporadas especiales en la primera versión.
