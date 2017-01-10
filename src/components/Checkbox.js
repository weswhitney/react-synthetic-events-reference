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

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              checked={this.state.checked}
              type="checkbox"
              onChange={this.handleChange}
            />
          </span>
          {"I'm changeable and under React's control."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              type="checkbox"
              checked={true}
            />
          </span>
          {"I'm read only, am under React's control, but raise a warning."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              defaultChecked={true}
              type="checkbox"
            />
          </span>
          {"I'm changeable but am not under React's control."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              checked={true}
              readOnly={true}
              type="checkbox"
            />
          </span>
          {"I'm read-only and under React's control."}
        </div>
      </div>
    );
  }
});

export default Checkbox;
