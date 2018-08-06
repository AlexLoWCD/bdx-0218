import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }

    this.display = this.display.bind(this)
    this.onUpdateInput = this.onUpdateInput.bind(this)
  }

  display(event) {
    event.preventDefault();
    this.props.onSubmitForm(this.state.value);
  }

  onUpdateInput(value) {
    this.setState({value});
  }

  render() {
    return (
      <form onSubmit={this.display}>
        <Input ref="inputCmp" onUpdateInput={this.onUpdateInput} />
        <input type="submit" name="Envoyer" />
      </form>
    )
  }
}

export default Form;