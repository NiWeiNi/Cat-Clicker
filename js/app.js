

(function() {
    "use strict"

    // Variables
    const pictureCat = document.querySelector(".picture-cat");
    const nameCat = document.querySelector(".title-name");
    const listCats = document.querySelectorAll("li");
    let numberClicks = 0;
    let clicksTitle = document.querySelector(".number-clicks");

    // Event listener on list
    for (let i = 0; i < listCats.length; i++) {
        listCats[i].addEventListener("click", (e) => { 
            nameCat.textContent = e.target.dataset.title;
            pictureCat.src =  e.target.dataset.src;
        })
    }

    // Event listener on picture
    pictureCat.addEventListener("click", () => { numberClicks += 1;
        clicksTitle.textContent = numberClicks; })
})();

