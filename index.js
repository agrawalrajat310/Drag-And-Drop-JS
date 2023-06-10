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

// event handler for drag end

function dEnd(e) {
  e.target.classList.remove("dragged");
}

// event handler for drag over

function dOver(e) {
  e.preventDefault();
}

// event handler for drop

function drop(e) {
  e.preventDefault();

  let iteID = e.dataTransfer.getData("text/plain");

  let itemDrop = document.getElementById(iteID);

  contn2.appendChild(itemDrop);

  document.getElementById("successmsg").innerText =
    "Item Dropped Successfully !!";
}

// event handler for reset containers value

function resetBtn() {
  contn1.innerHTML =
    '<div class="submain">Item 1</div><div class="submain">Item 2</div><div class="submain">Item 3</div>';

  contn2.innerHTML = "";

  document.getElementById("successmsg").innerText = "";
}
