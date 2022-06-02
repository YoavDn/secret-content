"use strict"

var gActivities = []

function SortActivites(value) {
  var activites = gActivities

  if (value === "name") {
    activites.sort(function (a, b) {
      if (a.username < b.username) {
        return -1
      }
      if (a.username > b.username) {
        return 1
      }
      return 0
    })
  }
  if (value === "last-login") {
    activites.sort(
      (a, b) => Date.parse(a.lastLoginTime) - Date.parse(b.lastLoginTime)
    )
  }

  return activites
}
