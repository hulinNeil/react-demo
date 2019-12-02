import React from 'react';
import { PageHeader, Button } from 'antd';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 12
    }
  }
  handler = () => {
    console.log('触发点击事件！');
    let id = this.state.id;
    this.setState({
      id: ++id
    })
  }
  handler2() {
    console.log('出发点击事件！！');
    console.log('看看this：', this);
  }
  back() {
    window.history.back();
  }
  render() {
    return (
      <div>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='事件绑定'
        />
        <div className="pad">
          点击下面按钮，出发事件,id:{this.state.id}
        </div>
        <div className="pad">
          <Button type='primary' onClick={this.handler}>一定记得使用箭头函数 =></Button>
        </div>
        <div className="pad">
          <Button type='primary' onClick={this.handler2}>不是使用箭头函数,看看控制台显示 this 什么</Button>
        </div>
      </div>
    );
  }
}