import React, { Component } from 'react'
import { Form, Input, Icon } from 'antd'

class CommonForm extends Component {
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            this.props.onSubmit(err, values);
        });
    };

    componentDidMount(){
    }

    render() {
        const children = this.props.children || [];
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                {children.map((item, key) =>
                    item.props.title ?
                        (<Form.Item key={key}
                                   label={item.props.title}
                                   {...formItemLayout }>
                            {getFieldDecorator(item.props.name, item.props.options)(
                                    <span>{item}</span>
                                )}
                        </Form.Item>)
                        :
                        <Form.Item key={key}
                                {...tailFormItemLayout}>
                                {item.props.name ?
                                    getFieldDecorator(item.props.name, item.props.options)(
                                        <span>{item}</span>
                                    )
                                    :
                                    <span>{item}</span>}
                        </Form.Item>
                )}

            </Form>
        )
    }
}

export default Form.create()(CommonForm);