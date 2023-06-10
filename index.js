// Javascript code


let contn1 = document.getElementById("cont1");

let contn2 = document.getElementById("cont2");

let items = document.querySelectorAll("submain");

// Event listeners :-

items.forEach(val => {
    val.addEventListener("dstart", start);
    val.addEventListener("dend", end);
});










