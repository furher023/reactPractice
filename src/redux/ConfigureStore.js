import {createStore,combineReducers,applyMiddleware} from 'redux';
//import {Reducer,initialState} from './Reducer';
import {createForms} from 'react-redux-form';
import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { Leaders } from './Leaders';
import  thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from './Forms'


/* Configuring the Redux Store*/
export const ConfigureStore = ()=>{
    const store= createStore(
       // Reducer, //Reducer function
        //initialState //initialstate
        combineReducers({ //Mapping the states returned by reducers to the current state, combining the reducers
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            }), // Configuring store to be able to store form data
        }),
        applyMiddleware(thunk, logger) // Enhancers for stores
    );
    return store;
};