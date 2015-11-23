import { combineReducers } from 'redux'
import { ADD_TODO, EDIT_TODO, EDITING_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions.js'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          editing: false,
        },
      ]
    case EDIT_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text,
        }),
        ...state.slice(action.index + 1),
      ]
    case EDITING_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          editing: action.editing,
        }),
        ...state.slice(action.index + 1),
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: action.completed,
        }),
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp
