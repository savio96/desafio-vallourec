function fatorial(a) {
  if (a < 0) {
    throw new Error("Número muito grande");
  } else if (isNumber(a)) {
    let valor = 1;
    for (let i = 1; i <= a; i++) {
      if (valor > 2147483647) {
        throw new Error("Número muito grande");
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

console.log(fatorial("50"));
export { fatorial };
