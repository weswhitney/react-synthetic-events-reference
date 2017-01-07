import React, { Component } from 'react';
import Textfield from './components/Textfield.js';
import Textarea from './components/Textarea.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Textfield />
      <Textarea />
    </div>
    );
  }
}

export default App;
