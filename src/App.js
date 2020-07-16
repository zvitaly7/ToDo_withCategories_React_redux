import React from 'react';
import './App.css';
import Todo from './containers/Todo/Todo'
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import {Redirect} from "react-router";
import NotFound from "./components/NotFound/NotFound";
import {ModalContainer} from "./components/ModalContainer/ModalContainer";

function App() {
    return (

        <Router>
            <div className="App">
                <Switch>
               <Route path="/home" component={Todo}/>
               <Redirect to="/home" from="/"/>
               <Route path="*" component={NotFound} />
                </Switch>
                <ModalContainer/>
            </div>
        </Router>

    );
}

export default App;
