import React from 'react';
import { Layout } from 'antd';
import Head from '../../components/header';
import PageMenu from '../../components/menu.js';
import './index.css';
import {renderRoutes} from 'react-router-config';

const { Content } = Layout;



export default class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Layout className='home'>
        <Head />
        <Layout>
          <PageMenu />
          <Content>
            {/* {this.props.children} */}
            {renderRoutes(this.props.route.routes)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
