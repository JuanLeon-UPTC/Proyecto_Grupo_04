// Renderiza y conecta la pantalla P-01. Vainilla JS, sin librerías.
const PantallaP01 = {
  intentosDeGuardado: 0,
  simularFalla: false,

  render() {
    const cont = document.getElementById("lineas");
    cont.innerHTML = "";
    Almacen.ventaEnCurso.lineas.forEach((l, indice) => {
      const div = document.createElement("div");
      div.className = "tarjeta";
      div.innerHTML = `<span>${l.producto} x${l.cantidad}</span><span>$${(
        l.cantidad * l.valorUnitarioAlMomento
      ).toLocaleString("es-CO")}</span>`;
      const btnQuitar = document.createElement("button");
      btnQuitar.className = "boton boton-secundario";
      btnQuitar.textContent = "Quitar";
      btnQuitar.addEventListener("click", () => {
        Almacen.quitarLinea(indice);
        this.render();
      });
      div.appendChild(btnQuitar);
      cont.appendChild(div);
    });
    document.getElementById("total").textContent =
      "Total: $" + Almacen.totalVenta().toLocaleString("es-CO");
    document.getElementById("btn-completar").disabled = Almacen.ventaVacia();
  },

  limpiarError(campo) {
    const el = document.getElementById("error-" + campo);
    if (el) el.textContent = "";
  },

  mostrarError(campo, mensaje) {
    const el = document.getElementById("error-" + campo);
    if (el) el.textContent = mensaje;
  },

  mostrarAviso(tipo, texto) {
    const aviso = document.getElementById("aviso");
    aviso.className = "aviso aviso-" + tipo;
    aviso.textContent = texto;
    aviso.hidden = false;
  },

  ocultarAviso() {
    document.getElementById("aviso").hidden = true;
  },

  agregar() {
    this.ocultarAviso();
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    this.limpiarError("producto");
    this.limpiarError("cantidad");

    const vProducto = validarCampo("producto", producto);
    if (!vProducto.ok) return this.mostrarError("producto", vProducto.mensaje);

    const vCantidad = validarCampo("cantidad", cantidad);
    if (!vCantidad.ok) return this.mostrarError("cantidad", vCantidad.mensaje);

    Almacen.agregarLinea(producto, cantidad);
    this.render();
  },

  marcarCompleta() {
    if (Almacen.ventaVacia()) {
      this.mostrarAviso("error", "Agrega al menos un producto para continuar.");
      return;
    }
    document.getElementById("paso-agregar").hidden = true;
    document.getElementById("paso-cobrar").hidden = false;
    document.getElementById("total-cobrar").textContent =
      "Total a cobrar: $" + Almacen.totalVenta().toLocaleString("es-CO");
  },

  pedirConfirmacionCancelar() {
    document.getElementById("confirmar-cancelar").hidden = false;
  },

  resolverCancelar(cancela) {
    document.getElementById("confirmar-cancelar").hidden = true;
    if (!cancela) return;
    Almacen.reiniciarVenta();
    document.getElementById("paso-agregar").hidden = false;
    document.getElementById("paso-cobrar").hidden = true;
    this.render();
  },

  confirmarPago() {
    this.intentosDeGuardado++;
    const fallaEsteIntento = this.simularFalla && this.intentosDeGuardado <= 2;

    if (fallaEsteIntento) {
      if (this.intentosDeGuardado === 1) {
        this.mostrarAviso("advertencia", "No se pudo guardar. Reintentando…");
        setTimeout(() => this.confirmarPago(), 600);
        return;
      }
      this.mostrarAviso(
        "error",
        "No se pudo guardar la venta. Anótala en el cuaderno de contingencia."
      );
      return;
    }

    this.mostrarAviso("exito", "Venta registrada.");
    Almacen.reiniciarVenta();
    this.intentosDeGuardado = 0;
    setTimeout(() => {
      document.getElementById("paso-agregar").hidden = false;
      document.getElementById("paso-cobrar").hidden = true;
      this.render();
    }, 800);
  },
};
