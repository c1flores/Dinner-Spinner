var button = $("#button");
var recipeName = $("inputValue");
button.on("click", function(event){
    event.preventDefault();
    getRecipe(recipeName.val());
});

function getRecipe(recipe){
    //program to use check database for the recipe
    //if no recipe, return no recipe was found. 
    //writes the prompt:"Want to add a recipe for ____"
}