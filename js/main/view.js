"use strict"

const elSecretSection = document.querySelector(".content-container")
const elLoginSection = document.querySelector(".login-container")
const elUsernameGreet = document.querySelector(".user-name-greet")

function renderSecret(usrname) {
  elSecretSection.classList.remove("hidden")
  elLoginSection.classList.add("hidden")
  elUsernameGreet.innerText = usrname
}

function renderLogout() {
  elSecretSection.classList.add("hidden")
  elLoginSection.classList.remove("hidden")
}

function emptyUserInput() {
  const userInput = document.querySelector("[name=name-input]")
  const passInput = document.querySelector("[name=pass-input]")

  userInput.value = ""
  passInput.value = ""
}

function renderAdminSecret(usrname) {
  const elSecretSection = document.querySelector(".content-container")
  const elAdminContainer = document.querySelector(".container-admin-link")
  const elLoginSection = document.querySelector(".login-container")
  elSecretSection.classList.remove("hidden")
  elLoginSection.classList.add("hidden")
  elUsernameGreet.innerText = usrname

  const elAdminLink = `<a class="admin-link" href="admin.html"><button>Admin link</button></a>`

  elAdminContainer.innerHTML = elAdminLink
}
