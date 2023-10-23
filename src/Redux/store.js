import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import emailReducer from "./EmailReducer";


const store = createStore(emailReducer, applyMiddleware(thunk));

export default store;
