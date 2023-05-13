var lista = [
  {
    descricao: "Cola",
    situacao: "solicitada",
    usuario: "adm",
  },
  {
    descricao: "Papel",
    situacao: "cancelada",
    usuario: "adm",
  },
];

let form = document.querySelector(".solicitacao-form");

form.addEventListener("submit", formEvento);

function mostrar(lista) {
  let listaSolicitacoes = document.querySelector(".lista");
  let itemOrdenado = `<ul>`;
  lista.forEach((item) => {
    itemOrdenado += `<li><p>${item["descricao"]}</p><p class="escolha-situacao">${item["situacao"]}</p><p>${item["usuario"]}</p><p class="escolha-prioridade">${item["prioridade"]}</p></li>`;
  });
  itemOrdenado += "</ul>";
  listaSolicitacoes.innerHTML = itemOrdenado;
  mostrarAdm(lista);
}

function mostrarAdm(lista) {
  let situacao = document.querySelectorAll(".escolha-situacao");
  let prioridade = document.querySelectorAll(".escolha-prioridade");

  console.log(situacao);
  let aux = 0;
  situacao.forEach((item) => {
    console.log(lista[aux]["situacao"]);
    item.innerHTML = `
  <label for="produto">Status:</label>
  <select id="situacao-${aux}" name="situacao">
  <option value="solicitada" ${
    lista[aux]["situacao"] === "solicitada" ? "selected" : ""
  }>Solicitada</option>
    <option value="programada" ${
      lista[aux]["situacao"] === "programada" ? "selected" : ""
    }>Programada</option>
    <option value="concluida" ${
      lista[aux]["situacao"] === "concluida" ? "selected" : ""
    }>Concluída</option>
    <option value="cancelada" ${
      lista[aux]["situacao"] === "cancelada" ? "selected" : ""
    }>Cancelada</option>
  </select>
  <input onclick=(alterStatus(${aux})) value="Alterar">
  <button onclick=(remover(${aux}))>Remover</button>
`;
    console.log(lista[aux]);

    prioridade.forEach((item, index) => {
      item.innerHTML = `<select id="prioridade-${index}" name="prioridade ">${geraListaPrioridade(
        index
      )}</select>`;
    });

    aux += 1;
  });
}

function formEvento(event) {
  event.preventDefault();
  let produto = document.getElementById("produto");
  if (produto.value != "") {
    let descricao = produto.value;
    let situacao = "solicitada";
    let usuario = "adm";
    let solicitacao = { descricao, situacao, usuario };
    lista.push(solicitacao);
    mostrar(lista);
  }

  console.log(lista);
}

function geraListaPrioridade(index) {
  let options = "";
  for (let i = 0; i < lista.length; i++) {
    options += `<option value="${i}"
    ${i === index ? "selected" : ""}>${i + 1}</option>`;
  }
  return options;
}

function remover(aux) {
  lista.splice(aux, 1);
  mostrar(lista);
}

function alterStatus(aux) {
  let element = document.getElementById(`situacao-${aux}`);
  let prioridade = document.getElementById(`prioridade-${aux}`);
  lista[aux]["situacao"] = element.value;
  let solicitacaoAux = lista[aux];
  lista.splice(aux, 1);
  lista.splice(prioridade.value, 0, solicitacaoAux);
  mostrar(lista);
}

function main() {
  mostrar(lista);
}

main();
