console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted!")
	console.log('form submit');
}

function compliment (evt) {
	alert("You are so cool!")
}

let picture = document.querySelector("img")

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', compliment)

