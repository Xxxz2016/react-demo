import React, {Component} from 'react';

import {Route, Link, withRouter} from "react-router-dom";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
    Content, Footer, Sider,
} = Layout;


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个Nav组件',
            collapsed: false
        };
    }

    componentWillMount() {
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };


    render() {
        if (this.props.routes != null) {
            return (
                <Layout>
                    <Sider width={160}
                           style={{background: '#fff', minHeight: '85vh'}}
                           collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}>
                        <Menu mode="inline"
                              selectedKeys={[this.props.history.location.pathname]}>
                            {
                                this.props.routes.map((v) => {
                                    return <Menu.Item key={v.path}>
                                        <Link to={v.path}>
                                            <Icon type={v.icon}/>
                                            <span>{v.name}</span>
                                        </Link>
                                    </Menu.Item>
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>{this.props.history.location.pathname}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: "68vh",
                        }}>
                            {
                                this.props.routes.map((route, key) => {
                                    return <Route key={key} exact path={route.path} component={route.component}/>
                                })
                            }
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2018 Created by HuiHui
                        </Footer>
                    </Layout>
                </Layout>
            );
        } else {
            return <Layout style={{padding: '0 24px 24px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>{this.props.history.location.pathname}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: "68vh",
                }}>
                    Content
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by HuiHui
                </Footer>
            </Layout>
        }
    }
}

export default withRouter(Nav);
