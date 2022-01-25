function fact1(){
	document.querySelector('section').innerHTML = "<h3>The Colour of Flamingoes</h3><img src='images/flamingo.jpg' alt='Flamingo' id='flamingo'> <br><br>Flamingoes are only pink because of chemicals called carotenoids in the algae and fish they eat. In fact, their feathers are grayish white when they’re born.";
}// fact1

function fact2(){
	document.querySelector('section').innerHTML = "<h3>The Colour of Polar Bears</h3><img src='images/polarbear.jpg' alt='Polar Bear' id='polarbear'><br>Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light.";
}// fact2

function fact3(){
	document.querySelector('section').innerHTML = "<h3>Froot Loops</h3><img src='images/frootloops.jpg' alt='Froot Loops' id='frootloops'><br>The different colors of Froot Loops cereal all taste the same—they’re not individual flavors."; 
}// fact3

function fact4(){
	document.querySelector('section').innerHTML = "<h3>Footprints on the Moon</h3><img src='images/moon.jpg' alt='Moon' id='moon'><br>The first footprints on the moon will remain there for a million years.";
}// fact4

function fact5(){
	document.querySelector('section').innerHTML = "<h3>The Buckingham Palace</h3><img src='images/buckinghampalace.jpg' alt='Buckingham Palace' id='buckinghampalace'><br> Buckingham Palace in London, England, has 775 rooms, including 78 bathrooms.";
}// fact5

document.querySelector('#theme').theme1.addEventListener("click",theme1);
function theme1(){
	var buttons = document.getElementsByTagName('input');
	document.querySelector('html').style.backgroundColor = "#FFE4E1";
	document.querySelector('section').style.backgroundColor = "#FFF0F5";
	document.querySelector('section').style.border = "5px solid #DCDCF9";
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.backgroundColor = "#DCDCF9";
		buttons[i].style.color = "#F5FFFA";
		buttons[i].style.border = "2px solid #F5FFFA";
	}// for
}// theme1

document.querySelector('#theme').theme2.addEventListener("click",theme2);
function theme2(){
	var buttons = document.getElementsByTagName('input');
	document.querySelector('html').style.backgroundColor = "#94B0DA";
	document.querySelector('section').style.backgroundColor = "#B0C4DE";
	document.querySelector('section').style.border = "5px solid #1B264F";
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.backgroundColor = "#8F91A2";
		buttons[i].style.color = "#1B264F";
		buttons[i].style.border = "2px solid #1B264F";
	}// for
}// theme2

document.querySelector('#theme').theme3.addEventListener("click",theme3);
function theme3(){
	var buttons = document.getElementsByTagName('input');
	document.querySelector('html').style.backgroundColor = "#4A4E69";
	document.querySelector('section').style.backgroundColor = "#F2E9E4";
	document.querySelector('section').style.border = "5px solid #9A8C98";
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.backgroundColor = "#C9ADA7";
		buttons[i].style.color = "#9A8C98";
		buttons[i].style.border = "2px solid #9A8C98";
	}// for
}// theme3

document.querySelector('#theme').theme4.addEventListener("click",theme4);
function theme4(){
	var buttons = document.getElementsByTagName('input');
	document.querySelector('html').style.backgroundColor = "#FFAFCC";
	document.querySelector('section').style.backgroundColor = "#FFC8DD";
	document.querySelector('section').style.border = "5px solid #CDB4DB";
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.backgroundColor = "#CDB4DB";
		buttons[i].style.color = "#BDE0FE";
		buttons[i].style.border = "2px solid #BDE0FE";
	}// for
}// theme4


