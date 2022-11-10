const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#recipe-name').ariaValueMax.trim();
    const instruction = document .querySelector('#recipe-instr').ariaValueMax.trim();

    if (name && instruction) {
        const response = await fetch('/api/recipe', {
            method: 'post',
            body: JSON.stringify({ name, instruction}),
            headers: {
                'content-Type': 'application/json',
            },
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