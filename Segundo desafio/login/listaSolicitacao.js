var lista = [
  {
    descricao: "Cola",
    situacao: "solicitada",
    usuario: "  ADM",
  },
  {
    descricao: "Papel",
    situacao: "cancelada",
    usuario: "ADM",
  },
];

let form = document.querySelector(".solicitacao-form");

form.addEventListener("submit", formEvento);

function mostrar(lista) {
  let listaSolicitacoes = document.querySelector(".lista");
  let itemOrdenado = `
  <h3>Pedidos</h3>
  <ul class="items-container">`;
  lista.forEach((item) => {
    itemOrdenado += `<li class="item"><p class="escolha-prioridade">${item["prioridade"]}</p><p>${item["descricao"]}</p><p>${item["usuario"]}</p><p class="escolha-situacao">${item["situacao"]}</p></li>`;
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
  <label for="produto-status">Status:</label>
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
  <input id=btn-alterar type="submit"  onclick=(alterStatus(${aux})) value="Alterar">
  <button id="btn-excluir" onclick=(remover(${aux}))>Excluir</button>
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
    let usuario = "ADM";
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
