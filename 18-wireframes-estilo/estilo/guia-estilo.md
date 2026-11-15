# Guía de estilo mínima · v0.1

## 1. Tokens (`tokens.css`)
Colores, tipografía, espaciado, radio, alto de control (44px, mínimo táctil accesible) y anillo de foco. Ver el archivo para los valores exactos.

## 2. Componentes (6, en `componentes.css`)
1. Botón (primario / secundario)
2. Campo de texto (con estado de error)
3. Tarjeta (línea de venta / fila de producto)
4. Tabla (reporte semanal)
5. Aviso / mensaje (error, éxito, advertencia)
6. Lista (pendientes por clasificar)

## 3. Patrones (3)
1. **Formulario corto** — agregar un producto a la venta: un campo, un botón, resultado inmediato (P-01)
2. **Lista con acción** — fila seleccionable con un botón de acción al final (P-03: seleccionar producto y descontinuar)
3. **Confirmación** — aviso que aparece tras una acción y desaparece solo (M-03 "Venta registrada")

## 4. Contenido (tono y vocabulario)
- Los mensajes usan el vocabulario del glosario del proyecto (`producto`, `venta`, `rotación baja`), nunca jerga técnica.
- Los errores dicen qué pasó y qué hacer, nunca solo "Error".
- Tono directo, sin tecnicismos, acorde con la experticia básica de los 3 usuarios (ver `16-usuarios-usabilidad/`).

## 5. Accesibilidad: tabla de contrastes calculada

Calculada con `herramientas/contraste.js` (no son valores inventados):

| Token | Color | Contraste sobre blanco | ¿Pasa AA (≥4.5:1)? |
|---|---|---|---|
| Texto | #1A1A1A | 17.40:1 | Sí |
| Primario | #2E7D32 | 5.13:1 | Sí |
| Error | #C62828 | 5.62:1 | Sí |
| Advertencia | #B45309 | 5.02:1 | Sí |

Los 4 colores del sistema pasan el contraste mínimo AA para texto normal. Los avisos (`.aviso-*`) nunca dependen solo del color: cada uno lleva también texto explícito (ver wireframes).

`tokens.css` no es opcional en este proyecto — ya está incluido.
