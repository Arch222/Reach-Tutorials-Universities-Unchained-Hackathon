import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class ListItem extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <button>
          <Link to={`${match.path}/new`}>New Item</Link>
        </button>
        <h3>List Item</h3>
      </Fragment>
    );
  }
}

export default ListItem;
