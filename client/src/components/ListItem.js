import React, { Component } from 'react'

export class ListItem extends Component {
  render() {
    return (
      <div>
      {this.props.form._id}
      </div>
    )
  }
}

export default ListItem

