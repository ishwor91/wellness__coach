let menu = document.querySelector(".fa-bars");
let sec_menu = document.querySelector(".secondary__nav");
let close = document.querySelector(".fa-times");
let main__navigation = document.querySelector(".nav_container");
const mobile__navigation = document.querySelector(".mobile-menu");
const mobile__menu = document.querySelector(".mid__nav-container");

menu.addEventListener("click", () => {
    sec_menu.classList.toggle("active");
    // menu.classList.toggle("active");
    mobile__navigation.classList.toggle("active");
    mobile__menu.classList.toggle("active");


})
mobile__navigation.addEventListener("click", () => {
    sec_menu.classList.toggle("active");
    menu.classList.toggle("active");
    main__navigation.classList.toggle("active");
    mobile__menu.classList.toggle("active");



    
})
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
    
}
window.addEventListener("scroll", myFunc);


// swiper js script 
    //  <!-- Initialize Swiper -->
   // swiper for gallery
// var swiper = new Swiper(".card__container", {
//     slidesPerView: 4,
//   spaceBetween: 30,
//   breakpoints: {
   
//     // when window width is >= 320px
//     200: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     500: {
//       slidesPerView:2,
//       spaceBetween:20,
//     },
//     // when window width is >= 480px
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     // when window width is >= 1068px
//     1068: {
//       slidesPerView: 3,
//       spaceBetween:20,
//     },
//     1240: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
  
//     slidesPerGroup: 2,
//     loop: true,
//   loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
 
// });
