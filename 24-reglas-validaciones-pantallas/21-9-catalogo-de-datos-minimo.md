## 9. Catálogo de datos mínimo

- Producto: `id`, `codigo`, `nombre`, `categoria_id`, `precio_vigente_cop`, `activo`, `control_inventario`, `created_at`, `updated_at`.
- Venta: `id`, `fecha_hora_utc`, `usuario_id`, `estado`, `medio_pago`, `total_cop`, `idempotency_key`, `anulada_por`, `anulada_en`, `motivo_anulacion`.
- DetalleVenta: `id`, `venta_id`, `producto_id`, `cantidad`, `precio_unitario_cop`, `subtotal_cop`.
- Inventario: `producto_id`, `existencia`, `updated_at`.
- MovimientoInventario: `id`, `producto_id`, `tipo`, `cantidad`, `motivo`, `usuario_id`, `fecha_hora_utc`.
- Usuario: `id`, `nombre_usuario`, `hash_contrasena`, `rol`, `activo`.
- Auditoria: `id`, `usuario_id`, `accion`, `entidad`, `entidad_id`, `detalle`, `fecha_hora_utc`.
