const form = document.getElementById('bookingForm');
const list = document.getElementById('bookingList');
const input = document.querySelectorAll("input")



function saveData() {
  localStorage.setItem("data",list.innerHTML)
}

document.addEventListener("load",getData )

function getData() {
  list.innerHTML = localStorage.getItem("data")
}



form.addEventListener("submit",handleSub)

function handleSub(e) {
  e.preventDefault()
  if (input[0].value == "" && input[1].value == "") {
    alert("Заполните поля для бронирования")
  } else {
    const liName = document.createElement("li")
    const liDate = document.createElement("li")
    liName.innerHTML = input[0].value
    liDate.innerHTML = input[1].value
    list.appendChild(liName)
    list.appendChild(liDate)
    input[0].value = ""
    input[1].value = ""
    saveData()
  }
  
}
getData()