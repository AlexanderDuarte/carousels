const contentParent_simp03 = document.getElementById("simp-03");
const wrapper_simp03 = contentParent_simp03.querySelector(".wrapper");
const arrayOfElements_simp03 = Array.from(
  wrapper_simp03.getElementsByClassName("card")
);

let currentIndex_simp03 = 0;

function updatePosition_simp03() {
  wrapper_simp03.style.transform = `translateX(-${(100 / arrayOfElements_simp03.length) * currentIndex_simp03}%)`;
}

function slideNext_simp03() {
  currentIndex_simp03 = (currentIndex_simp03 + 1) % arrayOfElements_simp03.length
  updatePosition_simp03()
}
function slidePrev_simp03() {
  currentIndex_simp03 = (currentIndex_simp03 - 1 + arrayOfElements_simp03.length) % arrayOfElements_simp03.length
  updatePosition_simp03()
}

setInterval(() => {
  if (currentIndex_simp03 > arrayOfElements_simp03.length - 1) {
    currentIndex_simp03 = 0;
  }

  updatePosition_simp03(currentIndex_simp03);
  currentIndex_simp03++;
}, 4000);

 let startX;

 wrapper_simp03.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
 })


 wrapper_simp03.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX
  const diffX = startX - endX;
  if(diffX > 50){
    slideNext_simp03()
  }else if(diffX < -50){
    slidePrev_simp03()
  }
 })