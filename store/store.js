import { createStore } from "redux";
import categoryReducer from "./reducers/category";

const store =createStore(categoryReducer);
export default store;