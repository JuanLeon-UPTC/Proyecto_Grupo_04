## 6. Requisitos no funcionales (RNF)

| ID | Característica / escenario | Umbral verificable | Verificación | Prioridad |
|---|---|---|---|---|
| RNF-001 | Rendimiento: consulta de catálogo con 500 productos y 10 usuarios concurrentes | 95 % de respuestas en ≤ 2 s | Prueba de carga | Must |
| RNF-002 | Rendimiento: confirmar venta con 10 líneas de detalle | 95 % de confirmaciones en ≤ 3 s, excluyendo indisponibilidad de red del cliente | Prueba de carga | Must |
| RNF-003 | Disponibilidad operativa | ≥ 99,0 % mensual, excluyendo mantenimientos anunciados de máximo 4 h/mes | Análisis de monitoreo | Should |
| RNF-004 | Seguridad de credenciales | Contraseñas almacenadas con hash Argon2id o bcrypt con factor de costo vigente; nunca en texto plano | Inspección y prueba | Must |
| RNF-005 | Control de acceso | 100 % de rutas protegidas verifican autenticación y rol en servidor | Prueba negativa por rol | Must |
| RNF-006 | Integridad | Ninguna venta confirmada puede quedar con total distinto a la suma de sus detalles | Pruebas de invariantes | Must |
| RNF-007 | Recuperación | Copia de seguridad diaria; RPO ≤ 24 h y RTO ≤ 8 h | Simulacro de restauración | Should |
| RNF-008 | Usabilidad | Cajero entrenado registra una venta de hasta 5 productos en ≤ 60 s en 9 de 10 intentos | Prueba con usuarios | Should |
| RNF-009 | Compatibilidad | Interfaz operativa en las dos últimas versiones estables de Chrome y Edge en escritorio de 1366×768 o superior | Prueba de compatibilidad | Should |
| RNF-010 | Trazabilidad/auditoría | 100 % de anulaciones y ajustes de inventario incluyen usuario, motivo y fecha/hora | Consulta de auditoría | Must |
