import { createStore } from 'redux'
import postReducer from './reducers/postReducer'

export const store = createStore(postReducer)
