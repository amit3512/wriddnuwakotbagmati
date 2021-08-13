import { ADD_STAFF, GET_STAFF, UPDATE_STAFF } from "../types";

export const addStaff =(state = {}, action) =>{
    switch(action.type){
        case ADD_STAFF:
            return {staffs:action.payload};
        case GET_STAFF: 
            return {...state,staffs:action.payload};
        case UPDATE_STAFF: 
            return {...state,staffs:action.payload};
        default: return state;
    }
}