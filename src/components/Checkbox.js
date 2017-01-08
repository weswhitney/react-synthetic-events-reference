import React, { Component } from 'react';

const Checkbox = React.createClass({
  getInitialState: function () {
    return {checked: false};
  },
  handleChange: function () {
    return this.setState({checked: !this.state.checked});
  },
  render: function () {
    return (
      <div>
        <h1>checkbox</h1>
        {"I'm changeable and under React's control."}
        <input checked={this.state.checked} type={"checkbox"} onChange={this.handleChange}/>
      </div>
    );
  }
});

export default Checkbox;
