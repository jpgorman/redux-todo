import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onEdit={(text) => this.props.onTodoEdit(index, text)}
                onEditing={(editing) => this.props.onTodoEditing(index, editing)}
                onCompleted={(completed) => this.props.onTodoClick(index, completed)} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
