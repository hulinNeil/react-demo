import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class PageMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: '基础语法',
        child: [{
          title: '事件绑定', path: '/app/handler'
        }, {
          title: '列表循环', path: '/app/list'
        }, {
          title: '表单获取', path: '/app/from'
        }]
      }, {
        title: '路由管理',
        child: [{
          title: '路由嵌套', path: '/app/route'
        }]
      }, {
        title: '状态管理',
        child: [{
          title: 'props传参', path: '/app/props'
        }, {
          title: '修改redux状态', path: '/app/set-state'
        }, {
          title: '获取redux状态', path: '/app/show-state'
        }]
      }]
    }
  };
  getOpenKeys = () => {
    const pathname = window.location.pathname;
    let index = 0;
    const findPath = this.state.list.some((value, key) => {
      index = key;
      return value.child ? value.child.some(item => ~pathname.indexOf(item.path)) : ~pathname.indexOf(value.path);
    });
    return findPath ? [`sub${index}`] : [];
  }
  getSelectKey = () => {
    const pathname = window.location.pathname.split('/');
    const keys = pathname.length > 3 ? pathname.splice(0, 3) : pathname;
    return [keys.join('/')];
  }
  render() {
    const { list } = this.state;
    return (
      <Sider className='caidan'>
        <Menu
          onClick={this.handleClick}

          defaultOpenKeys={this.getOpenKeys()}
          selectedKeys={this.getSelectKey()}
          mode="inline"
        >
          {list.map((value, index) => value.child ? (
            <SubMenu
              key={'sub' + index}
              title={
                <span>
                  <Icon type="mail" />
                  <span>{value.title}</span>
                </span>
              }
            >
              {value.child ? value.child.map((item, key) => (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>
                    <Icon type="mail" />{item.title}
                  </Link>
                </Menu.Item>
              )) : ''}
            </SubMenu>
          ) : (
              <Menu.Item key={value.path}>
                <Link to={value.path}>
                  <Icon type="mail" />{value.title}
                </Link>
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
    );
  }
}