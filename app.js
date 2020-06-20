function onReady() {
  let toDos = [];
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if(!NEW_TODO_TEXT.value) {return;}

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });

    id++;

    NEW_TODO_TEXT.value = '';

    renderTheUI();
  }

  function renderTheUI(){
    const TODO_LIST = document.getElementById('toDoList');

    TODO_LIST.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const DELETE_BTN = document.createElement('button');
      DELETE_BTN.textContent = "Delete";

      DELETE_BTN.addEventListener('click', event => {
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      TODO_LIST.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(DELETE_BTN);
      });
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
 };
