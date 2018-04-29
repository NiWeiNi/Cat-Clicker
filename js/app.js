"use strict"

const imageCat = document.querySelector(".first-cat");
let numberClicks = 0;
imageCat.addEventListener("click", () => { numberClicks += 1; })