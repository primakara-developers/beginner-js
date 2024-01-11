const todos = [];

function displayTodos() {
  // Select the task list ul element
  const todoList = document.getElementById("todo-list");

  // Clear the existing list
  todoList.innerHTML = "";

  for (i = 0; i < todos.length; i++) {
    todoList.innerHTML += `
    <li>
    ${i + 1}. ${todos[i]}
    <button class="btn-edit" onclick="editTodo(${i})">Edit</button>
    <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
    </li>
    `;
  }
}

function addTodo() {
  // Select the input element
  const todoInput = document.getElementById("todo-input");

  // Get the value of user input from input field
  const todoData = todoInput.value;

  // Validate the input from empty value
  if (todoData.trim() === "") {
    alert("Input masih kosong!");
  } else {
    // Input new todo data to "todos" array
    todos.push(todoData);
  }

  // Clear the input field value
  todoInput.value = "";

  // Trigger display function for update new data
  displayTodos();
}

function deleteTodo(index) {
  // Remove the todo at the specified index
  todos.splice(index, 1);

  // Refresh the todo list
  displayTodos();
}

function editTodo(index) {
  // Prompt field for a new todo value
  const newTodo = prompt("Edit todo:", todos[index]);

  // Validate edited todo value
  if (newTodo === "") {
    alert("Todo value cannot empty!");
  } else {
    if (newTodo !== null) {
      // Update the todo if the user entered a new description
      todos[index] = newTodo;
      // Refresh the todo list
      displayTodos();
    }
  }
}

displayTodos();
