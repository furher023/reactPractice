import {createStore,combineReducers} from 'redux';
//import {Reducer,initialState} from './Reducer';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';


/* Configuring the Redux Store*/
export const ConfigureStore = ()=>{
    const store= createStore(
       // Reducer, //Reducer function
        //initialState //initialstate
        combineReducers({ //Mapping the states returned by reducers to the current state, combining the reducers
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
};