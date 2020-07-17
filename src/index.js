import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store} from "./store/store";
import "reset-css/reset.css"
import 'reset-css'
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";


export const history = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
