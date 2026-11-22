# Prototipo funcional v0.2 · P-01 Registrar venta

Proyecto Grupo 04 — Sistema de registro de ventas

## Cómo abrirlo
Doble clic en `index.html`. No requiere servidor, red, ni instalar nada. Para ver la autoprueba, doble clic en `autoprueba.html` o el enlace dentro del prototipo.

**Resultado de la autoprueba (verificado, no inventado): 18 de 18 comprobaciones aprobadas.** Se verificó ejecutando el motor de reglas en Node.js fuera del navegador antes de entregar.

## Qué se conserva de la ficha
- Las 4 reglas de `ficha-pantalla-P01.md` (R-01 a R-04), con sus mensajes literales
- Los cálculos de subtotal y total (sección H de la ficha)
- El checkbox "Simular falla de guardado" demuestra RF-002 (reintento y aviso de error)

## Cambios de v0.2 (Unidad 6, Sesión 5 — nacidos de la validación)
- Botón "Quitar" por línea (CU-01, extensión 1b; hallazgo PR-06 de la demostración)
- Confirmación antes de cancelar una venta (RF-010, hallazgo PR-01 de la evaluación heurística)

## Qué se descarta (fuera de este prototipo)
- Las pantallas P-00, P-02, P-03, P-04 (wireframes estáticos en la Sesión 3; no se prototipan funcionalmente en esta sesión)
- Persistencia real entre sesiones (no hay localStorage ni servidor, por diseño)
- Autenticación por rol (P-00)

## Tecnologías
HTML, CSS y JavaScript sin librerías. Datos de ejemplo en `datos/datos.js` (ficticios, declarados). Sin `localStorage`.

## Estructura
```
index.html          - pantalla P-01 funcional
autoprueba.html      - corre la autoprueba y muestra el resultado
css/                 - tokens.css y componentes.css (de la Sesión 3)
js/                  - reglas.js, almacen.js, pantallas.js, app.js, autoprueba.js
datos/               - datos.js (catálogo simulado), reglas.json y reglas-datos.js
```

## Versionado
Rama `prototipo/p01-v0.1`, etiqueta `prototipo-v0.1` tras la aprobación. Ver `CAMBIOS.md`.
