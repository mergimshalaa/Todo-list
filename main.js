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

  const todoList = document.getElementById("todo-list");
  todoList.appendChild(newLi);

  document.getElementById("todo-input").value = "";
}
