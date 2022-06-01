"use strict"

function onInit(ev) {
  ev.preventDefault()
  gActivities = getActivitesFromStorage()
  let activites = gActivities

  renderTable(activites)
}

function onSort(ev) {
  ev.preventDefault()
  const activites = gActivities
  const selectValue = document.querySelector("[name=sort-table]").value

  SortActivites(selectValue)
  renderTable(activites)
  console.log(activites)
}
