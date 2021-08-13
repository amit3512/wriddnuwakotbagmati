import {addStaff} from "./staffReducer";
import {addNotice} from "./noticeReducer";
import { addMessage } from "./messageReducer";
import { addEvent } from "./eventReducer";
import { addPhoto } from "./galleryReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    staffs : addStaff,
    notices : addNotice,
    messages : addMessage,
    events : addEvent,
    galleries : addPhoto,
})

export default reducers;