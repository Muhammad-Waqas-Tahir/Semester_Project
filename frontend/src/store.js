import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productlistReducer,productDetailsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productlistReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;