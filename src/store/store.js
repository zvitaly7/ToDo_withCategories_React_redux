import { createStore , compose, applyMiddleware, combineReducers} from "redux";
import React from "react";
import thunk from 'redux-thunk';
import categories from "./reducers/categories"
import {tasks} from "./reducers/tasks";

const reducers = combineReducers({categories, tasks});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


