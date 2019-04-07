import React, { Component } from "react";

class RevFormItem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
          }
    }
    render(){
        return(
            <div style={this.getStyle()}> 
            {this.props.revform}
            </div>
        )
    }
}
export default RevFormItem;