import React, { Component } from 'react';

const FocusEvents = React.createClass({
  getInitialState: function () {
    return {value: "I'm blurred :("};
  },
  handleBlur: function () {
    const nextValue = "I'm blurred :(";

    this.setState({value: nextValue});
  },
  handleFocus: function () {
    const nextValue = "I'm focused :D";

    this.setState({value: nextValue});
  },
  render: function () {
    return (
      <div className={"input-group"}>
        <h1>focus events</h1>
        <input
          className={"form-control"}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          readOnly={true}
          value={this.state.value}
        />
      </div>
    );
  }
});

export default FocusEvents;
