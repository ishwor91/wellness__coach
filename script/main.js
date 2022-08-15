let menu = document.querySelector(".fa-bars");
let sec_menu = document.querySelector(".secondary__nav");
let close = document.querySelector(".mobile-menu-close");
let main__navigation = document.querySelector(".nav_container");
const mobile__navigation = document.querySelector(".mobile-menu");
const mobile__menu = document.querySelector(".mid__nav-container");

menu.addEventListener("click", () => {
  sec_menu.classList.toggle("active");
  mobile__navigation.classList.toggle("active");
  mobile__menu.classList.toggle("active");
});
mobile__navigation.addEventListener("click", () => {
  sec_menu.classList.toggle("active");
  menu.classList.toggle("active");
  main__navigation.classList.toggle("active");
  mobile__menu.classList.toggle("active");
});
close.addEventListener("click", () => {
  sec_menu.classList.remove("active");
  main__navigation.classList.remove("active");
  mobile__menu.classList.remove("active");
});

// js for sticky navbar
let nav = document.querySelector(".bottom__nav");

let sticky = nav.offsetTop;
myFunc = () => {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
window.addEventListener("scroll", myFunc);



let body = document.body;
let lastScroll = nav.offsetTop;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll <= 100 ) {
    body.classList.remove("scrollUp");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scrollDown")) {
    body.classList.add("scrollDown");
    body.classList.remove("scrollUp");
  }
  if (currentScroll < lastScroll && body.classList.contains("scrollDown")) {
    body.classList.remove("scrollDown");
    body.classList.add("scrollUp");
  }
 lastScroll = currentScroll;
});
