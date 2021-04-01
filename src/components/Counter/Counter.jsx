import React from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

//          CLASS COMPONENT
// 1) STATIC :
//  а) defaultProps
//  б) propTypes
// 2) STATE
// 3)METHODS
// 4)RENDER

class Counter extends React.Component {
  // BABEL ПЕРЕРОБИТЬ НА ЦЕ (ОЛД СКУЛ)
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //////
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    console.log('+1');
    // console.log(this);
    // console.log(event.target);
    const target = event.target;
    //   const {target} = event;
    setTimeout(() => console.log(target), 1000);

    //ДЛЯ ЗМІНИ БЕЗ СТАНУ ПОПЕРЕДНЬОГО
    // this.setState({ value: 10 });

    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDercement = event => {
    console.log('-1');
    console.log(this);
    console.log(event.target);

    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <Value stateValue={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDercement}
        />
      </div>
    );
  }
}

export default Counter;
