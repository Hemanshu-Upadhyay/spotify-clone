import { createStore, applyMiddleware, compose } from 'redux'
import SongReducer from './Reducers/SongReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(SongReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
