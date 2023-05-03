import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";

const rootElement = combineReducers({
  authReducer,
  productReducer,
});

export const store = legacy_createStore(rootElement, applyMiddleware(thunk));