const parentElements_simp01 = document.getElementById("simp-01");
const wrapper_simp01 = parentElements_simp01.querySelector(".wrapper");
const arrayOfElements_simp01 = Array.from(wrapper_simp01.getElementsByClassName("card"));

const $btnNext_simp_01 = parentElements_simp01.querySelector("#next");
const $btnPrev_simp_01 = parentElements_simp01.querySelector("#prev");

let currentIndex_simp01 = 0;




function updatePosition_simp01() {
    wrapper_simp01.style.transform = `translateX(-${(100/7) * currentIndex_simp01}%)`;
    console.log(100 * currentIndex_simp01)
}

function slideNext_simp01() {
    currentIndex_simp01 = (currentIndex_simp01 + 1) % arrayOfElements_simp01.length;
    updatePosition_simp01();
}

function slidePrev_simp01() {
    currentIndex_simp01 = (currentIndex_simp01 - 1 + arrayOfElements_simp01.length) % arrayOfElements_simp01.length;
    updatePosition_simp01();
}

$btnNext_simp_01.addEventListener("click", slideNext_simp01);
$btnPrev_simp_01.addEventListener("click", slidePrev_simp01);
