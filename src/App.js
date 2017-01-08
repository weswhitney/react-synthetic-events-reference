import React, { Component } from 'react';
import Checkbox from './components/Checkbox.js'
import FocusEvents from './components/FocusEvents.js'
import Form from './components/Form.js'
import KeyboardEvents from './components/KeyboardEvents.js'
import MouseEvents from './components/MouseEvents.js'
import Radio from './components/Radio.js'
import Select from './components/Select.js'
import Textarea from './components/Textarea.js'
import Textfield from './components/Textfield.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"container"} >
      <Checkbox />
      <FocusEvents />
      <Form />
      <KeyboardEvents />
      <MouseEvents />
      <Radio />
      <Select />
      <Textarea />
      <Textfield />
    </div>
    );
  }
}

export default App;
