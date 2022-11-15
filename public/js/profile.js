// Add a recipe form logic in profile page
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const newFormHandler = async (event) => {
    event.preventDefault();

    const recipeName = document.querySelector('#recipe-name').value.trim();
    const ingredients = document.querySelector("#recipe-ing").value.trim();
    const instructions = document.querySelector("#recipe-instr").value.trim();

    if (recipeName && ingredients && instructions) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeName, ingredients, instructions }),
            
            headers: {'Content-Type': 'application/json'},
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

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("next");
    });
  });
  prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("prev");
    });
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
      const { name, value } = input;
      inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
  });
  
  function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
      index++;
    } else if (btn === "prev") {
      index--;
    }
    steps[index].classList.add("active");
  }


document
    .querySelector('.submit-btn')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.recipe-list')
    .addEventListener('click', delButtonHandler);


    