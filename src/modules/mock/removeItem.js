import display from './display.js';

// Delete from storage
function deleteFromStorage(id) {
  let todos = [];
  todos.forEach((todo, index) => {
    if (todo.index === Number(id)) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem('todoData', JSON.stringify(todos));
  display();
}

export default deleteFromStorage;