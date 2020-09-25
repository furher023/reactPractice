// Reducer function for comment part of state
import * as ActionType from'./ActionTypes'
import {COMMENTS} from '../shared/Comments';

export const Comments = (state={
    comments: [],
    errmess: null
},action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comment :'+ comment)
            return state.comments.concat(comment); //Reutrning new state without modifying, changes will not persist
        case ActionType.ADD_COMMENTS:
            return {...state, isLoading: false, comments: action.payload, errmess: null};
        case ActionType.COMMENTS_FAILED:
            return {...state, isLoading: false, comments:[], errmess: action.payload };
        default:
            return state;
    }
};