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

 
const feedbackReducer = (
    state = {
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    },
        action) => {
    switch (action.type) {
        case "ADD_FEELINGS":
            
            return {...state, feeling: (state.feeling= action.payload)}
        case "EMPTY":
           return feedbackReducer
            
        case "ADD_UNDERSTANDING":
            return {...state, understanding:(state.understanding= action.payload)}  

         case "ADD_SUPPORTED":
                return {...state, support:(state.support= action.payload)}  

        case "ADD_COMMENTS":
            return {...state, comments:(state.comments= action.payload)}    


    }
    return state;
    
}


const store = createStore(
    combineReducers({
        feedbackReducer: feedbackReducer,
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


