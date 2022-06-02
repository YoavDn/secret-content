"use strict"

const elSecretSection = document.querySelector(".content-container")
const elLoginSection = document.querySelector(".login-container")
const elUsernameGreet = document.querySelector(".user-name-greet")
const elAdminContainer = document.querySelector(".container-admin-link")

function renderSecret(usrname) {
  elSecretSection.classList.remove("hidden")
  elLoginSection.classList.add("hidden")
  elAdminContainer.classList.add("hidden")
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
  elSecretSection.classList.remove("hidden")
  elAdminContainer.classList.remove("hidden")
  elLoginSection.classList.add("hidden")
  elUsernameGreet.innerText = usrname
}
