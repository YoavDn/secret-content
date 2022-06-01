"use strict"

function onLogin(ev) {
  ev.preventDefault()
  ev.stopPropagation()
  const userInput = document.querySelector("[name=name-input]")
  const passInput = document.querySelector("[name=pass-input]")
  const passValue = passInput.value
  const userValue = userInput.value

  const isUserExsist = checkUser(userValue, passValue)
  emptyUserInput()

  if (!isUserExsist) return

  const user = getUser(userValue)

  if (user.isAdmin) {
    renderAdminSecret(user.username)
    return
  } else {
    renderSecret(user.username)
  }
}

function onLogout(ev) {
  _deleteUser()
  renderLogout()
}

function onInit(ev) {
  var activites = getActivitesFromStorage()
  activites.forEach(user => {
    gActivities.push(user)
  })
  console.log("hi")
  if (isUserLoggedIn()) {
    const user = getUserFromStorage()
    if (user.isAdmin) {
      renderAdminSecret(user.username)
    } else {
      renderSecret(user.username)
    }
  } else {
    renderLogout()
  }
}
