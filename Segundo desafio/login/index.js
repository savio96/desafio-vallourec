var listaUsuarios = [{ user: "adm", senha: "123" }];

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const user = document.getElementById("user");

  const password = document.getElementById("password");
  if (!(user.value === "adm" && password.value === "123")) {
    const userError = document.getElementById("userError");
    userError.classList.add("visible");
    user.classList.add("invalid");
    userError.setAttribute("aria-hidden", false);
    userError.setAttribute("aria-invalid", true);
    return false;
  }
  window.location.href = "gestao.html";
  return true;
}
