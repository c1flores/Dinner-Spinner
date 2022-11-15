// Recipe list form logic - WIP
const newFormHandler = async (event) => {
    event.preventDefault();

    const recipeName = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector("#recipe-ing").value.trim();
    const instructions = document.querySelector("#recipe-instr").value.trim();

    if (recipeName && ingredients && instructions) {
        const response = await fetch(`/api/recipes/${id}`, {
            method: 'POST',
            body: JSON.stringify({ recipeName, ingredients, instructions }),
            // do not change this c in content-Type
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/recipes');
        } else {
            alert('Failed to create recipe');
        }
    }
};

document
    .querySelector('.recipe-list')
    .addEventListener('submit', newFormHandler);




    