let open = document.getElementById("open");
let close = document.getElementById("close");
let nav = document.getElementById("navbar");
  
function openMenu() {
    nav.className = "navbar row mobile";
    open.className = "navbar__hamburger-menu close";
    close.className = "navbar__hamburger-menu open";

}

function closeMenu() {
  nav.className = "navbar row";
  open.className = "navbar__hamburger-menu open";
  close.className = "navbar__hamburger-menu close";

}

const bookmarkingLink = document.getElementById("simple-bookmarking-link");
const speedySearchLink = document.getElementById("speedy-search-link");
const easyShareLink = document.getElementById("easy-sharing-link");
let bookmarking = document.getElementById("simple-bookmarking");
let speedySearch = document.getElementById("speedy-search");
let easyShare = document.getElementById("easy-sharing");

bookmarkingLink.addEventListener("click", () => {
  if (window.innerWidth < 850) {
    bookmarking.style.display = "block";
    speedySearch.style.display = "none";
    easyShare.style.display = "none";
  } else {
    bookmarking.style.display = "flex";
    speedySearch.style.display = "none";
    easyShare.style.display = "none";
  }

});

speedySearchLink.addEventListener("click", () => {
  if (window.innerWidth < 850) {
    speedySearch.style.display = "block";
    bookmarking.style.display = "none";
    easyShare.style.display = "none";
  } else {
    speedySearch.style.display = "flex"
    bookmarking.style.display = "none";
    easyShare.style.display = "none";
  }
});

easyShareLink.addEventListener("click", () => {
  if (window.innerWidth < 850) {
    easyShare.style.display = "block";
    bookmarking.style.display = "none";
    speedySearch.style.display = "none";
  } else {
    easyShare.style.display = "flex";
    bookmarking.style.display = "none";
    speedySearch.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (bookmarking.style.display === "block" && window.innerWidth > 850) {
    bookmarking.style.display = "flex";
  } else if(bookmarking.style.display === "flex" && window.innerWidth < 850) {
    bookmarking.style.display = "block";
  }else if(speedySearch.style.display === "block" && window.innerWidth > 850) {
    speedySearch.style.display = "flex";
  }else if(speedySearch.style.display === "flex" && window.innerWidth < 850) {
    speedySearch.style.display = "block";
  }else if(easyShare.style.display === "block" && window.innerWidth > 850) {
    easyShare.style.display = "flex";
  }else if(easyShare.style.display === "flex" && window.innerWidth < 850) {
    easyShare.style.display = "block";
  }
})    

const dropdownAnswer1 = document.getElementById("dropdown__answer-1");
const dropdownAnswer2 = document.getElementById("dropdown__answer-2");
const dropdownAnswer3 = document.getElementById("dropdown__answer-3");
const dropdownAnswer4 = document.getElementById("dropdown__answer-4");

dropdownAnswer1.addEventListener("click", () => {
  let answer = document.getElementById("answer1");

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

dropdownAnswer2.addEventListener("click", () => {
  let answer = document.getElementById("answer2");

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

dropdownAnswer3.addEventListener("click", () => {
  let answer = document.getElementById("answer3");

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

dropdownAnswer4.addEventListener("click", () => {
  let answer = document.getElementById("answer4");

  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});
