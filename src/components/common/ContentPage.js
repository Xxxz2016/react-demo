import React, {Component} from 'react';

import {Switch, Link, withRouter} from "react-router-dom";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import AuthRoute from "./AuthRoute";
import Page404 from "./Page404";

const {
    Content, Footer, Sider,
} = Layout;


class ContentPage extends Component {
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
        return (
            <Layout>
                {this.props.routes != null ?
                    <Sider width={140}
                           collapsedWidth={60}
                           style={{background: '#fff', minHeight: '85vh'}}
                           collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}>
                        <Menu mode="inline"
                              style={{
                                  width:'100%',
                              }}
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
                    :null
                }
                <Layout style={{padding: '0 40px 0 40px'}}>
                    <Breadcrumb style={{margin: '12px'}}>
                        <Breadcrumb.Item>{this.props.history.location.pathname}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: "520px",
                    }}>
                        <Switch>
                        {this.props.routes != null ?
                            this.props.routes.map((route, key) => {
                                return <AuthRoute key={key} exact path={route.path} component={route.component}/>
                            })
                            : <AuthRoute exact path={this.props.path} component={this.props.component}/>
                        }
                        <AuthRoute component={Page404}/>
                        </Switch>
                    </Content>
                    <Footer style={{
                                textAlign: 'center'}}>
                        Ant Design ©2018 Created by HuiHui
                    </Footer>
                </Layout>
            </Layout>
        );
    }

}

export default withRouter(ContentPage);
