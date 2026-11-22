// Datos simulados (no es información real). Se carga como script normal
// porque fetch() no funciona sobre file://.
const DATOS = {
  productos: [
    { nombre: "Pan de sal", estado: "Activo", precioActual: 1500 },
    { nombre: "Croissant", estado: "Activo", precioActual: 2500 },
    { nombre: "Torta de chocolate", estado: "Descontinuado", precioActual: 12000 },
  ],
};
