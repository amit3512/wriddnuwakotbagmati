// import reducers from "./reducers";
import persistedReducer from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  // reducers,
  persistedReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

// export default store;
export default store;
export const persistor = persistStore(store);
