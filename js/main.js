function cuotasValidas(num) {
  return num == 3 || num == 6 || num == 12;
}

function precioConCuotas() {
  let importeAbonar = prompt("Importe a abonar");
  let cantidadCuotas = prompt("Cuantas cuotas?");
  while (!cuotasValidas(cantidadCuotas)) {
    alert("El numero de cuotas no es correcto");
    cantidadCuotas = prompt("Cuantas cuotas?");
  }
  if (cantidadCuotas == 3) {
    alert("El importe a abonar es: " + Number(importeAbonar * 1.25));
  } else if (cantidadCuotas == 6) {
    alert("El importe a abonar es: " + Number(importeAbonar * 1.5));
  } else if (cantidadCuotas == 12) {
    alert("El importe a abonar es: " + Number(importeAbonar * 2));
  }
}

precioConCuotas();
