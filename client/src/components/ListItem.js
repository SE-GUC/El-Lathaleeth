import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class ListItem extends Component {
  render() {
      return (
        <button
          type="button"
              onClick={this.props.reserveForm.bind(this, "5ca8d9c18bc46d2d88c6a9bd",this.props.form._id)}
          class="btn btn-danger"
        >
          {this.props.form._id}
        </button>
      );
  } 
}

export default ListItem;
