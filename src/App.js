import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import './assets/css/app.css';
import AppMain from "./components/common/AppMain";
import AppLogin from "./components/common/AppLogin";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' component={AppLogin}/>
                    <Route component={AppMain}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
