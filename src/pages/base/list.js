import React from 'react';
import { PageHeader, Button, List } from 'antd';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      list: []
    }
  }
  addListLength = () => {
    let list = this.state.list;
    for (let i = 0; i < 5; i++) {
      list.push('item');
    }
    this.setState({
      list:list
    })
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
          title='列表循环'
        />
        <div className="pad">
          点击下面按钮，增加列表长度
        </div>
        <div className="pad">
          <Button type='primary' onClick={this.addListLength}>点击我，增加长度哦~~</Button>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item>
              {item} --- {index}
            </List.Item>
          )}
        />
      </div>
    );
  }
}