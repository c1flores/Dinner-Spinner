const { doc } = require("prettier");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  
  if (email && password) {

    const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            username: email.value,
            password: password.value
        }),
        headers: {'Content-Type': 'application/json'},
    });

    if(response.ok) {

        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
  }
}


const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password}),
            headers: {'Content-Type': 'appliction/json'},
        });

    if (response.ok) {
        document.location.replace('/prfile');
    } else {
        alert(response.statusText);
    }
    }
};


document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);