# 12 · Procesos y diagramas de actividades

**Proyecto Grupo 04 · Panadería El Arte de Amar** · Ingeniería de Requisitos · Unidad 5 · Sesión 2
Equipo: Juan Leon (JuanLeon-UPTC), Emanuel Caro (emanuel-caro), Javier Santiago Becerra Jimenez (semillita23)

## Proceso modelado
Producción diaria y venta en la panadería-cafetería, hasta el cierre del día y la decisión semanal sobre qué producto mantener.

- **Evento de inicio:** el propietario define la cantidad aproximada que se va a producir ese día.
- **Evento de fin:** el propietario decide si quita o mantiene un producto, después del cierre de caja.
- **Fuera de alcance** (según el acta de constitución): facturación electrónica y DIAN; costeo e inventario de insumos; encargos; comandas y mesas; domicilios; registro de clientes; varias sedes.
- **Calles AS-IS:** Propietario · Panadero principal · Cliente · Cajera.
- **Calles TO-BE:** Propietario · Panadero principal · Cajera · Sistema.

## Contenido de esta carpeta
| Archivo | Qué contiene | Estado |
|---|---|---|
| `taller-ficha.md` | Ficha del taller de modelado (plan, participantes, casos) | Diligenciada; falta confirmar fecha y roles |
| `taller-acta.md` | Acta del taller | **Pendiente**: el taller no se ha realizado |
| `hallazgos-brechas.md` | Problemas PA-01..PA-07, decisiones D-01..D-07, brechas B-01..B-07, pendientes PE-01..PE-09 | Borrador v0.1 |
| `checklist-diagramas.md` | Checklist de calidad aplicado a los tres diagramas | Pre-revisión; falta la revisión de otro integrante |
| `diagramas/dac-01-as-is.*` | Proceso actual (AS-IS) | v0.1 |
| `diagramas/dac-02-to-be.*` | Proceso futuro (TO-BE) | v0.1 |
| `diagramas/dac-03-reporte-cu03.*` | Flujo de CU-03 «Revisar el reporte semanal de rotación» | v0.1 |
| `fotos/` | Foto del muro del taller | **Pendiente** |

Cada diagrama tiene su fuente `.puml` (PlantUML) y su imagen `.png`.

## Origen de la información
El AS-IS y los problemas salen de las entrevistas de la Unidad 3 (propietario, panadero principal y cajera), el cuestionario piloto, el árbol de metas, las historias HU-01 a HU-03 y los casos de uso CU-01 a CU-03. Casi todas las cifras son estimaciones dichas por los entrevistados y están marcadas como tales.

## Uso de IA (declarado)
Se usó un asistente de IA para ordenar el material de las entrevistas, redactar los borradores de estos documentos y escribir el código PlantUML de los diagramas.

**Verificado a mano por el equipo** *(completar antes de fusionar)*:
- [ ] Cada acción de los diagramas contra las notas de las entrevistas.
- [ ] Las cifras de `hallazgos-brechas.md`.
- [ ] Que los requisitos nuevos propuestos (RP-01 a RP-03) reflejen lo que quiere el propietario.

## Pendientes principales
Realizar el taller con acta y foto del muro; enviar a los entrevistados el resumen para validación; revisar el checklist con otro integrante; incorporar el SRS de la Unidad 4. Detalle en `hallazgos-brechas.md`, sección «Pendientes».
