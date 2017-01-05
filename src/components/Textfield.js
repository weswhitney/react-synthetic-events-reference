import React, { Component } from 'react';

const Textfield = React.createClass({
  render: function () {
    return (
      <div>
        <input onChange={this.handleChange} />
        <input />
        <input />
        <input />
      </div>
    );
  }
});

export default Textfield;
