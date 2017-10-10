const onReady = function() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", () => {
    event.preventDefault();
    let title = newToDoText.value;

    let newLi = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var deleter = document.createElement("input");
    deleter.type = "button"
    deleter.value = "Deport"
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleter);
    toDoList.appendChild(newLi);
    newToDoText.value = "";
    deleter.onclick = function () {
      event.currentTarget.parentElement.remove();
    }
  });
}

window.onload = function() {
  onReady();
}
