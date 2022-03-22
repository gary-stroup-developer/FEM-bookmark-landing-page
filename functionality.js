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

// function openMenu() {
//   var open = document.getElementById("open");
//   var close = document.getElementById("close");
//   var nav = document.getElementById("navbar");

//   if (nav.className === "navbar row") {
//     nav.className += " mobile";
//     open.className = "navbar__hamburger-menu close";
//     close.className = "navbar__hamburger-menu open";
//   }
//   else {
//     nav.className = "navbar row"
//     open.className = "navbar__hamburger-menu open";
//     close.className = "navbar__hamburger-menu close";
//   }
      
// }
    


