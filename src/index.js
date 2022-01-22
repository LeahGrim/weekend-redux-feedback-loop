import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


let formState = {
    feeling: "",
    understanding: "",
    supported: ""
}

const formReducer = (state = formState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            console.log('action.payload in add feeling', action.payload);
            return state = {...state, feeling: action.payload}
        case 'ADD_UNDERSTANDING':
            console.log('in add understanding', action.payload);
            return state = {...state, understanding: action.payload}
        case 'ADD_SUPPORTED':
            console.log('in add supported ', action.payload);
            return state = {...state, understanding: action.payload}  

    }
    return state;
}


const store = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
   
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


