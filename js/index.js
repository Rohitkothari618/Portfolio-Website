var text_wrap = document.querySelectorAll(".typing");
const hamburger_container = document.querySelector(".head-container");

var array = ["Freelancer", "Developer", "Youtuber", "Vlogger"];
let i = 0;
function text() {
  for (let j = 0; j < text_wrap.length; j++) {
    text_wrap[j].innerHTML = array[i];
  }
}

setInterval(() => {
  text(i);
  if (i > array.length - 2) {
    i = 0;
  } else {
    i++;
  }
}, 2000);

const cross = document.querySelector("#cross");
cross.addEventListener("click", () => {
  if (side.classList.contains("sidebar")) {
    side.classList.remove("sidebar");
  } else {
    side.classList.add("sidebar");
  }
});
const side = document.querySelector(".head-container");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  if (side.classList.contains("sidebar")) {
    side.classList.remove("sidebar");
  } else {
    side.classList.add("sidebar");
  }
});
