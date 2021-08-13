import {ADD_MESSAGE,GET_MESSAGE,UPDATE_MESSAGE} from '../types';

export const addMessage =(state = {}, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            return {messages:action.payload};
        case GET_MESSAGE: 
            return {...state,messages:action.payload};
        case UPDATE_MESSAGE: 
            return {...state,messages:action.payload};
        default: return state;
    }
}