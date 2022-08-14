let top_nav_hide = document.querySelector(".top-nav-hide");
let top_nav_show = document.querySelector(".top-nav-show");
let top_nav_content = document.querySelector(".top__nav-content");

top_nav_hide.addEventListener("click",()=>{
top_nav_content.classList.add("hide");
top_nav_hide.style.display="none";
top_nav_show.style.display="block";
});


top_nav_show.addEventListener("click",()=>{
    top_nav_content.classList.remove("hide");
    top_nav_hide.style.display="block";
    top_nav_show.style.display="none";

});