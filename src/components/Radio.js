import React, { Component } from 'react';

const Radio = React.createClass({
  getInitialState: function () {
    return {value: 'no'}
  },
  handleChange: function (e) {
    const nextValue = e.target.value;

    this.setState({value: nextValue});
  },
  render: function () {
    return (
      <div>

        <h1>radio</h1>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              checked={this.state.value === 'yes'}
              onChange={this.handleChange}
              type="radio"
              value="yes"
            />Yes
            <input
              checked={this.state.value === 'no'}
              onChange={this.handleChange}
              type="radio"
              value="no"
            />No
          </span>
          {"We're changeable and under React's control."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              checked={true}
              name="1"
              type="radio"
              value="yes"
            />
            <input
              checked={true}
              name="1"
              type="radio"
              value="no"
            />
          </span>
          {"We're read-only, are under React's control, but raise a warning."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              defaultChecked={true}
              name="2"
              type="radio"
              value="yes"
            />
            <input
              defaultChecked={false}
              name="2"
              type="radio"
              value="no"
            />
          </span>
          {"We're are changeable but are not under React's control."}
        </div>

        <div className={"input-group"}>
          <span className={"input-group-addon"}>
            <input
              checked={true}
              name="3"
              readOnly={true}
              type="radio"
              value="yes"
            />
            <input
              checked={false}
              name="3"
              readOnly={true}
              type="radio"
              value="no"
            />
          </span>
          {"We're read-only and are under React's control."}
        </div>
    </div>
    )
  }
})

export default Radio;
