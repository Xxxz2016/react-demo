import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Layout} from 'antd';

import routes from '../../routers/router.js';
import ContentPage from "./ContentPage";
import Page404 from "./Page404";
import AuthRoute from "./AuthRoute";

class AppContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                {routes.map((route, key) => {
                        return <Route key={key}
                                      path={route.path}
                                      render={props => (
                                          <ContentPage {...props}
                                                       path={route.path}
                                                       component={route.component}
                                                       routes={route.routes}/>
                                      )} />
                    })}
                <AuthRoute component={Page404}/>
            </Layout>
        );
    }
}

export default AppContent;
