import React, { Component } from 'react';

const KeyboardEvents = React.createClass({
  getInitialState: function () {
    return {events: [], value: ''};
  },
  handleChange: function (e) {
    const nextValue = e.target.value;

    this.setState({value: nextValue});
  },
  handleClick: function () {
    this.setState({events: [], value: ''});
  },
  handleKeyDown: function (e) {
    const nextEvents = this.state.events.concat(`Key Down: ${e.which}`);

    this.setState({events: nextEvents});
  },
  handleKeyPress: function (e) {
    const nextEvents = this.state.events.concat(`Key Press: ${e.which}`);

    this.setState({events: nextEvents});
  },
  handleKeyUp: function (e) {
    const nextEvents = this.state.events.concat(`Key up: ${e.which}`);

    this.setState({events: nextEvents});
  },
  render: function () {
    return (
      <div>

        <h1>keyboard events</h1>

        <textarea
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onKeyPress={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
          value={this.state.value}
        />

        <button onClick={this.handleClick}>
          Clear
        </button>

        <h2>history</h2>

        {this.state.events.map((e, index) => {
          return <div key={index}>{e}</div>;
        })}
      </div>
    );
  }
});

export default KeyboardEvents;
