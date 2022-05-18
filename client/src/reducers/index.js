import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { addStaff } from "./staffReducer";
import { addNotice } from "./noticeReducer";
import { addMessage } from "./messageReducer";
import { addEvent } from "./eventReducer";
import { addPhoto } from "./galleryReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  staffs: addStaff,
  notices: addNotice,
  messages: addMessage,
  events: addEvent,
  galleries: addPhoto,
});

const persistConfig = {
  key: "rootv2WriddNuwakot",
  storage,
  stateReconciler: hardSet,
  whitelist: ["notices", "messages", "events", "galleries"],
  transforms: [
    encryptTransform({
      secretKey: "someSuperSecretForWriddNuwakot",
      onError: function (error) {
        // console.log(error);
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);

// export default reducers;
export default persistedReducer;
