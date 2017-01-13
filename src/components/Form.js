import React, { Component } from 'react';

const Form = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },
  handleChange: function () {
    const nextState = { [event.target.name]: event.target.value };

    this.setState(nextState);
  },
  render: function () {
    return (
      <div>
        <h1>form</h1>
        <form>
          <label>
            Username:
            <input
              name="username"
              onChange={this.handleChange}
              type="text"
              value={this.state.username}
            />
          </label>

          <label>
            Password:
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              value={this.state.password}
            />
          </label>
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
});

export default Form;
