import { Component } from 'react';

import Container from '../components/Container';

// import Counter from './components/Counter/Counter'
// import Dropdown from './components/Dropdown/Dropdown'
// import ColorPicker from './components/ColorPicker'
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/Filter';
// import todosData from './todos.json';
import Modal from '../components/Modal';
// import Clock from './components/Clock';
// import Tabs from './components/Tabs';
// import tabs from './tabs.json';

import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import todosApi from '../services/todos-api';

// import Form from './components/Form'

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class TodosView extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    // const data = JSON.parse(localStorage.getItem('todos'));
    // data && this.setState({ todos: data });
    todosApi
      .fetchTodos()
      .then(todo => {
        this.setState({ todos: todo });
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      text,
      completed: false,
    };

    todosApi.addTodo(todo).then(todo => {
      this.setState(({ todos }) => ({
        todos: [...todos, todo],
      }));
    });
  };
  deleteTodo = todoId => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
    });
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;

    todosApi.updateTodo(todoId, { completed: !completed }).then(updatedTodo => {
      this.setState(prevState => ({
        todos: prevState.todos.map(todo =>
          todo.id === updatedTodo.id ? updatedTodo : todo,
        ),
      }));
    });
  };

  ChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="App">
        <Container>
          {/* <Clock/> */}
          {/* <Tabs items={tabs} /> */}

          <IconButton onClick={this.toggleModal} aria-label="Add Todo">
            <AddIcon width="40px" />
          </IconButton>

          <div>
            <p>Total Count: {totalTodoCount}</p>
            <p>Completed: {completedTodos}</p>
          </div>

          <Filter value={filter} onChange={this.ChangeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />

          {showModal && (
            <Modal onClose={this.toggleModal}>
              <button type="button" onClick={this.toggleModal}>
                X
              </button>
              <TodoEditor onSubmit={this.addTodo} />
            </Modal>
          )}
        </Container>
        {/* <Form onSubmit={this.onSubmitChange} /> */}
      </div>
    );
  }
}

export default TodosView;
