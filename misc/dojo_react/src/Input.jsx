import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.onChangeValue = this.onChangeValue.bind(this)
  }

  onChangeValue(e) {
    const value = e.target.value;
    this.props.onUpdateInput(value);
  }

  render() { 
    return (  
      <input type="text" onChange={this.onChangeValue}/>
    );
  }
}
 
export default Input;