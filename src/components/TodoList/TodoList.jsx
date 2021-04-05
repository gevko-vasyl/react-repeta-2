import classNames from 'classnames';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': todo.completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={todo.completed}
          onChange={() => onToggleCompleted(todo.id)}
        />
        <p className="TodoList__text">{todo.text}</p>
        <button className="TodoList__btn" onClick={() => onDeleteTodo(todo.id)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
