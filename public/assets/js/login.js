const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-login").value.trim();
  const passwordEl = document.querySelector("#password-input-login").value.trim();
  fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
  })
      .then(function () {
          document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
