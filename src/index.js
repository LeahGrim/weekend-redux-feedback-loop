import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


let formState = {
    feeling: ''
}

const formReducer = (state = formState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return state = {...state, feeling: action.payload}
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
    <React.StrictMode>
    <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
    registerServiceWorker();


