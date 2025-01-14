function alertCart() {
  window.alert("mensaje de alerta de windows");
}

function over(element) {
  console.log(element.src);
  element.src = "./img/cactus-s.jpg";
}

function out(element) {
  console.log(element.src);
  element.src = "./img/aeonium-s.jpg";
}

function removeMessage() {
  var element = document.querySelector(".conteiner-message");
  // var element = document.querySelector(".conteiner-section-p");
  // var element = document.querySelectorAll(".discover");
  // var element = document.getElementById("imgCM")
  // var element = document.getElementsByClassName("conteiner-section-p")
  console.dir(element);
  // element.style.display = "none";
  element.remove();
  // element.style.backgroundColor = "black";
}

function changeText() {
  var element = document.querySelector("#discover");
  console.dir(element);
  element.innerText = "nuevo texto";
}
