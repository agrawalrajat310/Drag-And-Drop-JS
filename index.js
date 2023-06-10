// Javascript code

let contn1 = document.getElementById("cont1");

let contn2 = document.getElementById("cont2");

let items = document.querySelectorAll("submain");

// Event listeners for container 1 :-

items.forEach((val) => {
  val.addEventListener("dstart", dStart);
  val.addEventListener("dend", dEnd);
});

// Event listeners for container 2 :-

contn2.addEventListener("drop", drop);
contn2.addEventListener("dover", dOver);

// event handler for drag start

function dStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("dragged");
}
