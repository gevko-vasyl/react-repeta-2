import { Component } from 'react';

// import Counter from './components/Counter/Counter'
// import Dropdown from './components/Dropdown/Dropdown'
// import ColorPicker from './components/ColorPicker'
import TodoList from './components/TodoList';
import todosData from './todos.json';

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
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <div className="App">
        {/* <Counter initialValue={13}/> */}
        {/* <Dropdown/> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <span>Total:{todos.length}</span>
          <span>Completed:{completedTodos}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
