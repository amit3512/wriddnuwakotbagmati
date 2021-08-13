import {ADD_EVENT,GET_EVENT,UPDATE_EVENT} from '../types';
export const addEvent =(state = {}, action) =>{
    switch(action.type){
        case ADD_EVENT:
            return {events:action.payload};
        case GET_EVENT: 
            return {...state,events:action.payload};
        case UPDATE_EVENT: 
            return {...state,events:action.payload};
        default: return state;
    }
}