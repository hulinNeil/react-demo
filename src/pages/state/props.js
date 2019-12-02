import React from 'react';
import { PageHeader, Button, message } from 'antd';
import Hello from '../../components/Hello';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    }
  }
  back() {
    window.history.back();
  }
  add = () => {
    let id = this.state.id;
    this.setState({
      id: ++id
    });
  }
  getEvent = (event) => {
    message.info('接收到组件的自定义事件~~~');
  }
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='Props传参'
        />
        <Button type='danger' onClick={this.add}>点击改变传入组件的 id 值：{id}</Button>
        <Hello id={id} testEvent={this.getEvent} />
      </div >
    );
  }
}
