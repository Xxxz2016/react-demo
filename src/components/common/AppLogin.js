import React, {Component} from 'react';
import {Row, Col, Icon, Input, Checkbox,Button } from 'antd';
import CommonForm from "./CommonForm";


class AppLogin extends Component {
    render() {
        return (
            <Row type="flex"
                 justify="space-around"
                 align="middle"
                 style={{
                     height: '100%',
                 }}>
                <Col xs={0} sm={0} md={2} lg={4} xl={4}/>
                <Col xs={12} sm={12} md={10} lg={8} xl={8}>
                    <CommonForm>
                        <Input title='username'
                               name='username'
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Username"
                               options={{
                                   rules: [{required: true, message: 'Please input your Password!'}],
                               }}/>
                        <Input title='password'
                               name='password'
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password"
                               placeholder="Password"
                               />
                        <Checkbox name='remember'
                                  options={{
                                      valuePropName: 'checked',
                                      initialValue: true,
                                  }}>remember me</Checkbox>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </CommonForm>
                </Col>
            </Row>
        );
    }
}

export default AppLogin;
