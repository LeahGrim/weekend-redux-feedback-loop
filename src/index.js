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
    supported: "",
    comments: "",
}

const formReducer = (state = formState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return state = {...state, feeling: action.payload}
            
        case 'ADD_UNDERSTANDING'  :
            return state = {...state, understanding: action.payload}  

         case 'ADD_SUPPORTED'  :
                return state = {...state, supported: action.payload}  

        case 'ADD_COMMENTS'  :
            return state = {...state, comments: action.payload}    


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
registerServiceWorker();


