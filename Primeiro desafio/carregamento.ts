const carretas = [
  { nome: "T35", lim: 35000 },
  { nome: "T31", lim: 31000 },
  { nome: "T27", lim: 27000 },
  { nome: "T6", lim: 6000 },
];

const tubos = [
  { nome: "Tubo 10 3/4", peso: 1800 },
  { nome: "Tubo 10", peso: 1320 },
  { nome: "Tubo 5 1/2", peso: 480 },
];

function selectCarretaBy(relTuboQtd) {
  let qtdTotal = 0;
  for (rel of relTuboQtd) {
    qtdTotal += tubos.filter((t) => t.nome === rel.nome)[0].peso * rel.qtd;
  }
  const carretasFiltradas = carretas
    .filter((c) => c.lim >= qtdTotal)
    .sort((a, b) => a.lim - b.lim);
  return carretasFiltradas.length > 0
    ? carretasFiltradas[0].nome
    : "Nao ha carretas disponiveis";
}

const caso1 = [
  { nome: "Tubo 10 3/4", qtd: 1 },
  { nome: "Tubo 10", qtd: 1 },
];

const caso2 = [
  { nome: "Tubo 5 1/2", qtd: 3 },
  { nome: "Tubo 10 3/4", qtd: 5 },
  { nome: "Tubo 10", qtd: 2 },
];

const caso3 = [
  { nome: "Tubo 10 3/4", qtd: 20 },
  { nome: "Tubo 10", qtd: 15 },
  { nome: "Tubo 5 1/2", qtd: 15 },
];

console.log("Caso 1 ::", selectCarretaBy(caso1));
console.log("Caso 2 ::", selectCarretaBy(caso2));
console.log("Caso 3 ::", selectCarretaBy(caso3));
