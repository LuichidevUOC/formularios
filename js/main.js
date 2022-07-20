let fruit = document.getElementById('fruit')
let color = document.getElementsByName('color')
let output = document.querySelector('#output')
let btn = document.getElementById('newFruit')

btn.addEventListener('click', getFruit)

function getFruit(event) {
	event.preventDefault()

	let colorArray = Array.from(color)

	// Sin arrow function
	// let selected = colorArray.filter(function(color){
	//   return color.checked === true
	// })

	let selected = colorArray.filter((color) => color.checked === true)
	let chosenColor = selected[0].value

	output.style.color = chosenColor
	output.style.border = `3px solid ${chosenColor}`
	output.innerHTML = fruit.value
}
