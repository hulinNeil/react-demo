import React from 'react';
import { PageHeader } from 'antd';
import { connect } from 'react-redux';


class App extends React.Component {
  back() {
    window.history.back();
  }
  render() {
    return (
      <div className="App">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='展示全局 state'
        />
        <h1 style={{ fontSize: 20 }}>Hello React!</h1>
        <div>
          全局状态的 Value 值：{this.props.value}
        </div>
        <div>
          保存再本地的全局状态的 Value 值：{String(this.props.isLogin)}
        </div>
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