var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");




function setGradient() {
	body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = `${body.style.background};`
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);


function randomColor() {
	const color = "#"
	const color1_generate =color + Math.floor(Math.random() * 16777215).toString(16);
	const color2_generate =color + Math.floor(Math.random() * 16777215).toString(16);

	body.style.background =  `linear-gradient(to right, ${color1_generate}, ${color2_generate})`;
    
	css.textContent = body.style.background

	return body.style.background;
}


function createButton() {
	const button = document.createElement("button");
	const buttonText = document.createTextNode("Generate");
	button.appendChild(buttonText);
    body.appendChild(button);


	return button
}



var generate = createButton();
generate.addEventListener("click", randomColor)