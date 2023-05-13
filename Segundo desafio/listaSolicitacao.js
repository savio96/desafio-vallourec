var lista = [
  { descricao: "Cola", situacao: "solicitada", usuario: "adm" },
  { descricao: "Papel", situacao: "cancelada", usuario: "adm" },
];

let form = document.querySelector(".solicitacao-form");

form.addEventListener("submit", formEvento);

function mostrar(lista) {
  let listaSolicitacoes = document.querySelector(".lista");
  let itemOrdenado = `<ul>`;
  lista.forEach((item) => {
    itemOrdenado += `<li><p>${item["descricao"]}</p><p class="escolha-situacao">${item["situacao"]}</p><p>${item["usuario"]}</p></li>`;
  });
  itemOrdenado += "</ul>";
  listaSolicitacoes.innerHTML = itemOrdenado;
  mostrarAdm(lista);
}
function mostrarAdm(lista) {
  let situacao = document.querySelectorAll(".escolha-situacao");
  console.log(situacao);
  let aux = 0;
  situacao.forEach((item) => {
    console.log(lista[aux]["situacao"]);
    item.innerHTML = `<form>
  <label for="produto">Status:</label>
  <select id="situacao" name="situacao">
  <option  value="solicitada" ${
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
  <input type="submit" value="Alterar">
</form>
`;
    aux += 1;
  });
}

function selectedForm() {}
function formEvento(event) {
  event.preventDefault();
  let produto = document.getElementById("produto");
  if (produto.value != "") {
    let descricao = produto.value;
    let situacao = "solicitada";
    let usuario = "adm";
    let solicitacao = { descricao, situacao, usuario };
    console.log(solicitacao);
    lista.push(solicitacao);
    mostrar(lista);
  }

  console.log(lista);
}

function main() {
  mostrar(lista);
}
main();
