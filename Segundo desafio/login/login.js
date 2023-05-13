var listaUsuarios = [{ user: "adm", senha: "123" }];

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
