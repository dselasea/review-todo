import todoList from "./display";
const todos = [];

function addItem(e) {
  todos.push(
    {
      description: 'Skate',
      completed: false,
      index: 0
    },
    {
      description: 'Do a coding challenge',
      completed: false,
      index: 1
    }
  )
    localStorage.setItem('todoData', JSON.stringify(todos));
    // clearInput();
    todoList();
  e.preventDefault();
}

export default addItem;