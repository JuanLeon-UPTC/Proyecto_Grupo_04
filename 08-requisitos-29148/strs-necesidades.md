# Lista de necesidades de los interesados (NI) · StRS

Proyecto Grupo 04 — Sistema de registro de ventas

| ID | Necesidad | Fuente | Justificación | Prioridad |
|---|---|---|---|---|
| NI-01 | El propietario quiere saber cuánto vendió cada día sin llevar cuentas a mano | Entrevista al propietario (Unidad 3, Sesión 2) | Hoy el control de ventas es manual y propenso a error | Must |
| NI-02 | El panadero quiere saber cuánto producir sin desperdiciar ni quedarse corto | Entrevista panadero/cajera | El desperdicio y el faltante de producto son el dolor principal detrás de M2 | Must |
| NI-03 | El propietario quiere identificar qué productos ya no vale la pena seguir haciendo | Entrevista al propietario | Base de M3 y de HU-03 | Must |
| NI-04 | La cajera quiere cobrar rápido en hora pico sin perder la venta por un error | Entrevista panadero/cajera | Base de HU-01 y de la meta M1.3 (menos de 10 segundos) | Must |
| NI-05 | El propietario no quiere que un producto descontinuado se le siga apareciendo a la cajera para vender | **No viene de una historia de usuario original** — surgió al construir la máquina de estados de Producto (Unidad 5, Sesión 4) y la matriz de consistencia (Sesión 5) | Si no se cubre, el estado "Descontinuado" del dominio no tiene efecto real en CU-01 | Should (tentativa, Propuesta) |
| NI-06 | El propietario no quiere perder las ventas ya registradas cuando se corrige el nombre de un producto duplicado | CU-04, extensión 3b (hallazgo al redactar el caso de uso, Unidad 5 Sesión 4) | Si se pierden, el histórico de ventas de ese producto queda incompleto | Should |
