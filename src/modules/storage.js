const getStorage = () => {
  const store = JSON.parse(localStorage.getItem('todoData')) || [];
  return store;
};

export default getStorage;