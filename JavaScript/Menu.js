
function myFunction() {
    var x = document.getElementById("myLinks");
    var menu = document.getElementById("menu")
    if (x.style.display === "block") {
      x.style.display = "none";
      menu.style.display = "block";
      ex.style.display = "none";
      document.getElementById("bhh").style = "transform: rotate(0deg);"
      document.getElementById("bbg").style.display = "none"
    } else {
      x.style.display = "block";
menu.style.display = "none";
ex.style.display = "block";

    }
  }
  function nnh() {
    var x = document.getElementById("bbg");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("bhh").style = "transform: rotate(0deg);"

    } else {
      x.style.display = "block";
      document.getElementById("bhh").style = "transform: rotate(90deg);"
    }
    
  }
  function Scroll() {
    

    window.scrollTo(0, 0);
    }
    function Scroll2() {
        
    
        window.scrollTo(-1200, 0);
        }  
        