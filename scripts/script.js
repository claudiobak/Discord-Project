// JavaScript Document

// window.addEventListener('scroll', reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if(revealtop < windowheight - revealpoint){
//         reveals[i].classList.add('active');
//     }
//   }
// }


/* intersection observer */
let theReveals = document.querySelectorAll('.reveal');

let IOObserver;

let IOOptions = {
	threshold: .3
};

IOObserver = new IntersectionObserver(IOFunction, IOOptions);

for (reveal of theReveals) {
	IOObserver.observe(reveal);
}

function IOFunction(entries) {
	for (entry of entries) {
		if(entry.isIntersecting) {
			entry.target.classList.add("active");
		}
	}
}








/* menu */
// let menuOpenButton = document.querySelector("header > button");
// let menuSluitenButton = document.querySelector("header nav button");
// let menu = document.querySelector("header nav");

// menuOpenButton.addEventListener("click", toggleMenu);
// menuSluitenButton.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   menu.classList.toggle("menuOpen");
//   event.target.blur(); /* button verliest focus na de klik */
// }


// let menuOpenButton = document.querySelector("header > button");
// let menuSluitenButton = document.querySelector("header nav button");
// let darkBg = document.getElementsByClassName("backgroundColor");

// menuOpenButton.addEventListener("click", toggleMenu);
// menuSluitenButton.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   darkBg.classList.toggle(".darkBg");
//   event.target.blur(); /* button verliest focus na de klik */
// }






// let menuOpenButton = document.querySelector("header > button");
// let menuSluitenButton = document.querySelector("header nav button");
// let menu = document.querySelector("header nav");
// let menuBackground = document.querySelector("body > div:nth-of-type(1)");


// menuOpenButton.addEventListener("click", toggleMenu);
// menuSluitenButton.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   menu.classList.toggle("menuOpen");
//   menuBackground.classList.toggle("darkBg")
//   event.target.blur(); /* button verliest focus na de klik */
// }






// const backgroundClick = document.getElementsByClassName("darkBg")

// backgroundClick.addEventListener("click", toggleSlide);


// function toggleSlide(event) {
// 	backgroundClick.classList.toggle("")
// }





// let menuOpenButton = document.querySelector("header > button");
// let menuSluitenButton = document.querySelector("header nav button");
// let menu = document.querySelector("header nav");
// let shadow = document.getElementsByClassName("shadowbackground")

// menuOpenButton.addEventListener("click", toggleMenu);
// menuSluitenButton.addEventListener("click", toggleMenu);

// function toggleMenu(event) {
//   menu.classList.toggle("menuOpen");
//   event.target.blur(); /* button verliest focus na de klik */
//   menu.classList.toggle(".shadowbackground");

// }

let menuOpenButton = document.querySelector("header > button");
let menuSluitenButton = document.querySelector("header nav button");
let menu = document.querySelector("header nav");
let menuBackground = document.querySelector("body > div:nth-of-type(1)");
// const opacitybBg = document.getElementsByClassName("darkBg");
let opacityBg = document.querySelector("body > div:nth-of-type(1)")


menuOpenButton.addEventListener("click", toggleMenu);
menuSluitenButton.addEventListener("click", toggleMenu);
opacityBg.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  menu.classList.toggle("menuOpen");
  menuBackground.classList.toggle("darkBg")
  event.target.blur(); /* button verliest focus na de klik */
}


