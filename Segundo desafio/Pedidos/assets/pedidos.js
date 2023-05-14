var lista = JSON.parse(localStorage.getItem("lista"));

function mostrarListaUser(lista) {
  let listaSolicitacoes = document.querySelector(".lista");
  let aux = 0;
  let itemOrdenado = `
  <h1>Pedidos</h1>
  <ul class="items-container">`;
  lista.forEach((item) => {
    itemOrdenado += `<li class="item"><p class="escolha-prioridade">${
      aux + 1
    }</p><p>${item["descricao"]}</p><p>${
      item["usuario"]
    }</p><p class="escolha-situacao">${item["situacao"]}</p></li>`;
    aux++;
  });
  itemOrdenado += "</ul>";
  listaSolicitacoes.innerHTML = itemOrdenado;
}

function main() {
  mostrarListaUser(lista);
}

main();
