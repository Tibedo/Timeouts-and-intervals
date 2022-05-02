
/*  EXERCICE 1

const prout = document.getElementById("prout");
const txt = prout.dataset.label;


let i 	= 0 ;
function word()
{
  let interval ;
  if(i < txt.length)
	{
	  prout.innerHTML += `<span>${txt[i]}</span>` ;
	  interval = setInterval(word, 1000);
	  i++
	}
	else
	{
	  clearInterval(interval);
	  console.log("end")
	}
    
}
word();

*/




/* CHRONOMETRE

const time = 0;

function timer() {

	//for (let i = 0; i >= time; i++) {
	//	time += 1	
	// }

if (time >= 0) {
	time++;
}

else if (time === 60) {
	console.log("1 minute has passed")
 }

else if (time === 120) {
	console.log("2 minutes has passed")
 }
 
}

console.log(setInterval(timer, 1000))

*/




// ************ WHACK A MOLE GAME ************* //

let circle = []

const section = document.querySelector("section")

for (let i = 0; i < 12; i++) {
	let div = document.createElement("div")
	circle.push(div)
	section.appendChild(div)
}


let previousCircle = 0


function newMole() {

	let circle = document.getElementsByTagName("div")
	circle[previousCircle].style.backgroundColor = "white"

	let randCircle = Math.floor(Math.random() * circle.length)
	circle[randCircle].style.backgroundColor = "red"
	previousCircle = randCircle

	function hidden() {
		let circle = document.getElementsByTagName("div")
		circle[randCircle].style.backgroundColor = "white"
	}

	function displayScore(num) {
		document.querySelector("b").innerHTML = num ;
	}

	function score() {
		//let points = document.getElementsByTagName("b") 
		//points.innerHTML = score++
		//console.log(score)
		let score = 0
		displayScore(score+1)	
	}
	
	circle[randCircle].addEventListener("click", hidden)
	circle[randCircle].addEventListener("click", score)
	//console.log([randCircle])
}

setInterval(newMole, 1000)