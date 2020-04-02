import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// importing the index.js from ./Reducers which acts as our root reducer
import rootReducer from './Reducers/RootReducer';



const Store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));

export default Store;