import React from 'react';
import { Form, Icon, Input, Button, Checkbox, PageHeader } from 'antd';


class HorizontalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ''
    }
  }
  back() {
    window.history.back();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          form: JSON.stringify(values)
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='表单获取'
        />
        <p>一般原生的 from 表单通过 onChange 事件进行监听 value 改变，不会和 vue 一样，框架帮着处理一次。</p>
        <p>如果是三方库里面的表单，直接使用其暴露的自定义事件即可。</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('user')(
              <Input
                prefix={<Icon type="user" />}
                autoComplete='off'
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('password')(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
          </Button>
          </Form.Item>
        </Form>
        <div>
          结果：  {this.state.form}
        </div>
      </div>
    );
  }
}

export default Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);
