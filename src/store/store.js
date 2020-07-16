import { createStore , compose, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import categories from "./reducers/categories"
import {tasks} from "./reducers/tasks";
import {modals} from "./reducers/modal";

const reducers = combineReducers({categories, tasks, modals});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


