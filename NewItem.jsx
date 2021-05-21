import React, { Component } from "react";
import { withRouter } from "react-router";

class NewItem extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back
        </button>
        <h3>New Item Form</h3>
      </div>
    );
  }
}

export default withRouter(NewItem);
