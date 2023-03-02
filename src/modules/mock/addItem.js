import todoList from "./display";
function addItem() {
  const todos = [];
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
    localStorage.setItem('localTodos', JSON.stringify(todos));
    // clearInput();
    todoList();
}

export default addItem;