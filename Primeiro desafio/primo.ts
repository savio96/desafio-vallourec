function isPrime(num) {
  let contador = 0;
  for (let index = 0; index <= num; index++) {
    if (num % index === 0) {
      contador = contador + 1;
    }
  }
  if (contador === 2) {
    return true;
  } else {
    return false;
  }
}

function nextPrime(num) {
  let valor = num;
  while (!isPrime(valor)) {
    valor += 1;
  }
  return valor;
}

console.log(nextPrime(74));

export { nextPrime };
