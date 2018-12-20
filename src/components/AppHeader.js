import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import {
    Layout, Menu, Dropdown, Icon, Button
} from 'antd';

import routes from '../routers/router.js';

const {Header} = Layout;

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropMenu: (<Menu/>)
        };
    }

    componentDidMount() {
        this.setState({
            dropMenu: (<Menu>
                {routes.map((v) => {
                        if (v.hasOwnProperty("routes")) {
                            return (
                                <Menu.SubMenu title={v.name} key={v.path}>
                                    {v.routes.map((v) => {
                                            return <Menu.Item key={v.path}><Link to={v.path}>{v.name}</Link></Menu.Item>
                                        })}
                                </Menu.SubMenu>
                            )
                        }
                        return <Menu.Item key={v.path}><Link to={v.path}>{v.name}</Link></Menu.Item>
                    })}
            </Menu>)
        })
    }


    getParentPath = (pathname) => {
        let n = pathname.lastIndexOf('/');
        return pathname.substring(0, n + 1);
    };

    render() {
        return (
            <Header className="header" style={{height: "8vh"}} >
                <div className="logo"/>
                <Dropdown overlay={this.state.dropMenu}
                          trigger={['click']}>
                    <a className="header-item" href="#">
                        控制台 <Icon type="down"/>
                    </a>
                </Dropdown>

                <Menu theme="dark"
                      mode="horizontal"
                      className="header-item"
                      selectedKeys={[this.getParentPath(this.props.history.location.pathname)]}
                      style={{lineHeight: '64px'}}>
                    {
                        routes.map((v) => {
                            return <Menu.Item key={v.path}><Link to={v.path}>{v.name}</Link></Menu.Item>
                        })
                    }
                </Menu>

            </Header>

        );
    }
}

export default withRouter(AppHeader);
