import React, { Component } from 'react';

const Textfield = React.createClass({
    getInitialState: function () {
        return {value: "I'm changeable and under React's control" };
    },

    handleChange: function (e) {
      const nextValue = e.target.value;

      this.setState({value: nextValue});
    },

    render: function () {
      return (
        <div>
          <input onChange={this.handleChange} type={"text"} value={this.state.value} />
          <input type={"text"} value={"I'm read-only, am under React's control, but raise a warning."} />
          <input onChange={this.handleChange} defaultValue={"I'm changeable but am not under React's control."} />
          <input readOnly={true} type={"text"} value={"I'm read-only and under React's control."} />
        </div>
      );
    }
});

export default Textfield;
