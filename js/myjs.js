const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const data = document.querySelector(".login-box");
const sub = document.querySelector("#sub");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}
let menu = document.querySelector(".hamburger")
window.onscroll = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let imgs = ["images/kidney.jpg", "images/plant", "images/back1.jpg", "images/back2.jpg"]
let colors = ["red", "blue", "black", "orange", "#8b0000", "white"];
let img1 = document.querySelector(".b");
let nav1 = document.querySelector(".nav-logo");
let fun = () => {
    let r = Math.floor(Math.random() * (3 + 1));
    img1.setAttribute("src", imgs[r]);
    let r1 = Math.floor(Math.random() * (6 + 1));
    nav1.style.color = colors[r1];
}
setInterval(fun, 1000);


//form data submit to the google sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbyUPd9NYw5j1eqCOcBTWn9IliSjk0OzdIPNU7V397yurHkWU5_d8hr90ccxnMfOkAi_zQ/exec'
const form = document.forms['data']

sub.addEventListener("click", () => {
    document.forms[0].submit();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) });
    alert("Thank you for contacting us....we will get back to you soon...");
});