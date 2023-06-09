function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nextNumPrime(num) {
  return isPrime(num) ? num : nextNumPrime(num + 1);
}

console.log("Caso 1 ::", nextNumPrime(74));
console.log("Caso 2 ::", nextNumPrime(12));
console.log("Caso 3 ::", nextNumPrime(2));
