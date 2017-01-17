import React, { Component } from 'react';

const Select = React.createClass({
  getInitialState: function () {
    return {value: "B"};
  },
  handleChange: function (event) {
    const nextValue = event.target.value;

    this.setState({value: nextValue});
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h1>select</h1>

          <div>
          {"I'm changeable and under React's control."}
            <select onChange={this.handleChange} value={this.state.value}>
              <option value="A">Apple</option>
              <option value="B">Banana</option>
            </select>
          </div>

          <div>
            {"I'm read-only, am under React's control, but raise a warning."}
            <select value="B">
              <option value="A">Apple</option>
              <option value="B">Banana</option>
            </select>
          </div>

          <div>
            {"I'm changeable but am not under React's control."}
            <select defaultValue="B">
              <option value="A">Apple</option>
              <option value="B">Banana</option>
            </select>
          </div>

          <div>
            {"I'm read-only but under React's control."}
            <select readOnly={true} value="B">
              <option value="A">Apple</option>
              <option value="B">Banana</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
});

export default Select;
