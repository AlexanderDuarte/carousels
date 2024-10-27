function navDisplay(id) {
  const contents = document.querySelectorAll(".content");

  contents.forEach((content) => (content.style.display = "none"));

  document.getElementById(id).style.display = "block";

  const buttons = document.querySelectorAll(".btn-nav");
  buttons.forEach((button) => button.classList.remove("active"));
  
  document.querySelector(`#btn-nav-${id}`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-nav-simp-01").classList.add("active");
  navDisplay("simp-03");
});
