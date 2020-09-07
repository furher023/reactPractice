import {DISHES} from '../shared/Dishes';
import {COMMENTS} from '../shared/Comments';
import {LEADERS} from '../shared/Leaders';
import {PROMOTIONS} from '../shared/Promotions';

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS
};

/* Pure function which generates new state baseed on the action */
export const Reducer = (state=initialState,action)=>{
    return state;
};