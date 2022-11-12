const newFormHandler = async (event) => {
    event.preventDefault();

    const recipeName = document.querySelector('#recipe-name').value.trim();
    const instruction = document.querySelector('#recipe-instr').value.trim();

    if (recipeName && instruction) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeName, instruction}),
            headers: {'content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failes to create recipe');
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
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);