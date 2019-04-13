import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class Status_Card extends Component {
    state = { clicked: false };
    render() {

        return (
          <div class="card">
            <div class="card-header">
              {this.props.formStatus}
            </div>
        
          </div>
        );
    }
}

export default Status_Card;
