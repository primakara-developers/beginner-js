const todos = [];

function displayTodos() {
  // Select the task list ul element
  const todoList = document.getElementById('todo-list');

  // Clear the existing list
  todoList.innerHTML = '';

  for (i = 0; i < todos.length; i++) {
    todoList.innerHTML += `
    <li>
    ${todos[i]}
    <button onclick="deleteTodo(${i})">X</button>
    </li>
    `;
  }
}

function addTodo() {
  // Select the input element
  const todoInput = document.getElementById('todo-input');

  // Get the value of user input from input field
  const todoData = todoInput.value;

  // Validate the input from empty value
  if (todoData.trim() === '') {
    alert('Input masih kosong!');
  }

  // Input new todo data to "todos" array
  todos.push(todoData);

  // Clear the input field value
  todoInput.value = '';

  // Trigger display function for update new data
  displayTodos();
}

function deleteTodo(index) {
  // Remove the task at the specified index
  todos.splice(index, 1);

  // Refresh the task list
  displayTodos();
}

displayTodos();
