let loadBtn = document.querySelectorAll(".offer__card-btn");
let dot = document.querySelectorAll(".dots");
let more_content = document.querySelectorAll(".more");
// let cards = document.querySelector(".offer__card-container");
loadBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    let show = elm.getAttribute("data-show");
    let more = document.getElementById(show);

    if (elm.innerText === "Read More") {
      elm.innerText = "Read less";
      more.classList.add("active");
    } else if (elm.innerText == "Read less") {
      elm.innerText = "Read More";
      more.classList.remove("active");
    } else {
      elm.innerText = "Read More";
    }
  });
});

// blog section show more js
// let more__content = document.querySelector(".des>span");
let b_more__btn = document.querySelectorAll(".blog-more-btn");
b_more__btn.forEach((elm) => {
  elm.addEventListener("click", () => {
    let more_content_ID = elm.getAttribute("data-show");
    let blog_card_more = document.getElementById(more_content_ID);
    if (elm.innerText == "Read More") {
      elm.innerText = "Show less";
      blog_card_more.classList.add("active");
    } else {
      elm.innerText = "Read More";
      blog_card_more.classList.remove("active");
    }
    console.log(elm);
    console.log(blog_card_more);
  });
});

// loader js
let loader = document.querySelector(".loading img");
let loading__content = document.querySelector(
  ".blog__content-left-loading-content"
);
let loader__btn = document.querySelector(".l-btn");

loader__btn.addEventListener("click", () => {
  loader.style.display = "block";
  setTimeout(() => {
    loading__content.classList.add("active");
    loader.style.display = "none";
  }, 3000);
});
