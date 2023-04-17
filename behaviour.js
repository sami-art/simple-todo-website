const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = [];

// Listen for add button click
addBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

// Listen for enter keypress in todo input field
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// Add a new todo item to the list
function addTodoItem(todoText) {
  const todo = {
    id: todos.length,
    text: todoText,
  };
  todos.push(todo);
  renderTodoList();
}

// Remove a todo item from the list
function removeTodoItem(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodoList();
}

// Render the todo list to the page
function renderTodoList() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.classList.add("todoText");
    todoText.textContent = todo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      removeTodoItem(todo.id);
    });
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
  });
}
