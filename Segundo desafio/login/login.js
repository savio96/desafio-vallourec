var listaUsuarios = [{ user: "adm", senha: "123" }];
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

function salvarStorage() {
  if (localStorage.getItem("lista") == null) {
    localStorage.setItem("lista", JSON.stringify(lista));
  }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const user = document.getElementById("user");

  const password = document.getElementById("password");
  if (!(user.value === "adm" && password.value === "123")) {
    alert("Usuário invalido");
    return false;
  }
  window.location.href = "gestao.html";
  return true;
}
salvarStorage();
