import {createStore} from 'redux';
import {Reducer,initialState} from './Reducer';

/* Configuring the Redux Store*/
export const ConfigureStore = ()=>{
    const store= createStore(
        Reducer, //Reducer function
        initialState //initialstate
    );
    return store;
};