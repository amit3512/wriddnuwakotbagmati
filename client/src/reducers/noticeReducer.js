import {ADD_NOTICE,GET_NOTICE,UPDATE_NOTICE} from '../types';

export const addNotice =(state = {}, action) =>{
    switch(action.type){
        case ADD_NOTICE:
            return {notices:action.payload};
        case GET_NOTICE: 
            return {...state,notices:action.payload};
        case UPDATE_NOTICE: 
            return {...state,notices:action.payload};
        default: return state;
    }
}