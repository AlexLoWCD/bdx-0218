import React, { Component } from 'react';
import Text from './Text';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'salut',
    }

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(value) {
    this.setState({
      text: value,
    })
  }

  render() {
    return (
      <div className="App"> 
        <Form onSubmitForm={this.onSubmitForm}/>
        <Text text={this.state.text} />
      </div>
    );
  }
}

export default App;
