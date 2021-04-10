const TodoItem = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        className="TodoList__checkbox"
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button className="TodoList__btn" onClick={onDelete}>
        Remove
      </button>{' '}
    </>
  );
};

export default TodoItem;
