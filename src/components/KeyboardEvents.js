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
      <div className="panel panel-default">
        <div className="panel-body">
          <h1>keyboard events</h1>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Event</th>
                <th>Trigger(s)</th>
                <th><code>event.which</code></th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td><code>onKeyDown</code></td>
              <td>When pressed down. Report while holding.</td>
              <td>Key code</td>
            </tr>
            <tr>
              <td><code>onKeyPress</code></td>
              <td>When inserted. Repeats while inserting.</td>
              <td>Character code</td>
            </tr>
            <tr>
              <td><code>onKeyUp</code></td>
              <td>When released up.</td>
              <td>Key code</td>
            </tr>
            </tbody>
          </table>

          <textarea
            className="form-control"
            rows="3"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyPress={this.handleKeyPress}
            onKeyUp={this.handleKeyUp}
            value={this.state.value}
          />

          <button onClick={this.handleClick} type="button" className="btn btn-default">
            Clear
          </button>

          <h2>history</h2>

          {this.state.events.map((e, index) => {
            return <div key={index}>{e}</div>;
          })}
        </div>
      </div>
    );
  }
});

export default KeyboardEvents;
