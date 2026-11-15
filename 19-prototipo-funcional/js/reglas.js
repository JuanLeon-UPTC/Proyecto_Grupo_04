// Interpreta los tipos de regla de REGLAS.reglas sin que el mensaje o el
// parámetro exijan tocar este archivo.
const TiposDeRegla = {
  obligatorio: (valor) => valor !== undefined && valor !== null && String(valor).trim() !== "",
  "no-descontinuado": (valor) => {
    const p = DATOS.productos.find((x) => x.nombre === valor);
    return !p || p.estado !== "Descontinuado";
  },
  "entero-positivo": (valor) => {
    if (valor === "" || valor === undefined) return false;
    const n = Number(valor);
    return Number.isInteger(n) && n >= 1;
  },
};

function validarCampo(campo, valor) {
  const reglasDelCampo = REGLAS.reglas.filter((r) => r.campo === campo);
  for (const regla of reglasDelCampo) {
    const fn = TiposDeRegla[regla.tipo];
    if (!fn) throw new Error(`Tipo de regla desconocido: ${regla.tipo}`);
    if (!fn(valor)) {
      return { ok: false, reglaId: regla.id, mensaje: regla.mensaje };
    }
  }
  return { ok: true };
}
