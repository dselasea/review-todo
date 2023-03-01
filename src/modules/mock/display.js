const todoList = () => {
  let todos = [];

  let htmlList = '';
  for (let i = 0; i < todos.length; i += 1) {
    let isCompleted;
    if (todos[i].completed === true) {
      isCompleted = 'checked';
    }
    htmlList += `
    <li id=${todos[i].index}>
    <label class="check-container">
    <input class="input-check" id=${todos[i].index} type="checkbox" ${isCompleted} />
    </label>
    <span class="span" id=${todos[i].index}>${todos[i].description}</span>
    <i class="fa fa-ellipsis-v fav"></i>
    <i class="fa fa-trash-o" id="trash"></i>
    </li>`;
  }
  taskList.innerHTML = htmlList;
  let count = 0;
  for (let i = 0; i < todos.length; i += 1) {
    count += 1;
    todos[i].index = count;
  }
  localStorage.setItem('todoData', JSON.stringify(todos));
};

export default todoList;