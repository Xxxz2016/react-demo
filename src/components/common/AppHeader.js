import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {
    Layout, Menu, Dropdown, Icon
} from 'antd';

import routes from '../../routers/router.js';

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
                            )}
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
            <Header className="app-header">
                <div className="logo"/>
                <Dropdown overlay={this.state.dropMenu}
                          trigger={['click']}
                          className='header-item'>
                    <a> 控制台 <Icon type="down"/></a>
                </Dropdown>

                <Menu className="menu"
                      theme="dark"
                      mode="horizontal"
                      selectedKeys={[this.getParentPath(this.props.history.location.pathname)]}>
                    {routes.map((v) => {
                            return <Menu.Item className="header-item" key={v.path}><Link to={v.path}>{v.name}</Link></Menu.Item>
                        })}
                </Menu>

            </Header>

        );
    }
}

export default withRouter(AppHeader);
