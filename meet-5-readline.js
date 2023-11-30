const readline = require('readline'); // import the readline

// Initiate the readline process command
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

function displayMenu() {
  console.log('\n===== Todo List =====');
  console.log('1. Tambah Todo');
  console.log('2. List Todo');
  console.log('3. Hapus Todo');
  console.log('4. Exit');
}

function createTodo() {
  rl.question('Masukkan judul: ', (title) => {
    rl.question('Masukkan deskripsi: ', (desc) => {
      const newTodo = {
        id: new Date().getTime(),
        title: title,
        desc: desc,
      };
      todos.push(newTodo);
      console.log('Berhasil menambahkan Todo!');
      displayMenu();
      handleUserInput();
    });
  });
}

function displayTodo() {
  console.log('\n===== Tasks =====');
  if (todos.length === 0) {
    console.log('Tidak ada Todo!');
  } else {
    for (let i = 0; i < todos.length; i++) {
      console.log(
        `${i + 1}. (${todos[i].id}) ${todos[i].title}, ${todos[i].desc}`
      );
    }
  }
  displayMenu();
  handleUserInput();
}

function deleteTodo() {
  rl.question('Masukkan id: ', (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (id === String(todos[i].id)) {
        todos.splice(i, 1);
      }
    }
    displayMenu();
    handleUserInput();
  });
}

function handleUserInput() {
  rl.question('Pilih menu (1-4): ', (menu) => {
    switch (menu) {
      case '1':
        createTodo();
        break;
      case '2':
        displayTodo();
        break;
      case '3':
        deleteTodo();
        break;
      case '4':
        console.log('Sampai jumpa!');
        rl.close();
        break;
      default:
        console.log('Pilihan tidak valid. Silahkan pilih angka 1 sampai 3.');
        showMenu();
        handleUserInput();
        break;
    }
  });
}

// Initial running setup
displayMenu();
handleUserInput();
