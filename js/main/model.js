"use strict"

const gUsers = [
  {
    id: "u101",
    username: "puki",
    password: "secret",
    lastLoginTime: Date.now(),
    isAdmin: false,
  },
  {
    id: "u103",
    username: "yoav",
    password: "123",
    lastLoginTime: Date.now(),
    isAdmin: true,
  },
  _createUser(undefined, "Halav", 321),
  _createUser(undefined, "Naknik", "nak"),
]

function _createUser(
  id = _getRandomId(),
  username,
  password,
  lastLoginTime = Date.now(),
  isAdmin = false
) {
  return {
    id,
    username,
    password,
    lastLoginTime,
    isAdmin,
  }
}

function checkUser(usrname, pass) {
  const users = gUsers
  const activites = gActivities

  if (users.every(usr => usr.username !== usrname)) return false

  const user = users.find(usr => usr.username === usrname.trim())

  //sucsess login
  if ("" + user.password === pass) {
    var newLogDate = new Date()
    user.lastLoginTime = newLogDate.toUTCString()

    console.log(activites)

    // if (
    //   activites.every(activity => {
    //     console.log(activity)
    //   })
    // ) {
    //   console.log(activites)
    //   console.log(user)
    //   activites.push(user)
    // }
    const isNewUser = activites.every(activity => activity.id !== user.id)
    console.log(isNewUser)

    if (isNewUser) {
      activites.push(user)
      saveUserToStorage(activites, "activites")
    }

    console.log(activites)
    saveUserToStorage(user, "user")

    return true
  }
  return false
}

function isUserLoggedIn() {
  const userDB = window.localStorage.getItem("user")
  if (!userDB) {
    console.log(userDB)
    return false
  }
  return true
}

console.log(window.location)

function getUser(userName) {
  const user = gUsers.find(user => user.username === userName)
  return user
}

function _deleteUser() {
  deleteUserFromStorage()
}

function _getRandomId(length = 5) {
  var result = ""
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}