const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodoInput");
const addTodoButton = document.getElementById("addTodoButton");

let todos = [];

// Load saved todos from local storage
function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

// Save LocalStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add a new todo
function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (!todoText) {
    return;
  }
  const todo = { text: todoText, done: false };
  todos.push(todo);
  saveTodos();
  renderTodos();
  newTodoInput.value = "";
}

// Delete or edit a todo
function deleteOrEditTodo(event) {
  const target = event.target;
  if (target.type === "checkbox") {
    const li = target.parentNode;
    const index = Array.prototype.indexOf.call(todoList.children, li);
    todos[index].done = target.checked;
    saveTodos();
    li.classList.toggle("done");
  } else if (target.tagName === "BUTTON") {
    const li = target.parentNode;
    const index = Array.prototype.indexOf.call(todoList.children, li);
    todos.splice(index, 1);
    saveTodos();
    li.remove();
  } else if (target.tagName === "SPAN") {
    const span = target;
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.innerText;
    input.addEventListener("blur", function () {
      const newTodoText = input.value.trim();
      if (newTodoText) {
        const li = input.parentNode;
        const index = Array.prototype.indexOf.call(todoList.children, li);
        todos[index].text = newTodoText;
        saveTodos();
        span.innerText = newTodoText;
      } else {
        const li = input.parentNode;
        const index = Array.prototype.indexOf.call(todoList.children, li);
        input.value = todos[index].text;
      }
      span.style.display = "inline";
      input.remove();
    });
    span.style.display = "none";
    span.parentNode.insertBefore(input, span);
    input.focus();
  }
}

function renderTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", deleteOrEditTodo);
    const span = document.createElement("span");
    span.innerText = todo.text;
    span.addEventListener("dblclick", deleteOrEditTodo);
    const button = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-can");
    button.appendChild(icon);
    button.addEventListener("click", deleteOrEditTodo);
    li.append(checkbox);
    li.append(span);
    li.append(button);
    if (todo.done) {
      li.classList.add("done");
    }
    todoList.append(li);
  }
}

// Load saved todos and render them
loadTodos();
renderTodos();

// Add event listeners
addTodoButton.addEventListener("click", function (event) {
  event.preventDefault();
  addTodo();
});

newTodoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo();
  }
});
