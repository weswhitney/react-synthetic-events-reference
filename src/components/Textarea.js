import React, { Component } from 'react';

const Textarea = React.createClass({
      getInitialState: function () {
          return {value: "I'm changeable and under React's control" };
      },

      handleChange: function (e) {
        const nextValue = e.target.value;

        this.setState({value: nextValue});
      },

      render: function () {
        return (
          <div className="panel panel-default">
            <div className="panel panel-body">
              <h1>textarea</h1>
                <form className={"bs-example bs-example-form"}>
                  <div className={"input-group-large"}>
                      <textarea
                      className={"form-control"}
                      onChange={this.handleChange}
                      value={this.state.value}
                    />
                  </div>
                    <div className={"input-group-large"}>
                    <textarea
                      className={"form-control"}
                        value={"I'm read-only, am under React's control, but raise a warning."}
                    />
                  </div>
                  <div className={"input-group-large"}>
                    <textarea
                      className={"form-control"}
                      defaultValue={"I'm changeable but am not under React's control."}
                    />
                  </div>
                  <div className={"input-group-large"}>
                    <textarea
                      className={"form-control"}
                      readOnly={true}
                      value={"I'm read-only and under React's control."}
                    />
                  </div>
                </form>
            </div>
          </div>
        );
      }
  });

export default Textarea;
