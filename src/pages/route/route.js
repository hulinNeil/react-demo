import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { PageHeader, Menu, Icon } from 'antd';

class Child1 extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div>
        我是子页面---vue
        <p>我获得的参数是 {JSON.stringify(params)}</p>
      </div>
    )
  }
}

class Child2 extends React.Component {
  render() {
    const query = this.props.location.query;
    return (
      <div>
        我是子页面---react
        <p>我获得的参数是 {JSON.stringify(query)}</p>
      </div>
    )
  }
}

class Child3 extends React.Component {
  render() {
    const query = this.props.location.querys;
    return (
      <div>
        我是子页面---angular
        <p>我获得的参数是 {JSON.stringify(query)}</p>
      </div>
    )
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['vue', 'react', 'angular']
    }
  }
  back() {
    window.history.back();
  }
  gotoReact = () => {
    const { path } = this.props.match;
    this.props.history.push({
      pathname: `${path}/react`,
      query: { id: 1234, from: path }
    })
  }
  getSelectKey = () => {
    const { pathname } = this.props.location;
    return ~pathname.indexOf('vue') ? pathname.split('vue')[0] + 'vue' : pathname;
  }
  render() {
    const { path } = this.props.match;
    return (
      <div className="App">
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={this.back}
          title='路由嵌套+传参'
        />
        <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.getSelectKey()]}>
          <Menu.Item key={`${path}/vue`}>
            <NavLink to={`${path}/vue/12306`}><Icon type="mail" /> vue</NavLink>
          </Menu.Item>
          <Menu.Item key={`${path}/react`}>
            <div onClick={this.gotoReact}><Icon type="mail" /> react</div>
          </Menu.Item>
          <Menu.Item key={`${path}/angular`}>
            <NavLink to={{
              pathname: `${path}/angular`,
              querys: {
                id: 123,
                from: `${path}`
              }
            }}><Icon type="mail" /> angular</NavLink>
          </Menu.Item>
        </Menu>
        <div>
          这里是路由嵌套页面
        </div>
        <Route path={`${path}/vue/:id`} component={Child1} />
        <Route path={`${path}/react`} component={Child2} />
        <Route path={`${path}/angular`} component={Child3} />
      </div >
    );
  }
}
