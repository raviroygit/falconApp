import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../redux/reducer/index";

const initialState = {}

const middleware = [thunk];

 const store= createStore(
    reducers,
    initialState,
    compose(
        composeWithDevTools(
            applyMiddleware(...middleware)
        ))
);

export default store;