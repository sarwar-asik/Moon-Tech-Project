import { createStore } from "redux";
import productReducer from "./reducer/productsReducer";
const store = createStore(productReducer);

export default store;
