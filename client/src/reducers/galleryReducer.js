import {ADD_PHOTO,GET_PHOTO} from '../types';

export const addPhoto =(state = {}, action) =>{
    switch(action.type){
        case ADD_PHOTO:
            return {galleries:action.payload};
        case GET_PHOTO: 
            return {...state,galleries:action.payload};
        default: return state;
    }
}