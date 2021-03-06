import { createStore, combineReducers } from 'redux'
import initialState from './initialState.json'
import components from './componentsReducer'
import selection from './selectionReducer'

const reducer = combineReducers({
  components,
  selection,
})

export default () => createStore(reducer, initialState)
