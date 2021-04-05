import './TodoEditor.scss';
import { Component } from 'react';

class TodoEditor extends Component {
  state = { message: '' };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Save{' '}
        </button>
      </form>
    );
  }
}

export default TodoEditor;
