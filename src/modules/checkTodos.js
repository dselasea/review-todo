import './interaction.js';

export function updateCheck(local, checked, id) {
  local.forEach((task, index) => {
    if (Number(id) === index + 1) {
      task.completed = checked;
    }
  });
  localStorage.setItem('todoData', JSON.stringify(local));
}

export function clearCompleted(local) {
  const complete = local.filter((task) => task.completed === false);

  localStorage.setItem('todoData', JSON.stringify(complete));
  window.location.reload();
}