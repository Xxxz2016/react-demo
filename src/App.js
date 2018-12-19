import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Layout, Menu, Dropdown, Icon, Button
} from 'antd';

import './assets/css/app.css';
import routes from './routers/router.js';

const { Header } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userNavList: [0],
            dropMenu: (<Menu/>)
        };
    }

    componentDidMount(){
        this.setState({
            dropMenu:(<Menu>
                    {
                        routes.map((v, k) => {
                            if(v.hasOwnProperty("routes")){
                                return (
                                    <Menu.SubMenu title={v.name}>
                                        {
                                            v.routes.map((v,k) =>{
                                                return <Menu.Item key={k}><Link to={v.path}>{v.name}</Link></Menu.Item>

                                            })
                                        }
                                    </Menu.SubMenu>
                                )
                            }
                            return <Menu.Item key={k}><Link to={v.path}>{v.name}</Link></Menu.Item>
                        })
                    }
                </Menu>)
        })
    }

    add = () =>{
        console.log("add");
        this.setState({
            userNavList:[0,1]
        })
    }

    render() {
        return (
            <Router>
                <Layout className="app">
                    <Header className="header">
                        <div className="logo"/>
                        <Dropdown overlay={this.state.dropMenu}
                                  trigger={['click']}>
                            <a className="header-item" href="#">
                                控制台 <Icon type="down" />
                            </a>
                        </Dropdown>

                        <Menu theme="dark"
                              mode="horizontal"
                              className="header-item"
                              defaultSelectedKeys={['0']}
                              style={{ lineHeight: '64px' }}>
                            {
                                routes.map((v, k) => {
                                    if (this.state.userNavList.includes(k)) {
                                        return <Menu.Item key={k}><Link to={v.path}>{v.name}</Link></Menu.Item>
                                    }
                                })
                            }
                        </Menu>

                        <Button className="header-item" type="primary" onClick={this.add}> + </Button>

                    </Header>
                    <Layout>
                        {
                            routes.map((route, key) => {
                                return <Route key={key}
                                              exact={route.exact}
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
