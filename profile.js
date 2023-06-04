let color = document.querySelector("#color")
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")

const favColor = (evt)=>{
    alert("Pink is my favorite color!")
}

const favPlace = ()=>{
    alert("Zion National Park is my favorite place!")
}

const favRitual = () =>{
    alert("My favorite ritual is my skincare routine!")
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)
