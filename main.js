window.addEventListener('DOMContentLoaded', main);

function main() {
  const form = document.getElementById("todo-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    addTodo();
  });
}

function addTodo() {
  const todoInput = document.getElementById("todo-input").value;
  const newLi = document.createElement("li");
  newLi.classList.add('todo-item')
  newLi.textContent = todoInput;

  const divTasks = document.createElement("div");
  divTasks.classList.add("divTasks")

  divTasks.append(newLi)
  
 
  // DELETE BTN
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", removeTodo);
  divTasks.append(removeBtn);

  const todoList = document.getElementById("todo-list");
  todoList.appendChild(divTasks);

  document.getElementById("todo-input").value = "";
}


// Remove todo function
function removeTodo() {
  this.parentNode.remove();
}
