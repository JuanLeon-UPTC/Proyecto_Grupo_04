# Matriz de trazabilidad · caso de uso, pantalla, rol, requisito, historia

| CU | Pantalla / mensaje | Rol | Requisitos | Historia | Chequeo |
|---|---|---|---|---|---|
| CU-01 | P-01 | Cajera | RF-001, RF-002, RF-003, RF-007, RNF-001, RNF-002, RNF-007, RNF-008, RNF-011 | HU-01 | Completo |
| CU-01, 1a | P-01 (mismo estado) | Cajera | (parte de RF-001) | HU-01 | Completo |
| CU-01, 3a | M-02 | Cajera | RF-003 | HU-01 | Completo |
| CU-01, 5a | P-01 (cancelar) | Cajera | (parte de CU-01) | HU-01 | Completo |
| CU-01, 6a | M-01 (aviso de error, fuera de la pantalla) | Cajera | RF-002 | HU-01 | Justificado — el "cuaderno de contingencia" es un paso fuera del sistema |
| CU-02 | P-02 | Panadero | RF-004, RF-005, RNF-009 | HU-02a, HU-02b | Completo |
| CU-02, 2a | P-02 (mismo estado) | Panadero | (parte de RF-004) | HU-02a | Completo |
| CU-02, 4a/4b | P-02 (mismo estado) | Panadero | (parte de RF-004/RF-005) | HU-02a/b | Completo |
| CU-02, 5a | M-04 | Panadero | RF-005 | HU-02b | Completo |
| CU-03 | P-03 | Propietario | RF-006, RNF-005 | HU-03 | Completo |
| CU-03, 2a/3a | P-03 (mismo estado) | Propietario | (parte de RF-006) | HU-03 | Completo |
| CU-03, 5a | M-06 | Propietario | RF-006 | HU-03 | Completo |
| CU-04 | P-04 | Propietario | — | — (sin HU, nace del modelado, Unidad 5) | **Hueco — ver huecos.md** |
| CU-04, 1a | M-07 | Propietario | — | — | Hueco (mismo caso) |
| CU-04, 3b | M-08 | Propietario | — | — | Hueco (mismo caso) |
| RF-007 (no viene de un CU aprobado originalmente) | P-01, M-01 | Cajera | RF-007 | — (nace de la matriz de consistencia, Unidad 5 S5) | Completo, pero RF-007 sigue Propuesto |

## Chequeo en tres direcciones

**A · De casos de uso a pantallas:** los 4 CU tienen pantalla o mensaje. ✓ Ninguno queda sin rastro.

**B · De pantallas a casos de uso y requisitos:** todas las pantallas (P-00 a P-04) tienen al menos un CU detrás, **excepto P-00** (transversal, no tiene CU propio — justificado, es infraestructura de acceso, no una meta de negocio).

**C · De requisitos a pantallas:** RF-001 a RF-007 y los RNF de usabilidad tienen pantalla. **Hueco:** no hay ningún requisito escrito todavía para CU-04 (nunca se formalizó un RF propio de "clasificar producto" — el caso de uso existe en texto, pero no se tradujo a RF en la Unidad 4). Ver `huecos.md`.
