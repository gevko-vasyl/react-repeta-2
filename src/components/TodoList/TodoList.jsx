import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <div className="TodoList">
    <p>TODO list</p>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          <p className="TodoList__text">{todo.text}</p>
          <button onClick={() => onDeleteTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
export default TodoList;
