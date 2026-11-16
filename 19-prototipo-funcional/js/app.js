document.addEventListener("DOMContentLoaded", () => {
  PantallaP01.render();
  document.getElementById("btn-agregar").addEventListener("click", () => PantallaP01.agregar());
  document.getElementById("btn-completar").addEventListener("click", () => PantallaP01.marcarCompleta());
  document.getElementById("btn-confirmar-pago").addEventListener("click", () => PantallaP01.confirmarPago());
  document.getElementById("btn-cancelar").addEventListener("click", () => PantallaP01.pedirConfirmacionCancelar());
  document.getElementById("btn-cancelar-si").addEventListener("click", () => PantallaP01.resolverCancelar(true));
  document.getElementById("btn-cancelar-no").addEventListener("click", () => PantallaP01.resolverCancelar(false));
  document.getElementById("chk-simular-falla").addEventListener("change", (e) => {
    PantallaP01.simularFalla = e.target.checked;
  });
});
