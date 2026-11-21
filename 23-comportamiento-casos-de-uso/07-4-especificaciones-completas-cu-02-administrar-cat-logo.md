### CU-02 — Administrar catálogo

| Campo | Especificación |
|---|---|
| Actor primario | Administrador/propietario |
| Disparador | El administrador abre «Productos». |
| Precondiciones | Sesión activa con rol administrador. |
| Garantía mínima | Los cambios inválidos no alteran el catálogo. |
| Garantía de éxito | Producto creado/actualizado/desactivado y cambio auditado. |
| Pantallas | FP-03 Catálogo; FP-04 Formulario de producto |
| Reglas | RN-03 a RN-06, RN-19, RN-20 |

**Escenario principal**

| Paso | Actor | Acción / respuesta |
|---:|---|---|
| 1 | Administrador | Abre catálogo y elige «Nuevo producto» o selecciona uno existente. |
| 2 | Sistema | Muestra código, nombre, categoría, precio, control de inventario y estado. |
| 3 | Administrador | Diligencia o modifica los campos. |
| 4 | Sistema | Normaliza texto y valida obligatoriedad, unicidad, formato y rangos. |
| 5 | Administrador | Confirma guardar. |
| 6 | Sistema | Persiste el producto y registra auditoría. |
| 7 | Sistema | Muestra «Producto guardado correctamente». |

**Extensiones**
- 3a. Código duplicado: MSG-10; no guarda y retorna al paso 3.
- 3b. Precio negativo o no numérico: MSG-11; retorna al paso 3.
- 3c. Producto tiene ventas históricas: no se permite borrado físico; solo desactivación (RN-06).
- 5a. Usuario sin rol administrador: acceso denegado y evento de seguridad registrado.
