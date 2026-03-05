// HAMBURGER

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});


// TYPING EFFECT

const words = [
"Game Developer",
"Godot Developer",
"Frontend Developer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
document.getElementById("typing").textContent =
currentWord.substring(0,j--);
}else{
document.getElementById("typing").textContent =
currentWord.substring(0,j++);
}

if(!isDeleting && j === currentWord.length+1){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting=false;
i = (i+1) % words.length;
}

setTimeout(type, isDeleting ? 40 : 80);
}

type();


// SCROLL REVEAL

function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);


// PROJECT BUTTON

function goToProjects(){

const section = document.getElementById("projects");

section.scrollIntoView({
behavior:"smooth"
});

}

function goToProjects(){

const section = document.getElementById("projects");

section.scrollIntoView({
behavior:"smooth"
});

}

