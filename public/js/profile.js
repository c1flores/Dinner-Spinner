// Add a recipe form logic in profile page
const newFormHandler = async (event) => {
    event.preventDefault();

    const recipeName = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector("#recipe-ing").value.trim();
    const instructions = document.querySelector("#recipe-instr").value.trim();

    if (recipeName && ingredients && instructions) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeName, ingredients, instructions }),
            // do not change this c in content-Type
            headers: {'content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create recipe');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/recipes/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        }else {
            alert('Failed to delete recipe')
        }
    }
};


document
    .querySelector('#main-form')
    .addEventListener('click', newFormHandler);

document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);


    