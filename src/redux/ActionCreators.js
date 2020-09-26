import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/URLs';

//thunk, returning a function
export const fetchDishes = () =>  (dispatch) => {
    dispatch(dishesLoading());

    fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{// In case server responds with an error
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => { //In case server not reached by fetch
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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

//Posting new comment to the server
export const postComment =(dishId,rating,author,comment)=>(dispatch)=>{
    const newComment = {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
    }

    newComment.date = new Date().toISOString();

    fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            "Content-Type": "application/json"
        },
        credentials: 'same-origin' //Read more on this
    })
    .then(response => {
        if(response.ok){
            // Server responds with the information that was added to it
            return response.json();
        }
        else{// In case server responds with an error
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => { //In case server not reached by fetch
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(comment => dispatch(addComment(comment)))
    .catch(error => {
        console.log(error.message);
        alert('Comment could not be posted, '+ error.message);
    })
};

export const addComment = (comment) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
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
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{// In case server responds with an error
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => { //In case server not reached by fetch
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload : errmess
});

export const fetchPromotions = () => (dispatch)=>{
    dispatch(promosLoading());

    fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{// In case server responds with an error
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => { //In case server not reached by fetch
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error=> dispatch(promotionsFailed(error.message)));
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