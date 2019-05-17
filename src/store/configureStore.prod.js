import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const enhancer = applyMiddleware(thunk);

const configureStore = initialState =>
  createStore(rootReducer, initialState, enhancer);

export default configureStore;
