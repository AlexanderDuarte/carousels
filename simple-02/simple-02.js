const contentParent_simp02 = document.getElementById("simp-02");

const wrapper_simp02 = contentParent_simp02.querySelector(".wrapper");

const selector_simp02 = contentParent_simp02.querySelector("#selector");

const arrayOfElements_simp02 = Array.from(
  wrapper_simp02.getElementsByClassName("card")
);

let currentIndex_simp02 = 0;

function updatePosition_simp02(index) {
  setActive_simp02(index);
  currentIndex_simp02 = index;
  wrapper_simp02.style.transform = `translateX(-${
    (100 / arrayOfElements_simp02.length) * index
  }%)`;
}

function setActive_simp02(index) {
  const buttons = selector_simp02.querySelectorAll(".btn");

  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  buttons[index].classList.add("active");
}

function createButton_simp02(index) {
  const botao = document.createElement("button");
  botao.classList.add("btn");
  botao.setAttribute("onclick", `updatePosition_simp02(${index})`);

  return botao;
}

for (i = 0; i < arrayOfElements_simp02.length; i++) {
  selector_simp02.appendChild(createButton_simp02(i));
}

setActive_simp02(currentIndex_simp02);

setInterval(() => {
  if (currentIndex_simp02 > arrayOfElements_simp02.length - 1) {
    currentIndex_simp02 = 0;
  }

  updatePosition_simp02(currentIndex_simp02);
  currentIndex_simp02++;
}, 4000);
