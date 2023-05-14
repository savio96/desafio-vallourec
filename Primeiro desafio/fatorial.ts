function fatorial(a) {
  if (a < 0) {
    return "Número negativo";
  } else if (isNumber(a)) {
    let valor = 1;
    for (let i = 1; i <= a; i++) {
      if (valor > 2147483647) {
        return "Número muito grande";
      }
      valor = valor * i;
    }
    return valor;
  } else {
    return 0;
  }
}

function isNumber(val) {
  return typeof val === "number";
}

console.log("Caso 1 ::", fatorial("abc"));
console.log("Caso 2 ::", fatorial(10));
console.log("Caso 3 ::", fatorial(50));
