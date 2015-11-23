/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const EDITING_TODO = 'EDITING_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function editingTodo(index, editing) {
  return { type: EDITING_TODO, index, editing }
}

export function editTodo(index, text) {
  return { type: EDIT_TODO, index, text }
}

export function completeTodo(index, completed) {
  return { type: COMPLETE_TODO, index, completed }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
