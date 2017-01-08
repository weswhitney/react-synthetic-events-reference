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
          <h1>textfield</h1>
            <form className={"bs-example bs-example-form"}>
              <div className={"input-group-large"}>
                  <input
                  className={"form-control"}
                  onChange={this.handleChange}
                  type={"text"}
                  value={this.state.value}
                />
              </div>
                <div className={"input-group-large"}>
                <input
                  className={"form-control"}
                  type={"text"}
                  value={"I'm read-only, am under React's control, but raise a warning."}
                />
              </div>
              <div className={"input-group-large"}>
                <input
                  className={"form-control"}
                  defaultValue={"I'm changeable but am not under React's control."}
                  type={"text"}
                />
              </div>
              <div className={"input-group-large"}>
                <input
                  className={"form-control"}
                  readOnly={true}
                  type={"text"}
                  value={"I'm read-only and under React's control."}
                />
              </div>
            </form>
        </div>
      );
    }
});

export default Textfield;
