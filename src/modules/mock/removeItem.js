import display from './display.js';

// Delete from storage
function removeItem(id) {
  let todos = [];
  const removeTodos = localStorage.getItem('localTodos');
  todos = JSON.parse(removeTodos);
      todos.splice(id, 1);
  localStorage.setItem('todoData', JSON.stringify(todos));
  display();
}

export default removeItem;