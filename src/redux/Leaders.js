// Reducer function for leaders part of state
import {LEADERS} from '../shared/Leaders';

export const Leaders = (state=LEADERS,action)=>{
    switch(action.type){
        default:
            return state;
    }
}