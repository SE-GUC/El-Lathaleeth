import React, { Component } from "react";
import RevFormItem from '.RevFormItem/';
 
class RevForms extends Component{
    render(){
        return this.props.revForms.map((revform) =>(
            <RevFormItem revform = {revform} />
        ));
    }
}
export default RevForms;