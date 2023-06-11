// Javascript Code

window.onload = function () {
  var draggableItems = document.querySelectorAll(".draggable");
  var droppableContainer = document.getElementById("container2");
  var resetBtn = document.getElementById("resetBtn");
  var successMessage = null;

  for (var i = 0; i < draggableItems.length; i++) {
    draggableItems[i].addEventListener("dragstart", dragStart);
  }

  droppableContainer.addEventListener("dragover", dragOver);
  droppableContainer.addEventListener("dragenter", dragEnter);
  droppableContainer.addEventListener("dragleave", dragLeave);
  droppableContainer.addEventListener("drop", drop);

  resetBtn.addEventListener("click", resetContainers);

  var draggedItem = null;

  function dragStart(event) {
    draggedItem = this;
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add("dragging");
  }

  function dragOver(event) {
    event.preventDefault();
    droppableContainer.classList.add("drag-over");
  }

  function dragEnter(event) {
    event.preventDefault();
  }

  function dragLeave(event) {
    droppableContainer.classList.remove("drag-over");
  }

  function drop(event) {
    event.preventDefault();
    droppableContainer.classList.remove("drag-over");
    var itemId = event.dataTransfer.getData("text/plain");
    var item = document.getElementById(itemId);

    if (item && draggedItem !== item) {
      item.classList.remove("dragging");
      droppableContainer.appendChild(item);
      displaySuccessMessage();
    }
  }

  function displaySuccessMessage() {
    if (!successMessage) {
      successMessage = document.createElement("p");
      successMessage.id = "successMessage";
      successMessage.textContent = "Image dropped successfully!";
      droppableContainer.appendChild(successMessage);
    }
  }

  function resetContainers() {
    droppableContainer.innerHTML = "";
    successMessage = null;
    restoreDraggableItems();
  }

  function restoreDraggableItems() {
    var container1 = document.getElementById("container1");
    var draggableItems = container1.querySelectorAll(".draggable");
    for (var i = 0; i < draggableItems.length; i++) {
      container1.appendChild(draggableItems[i]);
    }
  }
};
