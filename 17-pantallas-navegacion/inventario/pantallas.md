# Inventario de pantallas

Clasificación de casos de uso: los 4 CU tienen interfaz propia (ninguno es puramente de sistema/temporal), así que cada uno necesita al menos una pantalla.

Reglas de granularidad aplicadas: CU-01 se mantiene como **una sola pantalla con varios estados** (vacía → con productos → lista para cobrar → cobrada), no se parte en pasos, porque es una tarea corta (≤10 s, RNF-001) — partirla violaría la regla de evitar pasos innecesarios en tareas cortas.

## Resumen

| ID | Nombre | Propósito | Zona / rol | CU | Prioridad |
|---|---|---|---|---|---|
| P-00 | Inicio de sesión | Identificar el rol que usa el sistema | Interna, todos los roles | — (transversal) | Alta |
| P-01 | Registrar venta | Cobrar una venta completa | Interna, Cajera | CU-01 | Alta |
| P-02 | Sugerencia del día | Ajustar la cantidad de producción | Interna, Panadero | CU-02 | Alta |
| P-03 | Reporte semanal de rotación | Revisar rotación y descontinuar | Interna, Propietario | CU-03 | Alta |
| P-04 | Productos por clasificar | Clasificar un producto nuevo | Interna, Propietario | CU-04 | Media |

No hay zona pública: el sistema es enteramente interno, con ingreso por rol en P-00 (no hay actor externo sin inicio de sesión).

## Tabla rol por pantalla

| Rol | P-00 | P-01 | P-02 | P-03 | P-04 | Pantalla de inicio |
|---|---|---|---|---|---|---|
| Cajera | ✓ | ✓ | — | — | — | P-01 |
| Panadero principal | ✓ | — | ✓ | — | — | P-02 |
| Propietario | ✓ | — | — | ✓ | ✓ | P-03 |

Ocultar un ítem de menú no basta: el sistema debe verificar el permiso siempre, no solo esconder el botón (regla de la guía).

## Ficha · P-00 Inicio de sesión
- **Propósito:** identificar qué rol opera el sistema (Cajera, Panadero, Propietario)
- **Zona / rol:** interna, los 3 roles
- **CU / requisitos:** transversal, no tiene CU propio
- **Acciones:** elegir rol, ingresar
- **Navegación:** lleva a la pantalla de inicio de cada rol (P-01, P-02 o P-03)
- **Estados:** vacía / error de ingreso
- **Mensajes:** M-05 (credencial inválida — fuera del alcance de los 4 CU, se deja como supuesto de diseño)
- **Prioridad:** alta
- **Preguntas abiertas:** ¿cómo se autentica cada rol? Ningún CU lo especifica — queda para el diseño técnico (fuera de alcance de este curso)

## Ficha · P-01 Registrar venta
- **Propósito:** cobrar una venta completa (CU-01)
- **Zona / rol:** interna, Cajera · es su pantalla de inicio
- **CU / requisitos:** CU-01; RF-001, RF-002, RF-003, RF-007, RNF-001, RNF-002, RNF-007, RNF-008, RNF-011
- **Acciones:** indicar producto y cantidad (repetible), quitar/corregir línea (1b), marcar venta completa, confirmar pago, cancelar
- **Navegación:** no sale de aquí durante una venta; al terminar, vuelve a sí misma vacía (venta nueva)
- **Estados:** vacía · con productos · lista para cobrar · cobrada · cancelada
- **Mensajes:** M-01 (producto no disponible), M-02 (venta vacía, 3a), M-03 (venta registrada)
- **Prioridad:** alta
- **Preguntas abiertas:** ninguna nueva — hereda las de CU-01

## Ficha · P-02 Sugerencia del día
- **Propósito:** ajustar la cantidad sugerida de producción (CU-02)
- **Zona / rol:** interna, Panadero · su pantalla de inicio
- **CU / requisitos:** CU-02; RF-004, RF-005, RNF-003 (del catálogo RNF), RNF-009
- **Acciones:** revisar sugerencia por producto, ajustar cantidad, confirmar
- **Navegación:** pantalla única para esta tarea
- **Estados:** antes de confirmar · confirmada · fuera de horario (5a)
- **Mensajes:** M-04 (fuera de horario)
- **Prioridad:** alta
- **Preguntas abiertas:** cómo reflejar la capacidad máxima del horno por tanda (pendiente #1 de la Sesión 1) — **hueco**, ver `trazabilidad/huecos.md`

## Ficha · P-03 Reporte semanal de rotación
- **Propósito:** revisar rotación y decidir descontinuar (CU-03)
- **Zona / rol:** interna, Propietario · su pantalla de inicio
- **CU / requisitos:** CU-03; RF-006, RNF-005 (del catálogo RNF)
- **Acciones:** ver reporte, seleccionar producto marcado, descontinuar
- **Navegación:** puede ir a P-04 (productos por clasificar) desde un menú
- **Estados:** con productos marcados · sin productos marcados (3a)
- **Mensajes:** M-06 (decisión registrada)
- **Prioridad:** alta
- **Preguntas abiertas:** ninguna nueva

## Ficha · P-04 Productos por clasificar
- **Propósito:** clasificar un producto fuera de catálogo (CU-04)
- **Zona / rol:** interna, Propietario · secundaria (se llega desde un menú, no es su pantalla de inicio)
- **CU / requisitos:** CU-04
- **Acciones:** seleccionar producto, asignar nombre/categoría, confirmar fusión si hay duplicado (3b)
- **Navegación:** se llega desde P-03 o desde el menú del Propietario
- **Estados:** lista vacía (1a) · con pendientes · fusión propuesta (3b)
- **Mensajes:** M-07 (sin pendientes), M-08 (fusión propuesta)
- **Prioridad:** media
- **Preguntas abiertas:** ninguna nueva
