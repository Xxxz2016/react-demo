import React, {Component} from 'react';
import {Layout} from "antd";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

class AppMain extends Component {
    render() {
        return (
            <Layout className="app">
                <AppHeader/>
                <AppContent/>
            </Layout>
        );
    }
}

export default AppMain;