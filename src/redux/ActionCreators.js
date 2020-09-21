import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/URLs';

export const addComment =(dishId,rating,author,comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
    }
});

//thunk, returning a function
export const fetchDishes = () =>  (dispatch) => {
    dispatch(dishesLoading(true));

    fetch(baseUrl + 'dishes')
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

//returning an actionObject from actionCreator
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) =>({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
});

export const addDishes = (dishes) =>({
    type: ActionTypes.ADD_DISHES,
    payload : dishes
});