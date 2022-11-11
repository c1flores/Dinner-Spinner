
const signupFormHandler = async function (event) {
  event.preventDefault();

  const email = document.querySelector("#username-input-signup").value.trim();
  const password = document.querySelector("#password-input-signup").value.trim();
  fetch("/api/user", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
  })
      .then(function () {
          document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
