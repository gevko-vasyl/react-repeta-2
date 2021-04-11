import axios from 'axios';

const fetchTodos = () => {
  return axios
    .get('http://localhost:3000/todos')
    .then(response => response.data);
};

const addTodo = todoId => {
  return axios
    .post('http://localhost:3000/todos', todoId)
    .then(responce => responce.data);
};

const deleteTodo = todoId => {
  return axios.delete(`http://localhost:3000/todos/${todoId}`);
};

const updateTodo = (todoId, update) => {
  return axios
    .patch(`http://localhost:3000/todos/${todoId}`, update)
    .then(({ data }) => data);
};

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
