import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// importing the index.js from ./Reducers which acts as our root reducer
import rootReducer from './Reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
