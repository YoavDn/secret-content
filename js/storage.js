"use strict"

function saveUserToStorage(usr, key) {
  const jsonUsr = JSON.stringify(usr)
  window.localStorage.setItem(key, jsonUsr)
}

function deleteUserFromStorage() {
  window.localStorage.removeItem("user")
}

function getUserFromStorage() {
  return JSON.parse(window.localStorage.getItem("user"))
}

function getActivitesFromStorage() {
  return JSON.parse(window.localStorage.getItem("activites"))
}
