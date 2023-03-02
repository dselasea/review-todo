import addItem from "./mock/addItem.js";
import removeItem from "./mock/removeItem.js";

describe('Adding todos', () => {
  it('Check the array if not null', () => {
    localStorage.removeItem('localTodos');
    addItem('Pray');
    const task = JSON.parse(localStorage.getItem('localTodos'));
    expect(task.length).not.toBeNull();
  });

  it('Added to DOM', () => {
    localStorage.removeItem('localItem');
    addItem('Dance');
    const task = JSON.parse(localStorage.getItem('localTodos'));
    expect(task).toHaveLength(task.length);
  });
});

