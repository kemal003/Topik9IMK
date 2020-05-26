
function myTimer() {
  var time = new Date();
  document.getElementById("time").innerHTML = time.toLocaleTimeString();
  var jam = time.getHours();
  if (jam>=5 && jam<12) document.getElementById("salam").innerHTML = "Good Morning, Ya Ahlul Qolbi :)";
  else if (jam>=12 && jam<18) document.getElementById("salam").innerHTML = "Good Afternoon, Calon Orang Spesial :)";
  else if (jam>=18 && jam<24) document.getElementById("salam").innerHTML = "Good Evening, My Meow Meow :)";
  else if (jam>=0 && jam<2) document.getElementById("salam").innerHTML = "Heey, udah maleem. Ndak tiduur? ):";
  else if (jam>=2 && jam<5) document.getElementById("salam").innerHTML = "Good night, sayaang :*";
}

var counter = setInterval(function() {myTimer()},1000);
