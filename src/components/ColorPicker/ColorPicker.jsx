import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color ColorPicker</h2>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
