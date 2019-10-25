
  function validasi(form)  {
    var username = document.getElementById("username").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (username != "" && password1 != "" && passwrod2 != "") {
        return (true);
    } else {
        alert('Anda harus mengisi data dengan lengkap !') ;
        return (false);
    }
}
function validasireg() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (fname !="" && lname !="" && username != "" && password != "" ) {
      return true;
  } else {
      alert('Anda harus mengisi data dengan lengkap !');
  }
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Sliders");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

