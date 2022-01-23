import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// feedback reducer
// const feedbackReducer = (state = [], action) => {
//     switch (action.type) {
//         case "SET_FEEDBACK":
//             return action.payload;
//     }
//     return state;
// }

 
let feedback = {
    feeling: "",
    understanding: "",
    supported: "",
    comments: "",
}

const feedbackReducer = (state = [feedback], action) => {
    switch (action.type) {
        case "ADD_FEELINGS"   :
            return state = {...state, feeling: action.payload}
            
        case "ADD_UNDERSTANDING"  :
            return state = {...state, understanding: action.payload}  

         case "ADD_SUPPORTED" :
                return state = {...state, supported: action.payload}  

        case "ADD_COMMENTS"  :
            return state = {...state, comments: action.payload}    


    }
    return state;
}


const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(
   
    <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();


