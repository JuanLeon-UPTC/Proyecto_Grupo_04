// Calcula el contraste WCAG entre dos colores hexadecimales.
function luminancia(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const canal = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}

function contraste(hex1, hex2) {
  const l1 = luminancia(hex1);
  const l2 = luminancia(hex2);
  const [claro, oscuro] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (claro + 0.05) / (oscuro + 0.05);
}

// Tokens de la guía de estilo, todos contra el fondo blanco (#FFFFFF)
const pares = [
  ['primario', '#2E7D32'],
  ['texto', '#1A1A1A'],
  ['error', '#C62828'],
  ['advertencia', '#B45309'],
];

for (const [nombre, color] of pares) {
  const r = contraste(color, '#FFFFFF');
  const pasaAA = r >= 4.5 ? 'sí' : 'no';
  console.log(`${nombre} (${color}) sobre blanco: ${r.toFixed(2)}:1 — AA texto normal: ${pasaAA}`);
}

module.exports = { luminancia, contraste };
