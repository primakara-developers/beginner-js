// object

const todo = { title: "Eat", desc: "Eat Spinach", status: false };

console.log(todo);
console.log(todo.title);
console.log(todo.desc);
console.log(todo.status);

todo.desc = "Eat tommorow with my gf";

console.log(todo);
console.log(todo.desc);

const todo2 = { "my-title": "Drink", "my-desc": "Drink Booba", status: true };

console.log(todo2);
console.log(todo2["my-title"]);
console.log(todo2["my-desc"]);
console.log(todo2.status);

todo2["my-desc"] = "Drink booba with my gf";

console.log(todo2);
console.log(todo2["my-desc"]);

/* -------------------------------------------------------------------------------------------- */

// array

const arrayTodo = ["Eat", "Play", "Sleep", "Repeat"];
console.log(arrayTodo);

// to access data in array, you must use index. Each array has own index, and start from zero 0

console.log(arrayTodo[0]);
console.log(arrayTodo[1]);
console.log(arrayTodo[2]);
console.log(arrayTodo[3]);

arrayTodo[3] = "Take a Bath";

console.log(arrayTodo);
console.log(arrayTodo[3]);

// looping array

for (let i = 0; i < arrayTodo.length; i++) {
  console.log(arrayTodo[i]);
}

/* -------------------------------------------------------------------------------------------- */

// array of object

const todos = [
  { title: "Eat", desc: "Eat Spinach", status: false },
  { title: "Drink", desc: "Drink Milk", status: false },
  { title: "Game", desc: "Gacha in Genshin", status: true },
];

console.log(todos);
console.log(todos[0]);
console.log(todos[1]);
console.log(todos[2]);

todos[2] = { title: "Work", desc: "Create Presentation", status: false };

console.log(todos);
console.log(todos[2]);

// looping array of object

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

todos[0].desc = "Eat Carrot";
console.log(todos);
console.log(todos[0]);
