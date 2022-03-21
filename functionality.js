    function openMenu() {
      var x = document.getElementById("navbar");
      if (x.className === "navbar row") {
        x.className += " mobile";
      } else {
        x.className = "navbar row";
      }
    }