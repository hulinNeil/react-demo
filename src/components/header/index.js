import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.css'

class Header extends React.Component {
  logout = () => {
    console.log('退出登录！！！');
    sessionStorage.clear();
    this.props.history.push('/');
  }
  menu() {
    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.kiplepark.com/">
            关于
          </a>
        </Menu.Item>
        <Menu.Item>
          <span onClick={this.logout}>
            退出
          </span>
        </Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <header className='test-header'>
        <div className="logo">
          <span>KiplePark</span>
        </div>
        <div className="profile">
          <Dropdown overlay={this.menu()}>
            <span className="ant-dropdown-link">
              Hover me <Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);