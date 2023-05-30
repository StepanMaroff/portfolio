let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav__links")
let navLinksAll = document.querySelectorAll(".nav__links a")
console.log(navLinksAll);

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
}

for (let i = 0; i < 4; i++) {
    console.log(i);
    navLinksAll[i].onclick = function () {
        navLinks.classList.remove("nav__links_active")
        hamburger.classList.remove("hamburger_active");
    }
}

let form = document.querySelector("form");
let iframe = document.querySelector("iframe");
let formSend = document.querySelector(".form__send");

iframe.onload = function () {
    formSend.classList.add("form__send_active");
    setTimeout(() => {
        form.reset ();
        formSend.classList.remove("form__send_active");
    }, 3000);
}

