import { actionTypes } from 'react-redux-form';
// Reducer function for promotions part of state
//import {PROMOTIONS} from '../shared/Promotions';
import * as ActionType from'./ActionTypes';

export const Promotions = (state={
    isLoading:true,
    promotions:[],
    errmess:null
},action)=>{
    switch(action.type){
        case ActionType.PROMOS_LOADING:
            return{...state,promotions:[],errmess: null,isLoading: true}
        case ActionType.ADD_PROMOTIONS:
            return {...state,promotions: action.payload,errmess: null,isLoading: false};
        case ActionType.PROMOTIONS_FAILED:
            return{...state,promotions:[],errmess: action.payload,isLoading: false};
        default:
            return state;
    }
}