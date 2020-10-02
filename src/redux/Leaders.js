// Reducer function for leaders part of state
//import {LEADERS} from '../shared/Leaders';
import * as ActionTypes from './ActionTypes'

export const Leaders = (state={
    isLoading : false,
    leaders : [],
    errMess : null
},action)=>{
    switch(action.type){
        case ActionTypes.LOADING_LEADERS:
            return {...state, isLoading: true, leaders: [], errMess: null}
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, leaders: action.payload , errMess: null}
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, leaders: [], errMess: action.payload }
        default:
            return state;
    }
}