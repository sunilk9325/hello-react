import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import Counter from './Counter';
// import Persons from './Persons';


import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
// import reducer from './store/PersonReducer';
import counterReducer from './store/CounterReducer';
import resultReducer from './store/ResultReducer';
import logger from './Middleware/Logger';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><Persons /></Provider>, document.getElementById('root'));


// import App from './App';
// import Auth from './Auth';
// import Form from './Form';
// import FormUncontrolled from './FormUncontrolled';

// import Main from './calculator/Main';
// import './calculator/style/main.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App action="Display">Student Details here</App>, document.getElementById('root'));
// ReactDOM.render(<Main />, document.getElementById('root'));
// ReactDOM.render(<FormUncontrolled />, document.getElementById('root'));
// ReactDOM.render(<Auth isLoggedIn={false} name={"dflt"}/>, document.getElementById('root'));

