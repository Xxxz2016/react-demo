import React, {Component} from 'react';

import {Route, Link} from "react-router-dom";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
    Content, Footer, Sider,
} = Layout;


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个User组件',
            collapsed: false
        };
    }

    componentWillMount() {

        console.log(this.props.routes);
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }


    render() {
        return (
            <Layout>
                <Sider width={200}
                       style={{background: '#fff'}}
                       collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}>
                    <Menu mode="inline"
                          defaultSelectedKeys={['0']}
                          defaultOpenKeys={['sub1']}
                          style={{height: '100%', borderRight: 0}}>
                        {
                            this.props.routes.map((v, k) => {
                                return <Menu.Item key={k}>
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
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 500,
                    }}>
                        {
                            this.props.routes.map((route, key) => {
                                return <Route key={key} exact path={route.path} component={route.component}/>
                            })
                        }
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default User;
