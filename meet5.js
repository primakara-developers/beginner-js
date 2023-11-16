// logic todo list

/*
const todo = {
  id: 1
  tile: "eat",
  desc: "i am eat banana",
  status: false
}
*/

// Sort by Date (Priority)
// Command by Redline via terminal (interactivity)
// Grouping by status

const todos = [];

function create(todo) {
  todos.push(todo);
  return todo;
}

function list() {
  return todos;
}

function get(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return todos[i];
    }
  }
}

function update(todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i] = todo;
      return todo;
    }
  }
}

function remove(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
    }
  }
}
