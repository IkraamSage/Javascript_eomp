// switch between register and sign in
let switchButtons = document.querySelectorAll(".switchButton");
let signInForm = document.querySelector(".signIn");
let registerForm = document.querySelector(".register");

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    signInForm.classList.toggle("active");
    registerForm.classList.toggle("active");
  });
});
