// Reducer function for comment part of state
import * as ActionType from'./ActionTypes'
import {COMMENTS} from '../shared/Comments';

export const Comments = (state=COMMENTS,action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comment :'+ comment)
            return state.concat(comment); //Reutrning new state without modifying, changes will not persist
        default:
            return state;
    }
};