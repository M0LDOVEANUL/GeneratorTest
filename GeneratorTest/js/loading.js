function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
        id = setInterval(slowFrame, 100);
      } else if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
    function slowFrame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }