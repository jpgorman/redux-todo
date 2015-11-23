import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {

  handleClick () {
    const {onCompleted, completed} = this.props
    onCompleted(!completed)
  }

  showEdit () {
    const {onEditing, editing} = this.props
    if(!editing) onEditing(!editing)
  }

  hideEdit () {
    const {onEditing, editing} = this.props
    onEditing(!editing)
  }

  edit () {
    const {onEdit} = this.props
    const node = this.refs.input.value.trim()
    onEdit(node)
  }

  componentDidUpdate(nextProps) {
    const {editing} = this.props
    if (editing) {
      this.refs.input.focus()
    }
  }

  render() {
    const {text, completed, editing} = this.props;
    const nextText = editing ? <input onChange =  {() => this.edit()} onBlur = {() => this.hideEdit()} type='text' value={text} ref='input' /> : text

    return (
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: completed ? 'default' : 'pointer'
        }}>
        <span
          onClick={() => this.showEdit()}>
          {nextText}
        </span>
        <input type = "checkbox"
          onClick={() => this.handleClick()} />
      </li>
    )
  }
}

Todo.propTypes = {
  onEditing: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool,
}
