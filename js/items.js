let saveRecipeButton = document.getElementById("saveRecipeButton");

saveRecipeButton.addEventListener("click", saveChoice);

function saveChoice() {
    if (saveRecipeButton.innerHTML === "Save Recipe") {
        saveRecipeButton.innerHTML = "Saved!";
    } else {
        saveRecipeButton.innerHTML = "Save Recipe";
    }
}
