import { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button className="Dropdown__toggle" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && <div className="Dropdown__menu">MENU</div>}
      </div>
    );
  }
}

export default Dropdown;
