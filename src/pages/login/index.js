import React from 'react';
import { Button } from 'antd';

export default class Login extends React.Component {
  login = () => {
    window.sessionStorage.setItem('isLogin', true);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className='App'>
        <h1>点击下面按钮登录！</h1>
        <Button onClick={this.login}>点我~点我~</Button>
      </div>
    );
  }
}
