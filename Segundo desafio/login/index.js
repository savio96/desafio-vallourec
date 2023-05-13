const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const user = document.getElementById("user");
  let valid = true;

  if (!user.value) {
    const userError = document.getElementById("userError");
    userError.classList.add("visible");
    user.classList.add("invalid");
    userError.setAttribute("aria-hidden", false);
    userError.setAttribute("aria-invalid", true);
  }
  console.log(user.value);
  return valid;
}
