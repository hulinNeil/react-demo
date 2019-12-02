import React from 'react';
import { PageHeader, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { cut, add, login, logout } from '../../store/actions';

class App extends React.Component {
  back() {
    window.history.back();
  }
  add = value => {
    this.props.dispatch(add(this.props.value));
  }
  onChange = e => {
    const checked = e.target.checked;
    if (checked) {
      this.props.dispatch(login({}));
    } else {
      this.props.dispatch(logout());
    }
  }
  render() {
    return (
      <div className="App">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='设置全局 state'
        />
        <h1>修改 value：</h1>
        <Button onClick={this.add}>+</Button>  {this.props.value}  <Button onClick={value => this.props.dispatch(cut(this.props.value))}>-</Button>
        <h1>修改会保存再本地的 value：</h1>
        <Checkbox checked={this.props.isLogin} onChange={this.onChange}>Remember me</Checkbox>
      </div >
    );
  }
}

const select = (store) => {
  return {
    value: store.numStore.value,
    isLogin: store.userStore.isLogin
  }
}

export default connect(select)(App);