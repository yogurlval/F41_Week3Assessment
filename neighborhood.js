

const food = ["Costa Vida", "Chick-fil-a", "Jinya Ramen", "Slackwater Pizza", "Proper Burger"]

function random (arr){
    alert(food[Math.floor(Math.random() *food.length)])
}




let button = document.querySelector("button")

button.addEventListener('click', random)