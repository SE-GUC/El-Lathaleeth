import React, { Component } from 'react';
import ListItem from './ListItem'
class FormList extends Component {
    render() {
        return this.props.forms.map((form)=>(
            <ListItem key={form._id} form={form}/>
        )) ;
    }
}

export default FormList;
