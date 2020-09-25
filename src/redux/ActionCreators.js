import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/URLs';

//thunk, returning a function
export const fetchDishes = () =>  (dispatch) => {
    dispatch(dishesLoading(true));

    fetch(baseUrl + 'dishes')
    .then(response => response.json())
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

export const addComment =(dishId,rating,author,comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
    }
});

export const addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsLoading = ()=>({
    type: ActionTypes.COMMENTS_LOADING
});

export const fetchComments = ()=>(dispatch)=>{
    fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload : errmess
});

export const fetchPromotions = () => (dispatch)=>{
    dispatch(promosLoading());
    
    fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)));
}

export const promosLoading = ()=>({
    type:ActionTypes.PROMOS_LOADING
});

export const addPromotions = (promotions) =>({
    type:ActionTypes.ADD_PROMOTIONS,
    payload:promotions
});

export const promotionsFailed = (errmess) =>({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errmess
});