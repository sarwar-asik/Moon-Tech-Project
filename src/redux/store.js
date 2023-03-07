import { createStore } from "redux";
import productReducer from "./reducer/productsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(productReducer,composeWithDevTools())

 ////       using redux dev tools/////

export default store;
