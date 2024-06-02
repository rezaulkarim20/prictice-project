function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "navber") {
    x.className += "responsive";
  } else {
    x.className = "navber";
  }
}
