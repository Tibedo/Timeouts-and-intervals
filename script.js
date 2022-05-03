
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

let black = 0
let score = 0

// FONCTION TAUPE //
function newMole() {

	let circle = document.getElementsByTagName("div")
	circle[black].style.backgroundColor = "black"
	
	let red = Math.floor(Math.random() * circle.length)
	circle[red].style.backgroundColor = "red"
	black = red
	
	function hidden() {
		let circle = document.getElementsByTagName("div")
		circle[red].style.backgroundColor = "black"
	}

	function displayScore(num) {
		document.querySelector("b").innerHTML = num ;
	}
		
	function increaseScore() {
		score++
		displayScore(score)
		console.log(score)	
	}	
	circle[red].addEventListener("click", hidden)
	circle[red].addEventListener("click", increaseScore)
}
setInterval(newMole, 1000)


// FONCTION LAPIN //
function bunny() {
	let circle = document.getElementsByTagName("div")

	circle[black].style.backgroundColor = "black"

	let white = Math.floor(Math.random() * circle.length)
	circle[white].style.backgroundColor = "white"
	black = white

	function hidden() {
		let circle = document.getElementsByTagName("div")
		circle[black].style.backgroundColor = "black"
	}

	function displayScore(num) {
		document.querySelector("b").innerHTML = num ;
	}
	
	function lowScore() {
		score--;
		displayScore(score)
		console.log(score)	
		
	}
	circle[white].addEventListener("click", hidden)
	circle[black].addEventListener("click", lowScore)
}
setInterval(bunny, 3000)