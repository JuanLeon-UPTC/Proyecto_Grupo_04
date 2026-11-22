// Autoprueba: comprueba que cada ejemplo inválido falle en su propia regla,
// que los válidos pasen, que las normalizaciones den la salida esperada,
// y marca como fallida cualquier regla sin ejemplo inválido.
function ejecutarAutoprueba() {
  const resultados = [];

  function check(nombre, condicion) {
    resultados.push({ nombre, ok: !!condicion });
  }

  // 1) cada ejemplo válido debe pasar su propia regla
  for (const r of REGLAS.reglas) {
    for (const v of r.ejemplos.validos) {
      const res = validarCampo(r.campo, v);
      check(`${r.id}: "${v}" es válido`, res.ok);
    }
  }

  // 2) cada ejemplo inválido debe fallar, y fallar en SU regla
  for (const r of REGLAS.reglas) {
    for (const v of r.ejemplos.invalidos) {
      const res = validarCampo(r.campo, v);
      check(`${r.id}: "${v}" falla en ${r.id}`, !res.ok && res.reglaId === r.id);
    }
  }

  // 3) ninguna regla debe quedar sin ejemplo inválido
  for (const r of REGLAS.reglas) {
    check(`${r.id}: tiene al menos un ejemplo inválido`, r.ejemplos.invalidos.length > 0);
  }

  // 4) normalización: cantidad con decimales no es válida (R-04 la rechaza, no la trunca en la regla)
  check('R-04: "1.5" no es un entero válido', !validarCampo("cantidad", "1.5").ok);

  // 5) cálculos de la ficha (casos resueltos)
  Almacen.reiniciarVenta();
  Almacen.agregarLinea("Pan de sal", 2);
  check("Cálculo: Pan de sal x2 a $1.500 = $3.000", Almacen.totalVenta() === 3000);
  Almacen.agregarLinea("Croissant", 1);
  check("Cálculo: + Croissant x1 a $2.500 = total $5.500", Almacen.totalVenta() === 5500);
  check("Cálculo: quitar una línea reduce el total", (() => {
    Almacen.reiniciarVenta();
    Almacen.agregarLinea("Pan de sal", 2);
    Almacen.agregarLinea("Croissant", 1);
    const antes = Almacen.totalVenta();
    Almacen.quitarLinea(0);
    const despues = Almacen.totalVenta();
    Almacen.reiniciarVenta();
    return despues < antes && despues === 2500;
  })());

  Almacen.reiniciarVenta();

  return resultados;
}
