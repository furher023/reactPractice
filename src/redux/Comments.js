// Reducer function for comment part of state
import * as ActionType from'./ActionTypes'
//import {COMMENTS} from '../shared/Comments';

export const Comments = (state={
    comments: [],
    errmess: null
},action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            return state.comments.concat(action.payload); //Reutrning new state without modifying, changes will not persist
        case ActionType.ADD_COMMENTS:
            return {...state, comments: action.payload, errmess: null};
        case ActionType.COMMENTS_FAILED:
            return {...state, comments:[], errmess: action.payload };
        default:
            return state;
    }
};