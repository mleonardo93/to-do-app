const onReady = function() {
  const toDos = [];
  const addToDoForm = document.getElementById("addToDoForm");


  const createNewToDo = function(){
    const newToDoText = document.getElementById("newToDoText");


//  verbatim from the checkpoint; this didn't work
//  if (!newToDoText) { return }
//
//   this didn't work
//   if (!newToDoText) {
//     console.log("no input, aborting function");
//     return
//   }
//
//   nor did this
//   !newToDoText ? return;

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = " ";

    renderTheUI(toDos);
    }


  const renderTheUI = function(toDos){
    const toDoList = document.getElementById("toDoList");

    toDoList.textContent = "";

    toDos.forEach(toDo => {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const deleter = document.createElement("input");
      deleter.type = "button"
      deleter.value = "Delete"
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleter);

      deleter.addEventListener("click", function() {
        console.log(toDo);
        console.log(toDos.indexOf(toDo));
        toDos.splice(toDos.indexOf(toDo), 1);
        renderTheUI(toDos);
      })
    })
  }

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();

  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
}
