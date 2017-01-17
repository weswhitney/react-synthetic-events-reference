import React, { Component } from 'react';

const MouseEvents = React.createClass({
  getInitialState: function () {
    return {
      clicks: 0,
      location: null,
      pageX: null,
      pageY: null
    };
  },
  handleClick: function () {
    const nextClicks = this.state.clicks + 1;

    this.setState({clicks: nextClicks})
  },
  handleMouseEnter: function () {
    this.setState({location: 'Entered'});
  },
  handleMouseLeave: function () {
    this.setState({location: 'Left'});
  },
  handleMouseMove: function (event) {
    const nextPageX = event.pageX;
    const nextPageY = event.pageY;

    this.setState({pageX: nextPageX, pageY: nextPageY});
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h1>mouse events</h1>
          <div
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{backgroundColor: 'lightblue', height: '300px', width: '300px'}}
          />
          <div>clicks: {this.state.clicks}</div>
          <div>location: {this.state.location}</div>
          <div>pageX: {this.state.pageX}</div>
          <div>pageY: {this.state.pageY}</div>
        </div>
      </div>
    );
  }
});

export default MouseEvents;
