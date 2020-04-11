let saveRecipeButton = document.getElementById("saveRecipeButton");

saveRecipeButton.addEventListener("click", saveChoice);

function saveChoice() {
    if (saveRecipeButton.innerHTML === "Save Recipe") {
        saveRecipeButton.innerHTML = "Saved!";
    } else {
        saveRecipeButton.innerHTML = "Save Recipe";
    }
}

$(function () {
    $(window).resize(function () {
        processBodies($(window).width());
    });
    function processBodies(width) {
        if (width > 738) {
            $(".accordion-body").collapse("show");
        } else {
            $(".accordion-body").collapse("hide");
        }
    }
    processBodies($(window).width());
});
