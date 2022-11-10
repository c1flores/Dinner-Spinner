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

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
