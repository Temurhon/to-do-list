import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            testDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"/> {''}
                    {this.props.todo.title}</p>
            </div>
        )
    }
}


Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}



export default Todoitem
