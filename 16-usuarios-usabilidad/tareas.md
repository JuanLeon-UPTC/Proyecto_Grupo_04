# Análisis de las 3 tareas principales

En términos de lo que la persona quiere lograr, no de funciones del sistema.

## Tarea 1 · Cobrar una venta (Cajera, PER-01)
- **Frecuencia:** varias veces por minuto en hora pico
- **Criticidad:** alta — es el corazón del negocio
- **Cómo se hace hoy:** registradora mecánica, suma el total sin desglose por producto [EV-02]
- **Problemas observados:** fila en hora pico; nada queda anotado por producto; pedidos de pan de sal después de las 4 p. m. se pierden sin registrar [EV-02]
- **Medida candidata:** tiempo entre que el cliente paga y la cajera queda libre para el siguiente

## Tarea 2 · Decidir cuánto producir hoy (Panadero, PER-02)
- **Frecuencia:** 1 vez en la mañana, con un ajuste hacia la 1:30 p. m.
- **Criticidad:** alta — de esto depende que sobre o falte producto
- **Cómo se hace hoy:** a ojo, mirando lo vendido la semana pasada ese mismo día [EV-01]
- **Problemas observados:** decide la última tanda "casi a ciegas"; el horno tiene un límite por tanda que hoy nadie tiene en cuenta al planear [EV-02]
- **Medida candidata:** diferencia entre cantidad producida y cantidad realmente vendida ese día

## Tarea 3 · Decidir qué producto ya no vale la pena hacer (Propietario, PER-03)
- **Frecuencia:** semanal
- **Criticidad:** media-alta — afecta el desperdicio y el surtido
- **Cómo se hace hoy:** "al tanteo", si ve que algo sobra varios días seguidos [EV-01]
- **Problemas observados:** sin cifras, decisión subjetiva
- **Medida candidata:** tiempo que toma revisar el reporte y tomar la decisión
