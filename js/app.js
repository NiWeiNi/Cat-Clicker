"use strict"

const firstCat = document.querySelector(".first-cat");
const secondCat = document.querySelector(".second-cat");
let numberClicks = 0;
firstCat.addEventListener("click", () => { numberClicks += 1; })
secondCat.addEventListener("click", () => { numberClicks += 1; })