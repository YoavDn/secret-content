"use strict"

function renderTable(activites) {
  const elTableContainer = document.querySelector(".table-container")
  const elTable = document.querySelector("table")
  elTable.innerHTML = ""

  let newRow = elTable.insertRow()
  let activityLength = Object.keys(activites[0]).length
  console.log(activites)
  const activitesKeysArr = Object.keys(activites[0])

  for (let i = 0; i < activityLength; i++) {
    let newCell = newRow.insertCell()
    newCell.innerText = activitesKeysArr[i]
  }

  activites.forEach((activity, idx) => {
    let newRow = elTable.insertRow()

    let valuesArray = Object.values(activity)
    valuesArray.forEach(value => {
      let newCell = newRow.insertCell()
      newCell.innerText = value
    })
  })
}
