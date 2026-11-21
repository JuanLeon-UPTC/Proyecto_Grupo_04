## 2. Descripción general

### 2.1 Perspectiva del producto

Aplicación de gestión interna para un único local. Se propone una aplicación web con interfaz de navegador y servicio de aplicación conectado a una base de datos relacional. Esta arquitectura es una decisión de diseño recomendada, no una tecnología ya confirmada en el repositorio.

### 2.2 Clases de usuario

Cajero, panadero, administrador/propietario y soporte técnico temporal. El cliente es usuario indirecto. DIAN queda fuera del alcance transaccional y no existe integración fiscal.

### 2.3 Restricciones

- Una sola sede; moneda COP; zona horaria America/Bogota.
- El servidor valida permisos y cálculos; el navegador no es autoridad para importes ni roles.
- El precio unitario aplicado se copia a la línea de venta para conservar el histórico.
- Ventas y movimientos se persisten de forma transaccional.
- Las ventas no se eliminan físicamente; se anulan con trazabilidad.
- No se procesa pago ni se emite factura electrónica.

### 2.4 Suposiciones

Los valores numéricos de rendimiento, disponibilidad, histórico de 7 días, umbral de 3 días, margen del 10 %, máximo 365 días y máximo 50.000 filas son decisiones adoptadas para esta versión. Deben tratarse como parámetros versionados y no como datos de entrevistas.
