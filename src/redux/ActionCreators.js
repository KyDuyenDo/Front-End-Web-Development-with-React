import { type } from '@testing-library/user-event/dist/type';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
// const fetchDisheS(){
//     return function fetchDishesThunk(dispatch){
//     }
// }
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    fetch(baseUrl + 'dishes')
         .then((response)=> response.json())
         .then(dishes => dispatch(addDishes(dishes)));
}// day la thunk action creators
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
// fetch comment
export const fetchComments = () => (dispatch) => {
    fetch(baseUrl + 'comments')
         .then((response)=> response.json())
         .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
// fetch promos
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    fetch(baseUrl + 'promotions')
         .then((response)=> response.json())
         .then(promotions => dispatch(addPromos(promotions)));
}
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});
// fetch leaders

export const fetchLeaders = () => (dispatch) => {
    dispatch(LeadersLoading(true));
    fetch(baseUrl + 'leaders')
         .then((response)=> response.json())
         .then(leaders => dispatch(addLeaders(leaders)));
}
export const LeadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const LeadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});