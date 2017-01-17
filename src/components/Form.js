import React, { Component } from 'react';

const Form = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },
  handleChange: function (event) {
    const nextState = { [event.target.name]: event.target.value };

    this.setState(nextState);
    console.log(nextState);
  },
  handleSubmit: function (event) {
    event.preventDefault();
    alert("you're logged in")
    // prehaps send a JSON string to a server...
    JSON.stringify({
      password: this.state.password,
      username: this.state.username
    });
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h1>form</h1>
          <form onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
});

export default Form;
