import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Layout, Menu, Dropdown, Icon, Button
} from 'antd';

import './assets/css/app.css';
import routes from './routers/router.js';
import AppHeader from "./components/AppHeader";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout className="app">
                    <AppHeader/>
                    <Layout>
                        {
                            routes.map((route, key) => {
                                return <Route key={key}
                                              exact={route.exact}
                                              path={route.path}
                                              render={props => (
                                                  <route.component {...props} routes={route.routes}/>
                                              )}
                                />
                            })
                        }
                    </Layout>
                </Layout>

            </Router>
        );
    }
}

export default App;
