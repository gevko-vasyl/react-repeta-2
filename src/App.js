import { Component } from 'react';
import Container from './components/Container';

// import Counter from './components/Counter/Counter'
// import Dropdown from './components/Dropdown/Dropdown'
// import ColorPicker from './components/ColorPicker'
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import todosData from './todos.json';

// import Form from './components/Form'

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: todosData,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: `id-${this.state.todos.length + 1}`,
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Got TODO!');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
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

  // onSubmitChange = data => {
  //   console.log(data)
  // }

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="App">
        <Container>
          <div>
            <p>Total Count: {totalTodoCount}</p>
            <p>Completed: {completedTodos}</p>
          </div>

          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.ChangeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Container>
        {/* <Form onSubmit={this.onSubmitChange} /> */}
      </div>
    );
  }
}

export default App;
