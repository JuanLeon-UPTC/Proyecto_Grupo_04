# SRS-VENTAS-001 · Especificación de requisitos del software

**Sistema de registro de ventas — Panadería El Arte de Amar**
Versión 0.1 · 2026-11-15 · Proyecto Grupo 04
Estructura según IEEE Std 830-1998 (adaptada, ver `06-estandares-mapa/matriz-aplicabilidad.md`)

## 1. Introducción

### 1.1 Propósito
Este documento especifica los requisitos del software "Sistema de registro de ventas". Está dirigido a quien construya el sistema (fuera del alcance de este curso) y a quien evalúe el proceso de ingeniería de requisitos del equipo.

### 1.2 Alcance
El sistema cubre cuatro casos de uso: registrar una venta (CU-01), ajustar la cantidad sugerida de producción (CU-02), revisar el reporte semanal de rotación (CU-03) y clasificar un producto fuera del catálogo (CU-04).

**No cubre** (decisiones de alcance ya registradas en sesiones anteriores):
- Facturación electrónica DIAN (fuera de alcance, Unidad 4 Sesión 1).
- Reactivar un producto descontinuado (fuera de alcance, Unidad 5 Sesión 4).
- Prototipo de interfaz gráfica (es la Unidad 6, no esta).
- Gestión de nómina, inventario de insumos (harina, azúcar, etc.) o contabilidad general: nunca aparecieron en el acta ni en el árbol de metas.

### 1.3 Definiciones, acrónimos y abreviaturas
| Término | Definición |
|---|---|
| CU | Caso de uso |
| HU | Historia de usuario |
| RF / RNF | Requisito funcional / no funcional |
| SRS | Software Requirements Specification (este documento) |
| NI | Necesidad del interesado |
| Producto, Venta, LineaVenta, CantidadDelDia, ReporteSemanal, EvaluacionDeProducto, DecisionDeDescontinuar | Ver `15-dominio-consistencia/glosario.md` (Unidad 5, Sesión 5) |
| EARS | Easy Approach to Requirements Syntax — plantilla de redacción usada para cada RF/RNF |

### 1.4 Referencias
- Árbol de metas (M1-M3), historias HU-01, HU-02a/b, HU-03 — `03-especificacion/`
- Casos de uso CU-01 a CU-04 — `03-especificacion/casos-de-uso/`
- Modelo de dominio v1.0, glosario, matriz de consistencia — `15-dominio-consistencia/`
- Diagrama de estados de Producto — `14-estados/`
- IEEE Std 830-1998 (estructura de este documento)
- ISO/IEC/IEEE 29148:2018 (ficha de requisito y nueve pruebas, Sesión 3 de esta unidad)

### 1.5 Visión general
La sección 3 se organiza **por caso de uso** (CU-01 a CU-04), no por característica de calidad ni por tipo de requisito. Se eligió así porque el proyecto es pequeño (4 CU), cada uno ya tiene su límite de alcance claro desde la Unidad 3, y toda la trazabilidad construida hasta ahora (actividad, secuencia, estados, dominio) ya está organizada por CU — organizar la sección 3 de otra forma rompería esa coherencia.

## 2. Descripción general

### 2.1 Perspectiva del producto
Sistema nuevo e independiente. El negocio no usa actualmente ningún software (operación manual, según la elicitación de la Unidad 3): no sustituye ni se integra con un sistema previo.

**Diagrama de contexto:** ver `11-modelo-casos-uso/diagramas/diagrama_contexto.puml` (Unidad 5, Sesión 1) — 3 actores (Cajera, Panadero principal, Propietario), sin sistemas externos, consistente con la decisión de no integrar facturación electrónica.

### 2.2 Funciones del producto
- Registrar ventas en caja, con sus productos, cantidades y total (CU-01).
- Sugerir y ajustar la cantidad de producción diaria a partir del historial de ventas (CU-02).
- Calcular la rotación semanal de cada producto y permitir descontinuar los de rotación baja (CU-03).
- Clasificar productos que entraron como "Otro producto" en una venta (CU-04).

### 2.3 Características de los usuarios
| Usuario | Experticia técnica | Frecuencia de uso |
|---|---|---|
| Cajera | Básica (usa el sistema, no lo administra) | Diaria, varias veces por turno |
| Panadero principal | Básica | Diaria, una vez en la mañana |
| Propietario | Básica a media | Semanal (reporte), ocasional (clasificar productos) |

### 2.4 Restricciones
- Debe operar en el dispositivo de caja que ya tiene el negocio (no se asume hardware nuevo).
- El negocio no tiene personal de TI propio: cualquier configuración debe ser simple.
- Presupuesto limitado, propio de un negocio familiar pequeño.

### 2.5 Suposiciones y dependencias
| Suposición | Riesgo si falla |
|---|---|
| El negocio tiene conexión eléctrica e internet estables durante el horario de atención | Sin esto, CU-01 no puede registrar ventas en el momento |
| El catálogo de productos existe antes de usar el sistema, salvo los que entren como "Otro producto" (CU-01, 1a) | Si no, todas las ventas iniciales entrarían sin clasificar |
| El modelo de dominio (Unidad 5, Sesión 5) no cambia de forma incompatible con esta sección 3 | Si cambia, esta sección debe revisarse (regla de consistencia RC-04) |

---

## 3. Requisitos específicos (muestra de 8, Sesión 2)

Organización: por caso de uso. Cada requisito en formato EARS, con ficha mínima. Esta sección crece en las Sesiones 3 y 4 de esta unidad.

### CU-01 — Registrar una venta

**RF-001**
> CUANDO la cajera confirme el pago de una venta con al menos un producto, el sistema deberá guardar la venta con sus productos, cantidades, valor total, fecha y hora, asociada a la cajera que la registró.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-01, paso 6 · HU-01 |
| Verificación | Prueba — registrar una venta y confirmar los campos guardados |

**RF-002** *(reescrito tras revisión, ver `revision-checklist.md`, hallazgo H-02)*
> SI el sistema no logra guardar una venta confirmada, ENTONCES el sistema deberá reintentar guardarla una vez; si el reintento también falla, deberá informar el error a la cajera sin guardar la venta ni sumarla al total del día.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-01, extensión 6a |
| Verificación | Prueba — forzar una falla de guardado y confirmar el comportamiento en ambos intentos |

**RF-003**
> CUANDO la cajera intente marcar como completa una venta sin productos, el sistema deberá rechazar la acción y pedir al menos un producto.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-01, extensión 3a |
| Verificación | Prueba — intentar completar una venta vacía |

**RF-007** *(nace de la matriz de consistencia, Unidad 5 Sesión 5, hallazgo H-03 — antes "RF-NUEVO-01")*
> CUANDO la cajera intente agregar a una venta un producto cuyo estado sea Descontinuado, el sistema deberá rechazar la línea y mostrar un aviso indicando que el producto ya no está disponible.

| Campo | Valor |
|---|---|
| Prioridad | Should (tentativa — ver hallazgo H-04 en `revision-checklist.md`) |
| Estabilidad | Inestable (Propuesto, pendiente de confirmar con el Propietario) |
| Origen | Matriz de consistencia, Unidad 5 Sesión 5, hallazgo H-03 |
| Verificación | Prueba — intentar vender un producto Descontinuado |

### CU-02 — Ajustar la cantidad sugerida de producción

**RF-004** *(reescrito, ver hallazgo H-01)*
> CUANDO el panadero principal abra la pantalla de sugerencia del día, el sistema deberá calcular y mostrar, en una sola pantalla, la cantidad sugerida de cada producto del catálogo con 4 semanas de datos o más, a partir del promedio de ventas de ese día de la semana en las últimas 4 semanas.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-02, paso 2 · HU-02a |
| Verificación | Análisis — revisar la fórmula contra un caso con datos conocidos |

**RF-005**
> SI el panadero principal intenta confirmar la cantidad del día después de la 1:30 p. m., ENTONCES el sistema deberá rechazar el cambio y conservar la última cantidad vigente.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-02, extensión 5a |
| Verificación | Prueba — intentar confirmar después del horario límite |

### CU-03 — Revisar el reporte semanal de rotación

**RF-006** *(reescrito, ver hallazgo H-05)*
> CUANDO el propietario abra el reporte semanal de rotación, el sistema deberá marcar como de rotación baja los productos con 4 semanas de datos o más que vendieron menos del 25 % del promedio de los demás productos durante las últimas 4 semanas seguidas (RN-03).

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-03, paso 3 · HU-03 |
| Verificación | Análisis — revisar la fórmula contra un caso con datos conocidos |

### Requisitos no funcionales

**RNF-001** (ISO/IEC 25010:2023 — Eficiencia de desempeño)
> El sistema deberá completar el registro de una venta, desde la confirmación del pago hasta la confirmación a la cajera, en menos de 10 segundos, en al menos el 95 % de los casos.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | Meta M1.3 del árbol de metas |
| Verificación | Demostración — medir el tiempo en 20 ventas de prueba en hora pico simulada |

**RNF-002** *(reescrito, ver hallazgo H-03)* (ISO/IEC 25010:2023 — Fiabilidad)
> El sistema deberá garantizar, mediante una operación atómica, que una venta con sus líneas quede guardada completa o no quede guardada ninguna parte de ella.

| Campo | Valor |
|---|---|
| Prioridad | Must |
| Estabilidad | Estable |
| Origen | CU-01, garantía mínima |
| Verificación | Prueba — forzar una interrupción a mitad del guardado y confirmar que no queda un registro parcial |
