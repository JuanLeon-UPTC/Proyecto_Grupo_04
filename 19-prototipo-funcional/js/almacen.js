// Estado en memoria únicamente. Sin localStorage, sin red, sin servidor.
const Almacen = {
  ventaEnCurso: { lineas: [] },

  agregarLinea(producto, cantidad) {
    const p = DATOS.productos.find((x) => x.nombre === producto);
    this.ventaEnCurso.lineas.push({
      producto,
      cantidad: Number(cantidad),
      valorUnitarioAlMomento: p.precioActual,
    });
  },

  quitarLinea(indice) {
    this.ventaEnCurso.lineas.splice(indice, 1);
  },

  totalVenta() {
    return this.ventaEnCurso.lineas.reduce(
      (acc, l) => acc + l.cantidad * l.valorUnitarioAlMomento,
      0
    );
  },

  ventaVacia() {
    return this.ventaEnCurso.lineas.length === 0;
  },

  reiniciarVenta() {
    this.ventaEnCurso = { lineas: [] };
  },
};
