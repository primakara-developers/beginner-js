function addTodo() {
  const todoInput = document.getElementById('todo-input');
  // Get the value of user input from input field
  const todoData = todoInput.value;

  // Validate the input from empty value
  if (todoData.trim() === '') {
    alert('Input masih kosong!');
  }

  // Create a new list item
  var newTodo = document.createElement('li');
  newTodo.appendChild(document.createTextNode(todoData));

  // Add the new task to the task list
  const todoList = document.getElementById('todo-list');
  todoList.appendChild(newTodo);

  // Clear the input field value
  todoInput.value = '';
}
