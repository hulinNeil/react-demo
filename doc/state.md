### 状态管理

#### 组件内状态（state、props）

1. state：react 组件在实例化时，通过在 this 上挂在 state 对象进行状态管理，要修改时，需要使用 this.setState({}) 进行改变，如果直接使用 `this.state.xxx = xx` 这种形式进行改变，虽然也能改变其值，但是不能反馈到 dom 上，就像 vue 中只有 data 对象里面的数据修改时才能反馈到 dom 上。

2. props：组件向外暴露的属性，外部通过改变传入参数从而操作组件，和 vue 一样这也是一个单向的属性，在组件内部不能修改。


3. 自定义事件

组件里面需要使用PropTypes进行类型检查，类似于vue的组件里面声明pros时进行的默认值+type的声明。

#### 全局状态（redux）

redux 是 react 常用的状态管理库，和 vuex 相同，用法有一定的不用，vuex 是通过挂在状态到this对象上，redux 是通过使用 props 传参的方式改变组件状态，将组件包裹在一个 connect 的容器里，connect 就会向组件里面注入想要的全局状态。

1. 安装
  ```
  yarn add redux react-redux
  ```

2. 创建store、actions、reducers等文件夹，并编写对应文件。
  - action：用来描述要 store 的动作并传值，里面是一些列的函数（动作）
  - reducer：具体修改 store 的地方，在这里可以看到，自己设置的 store 有哪些 key
  - store：将 reducers 创建的 state 保存到应用的 store。

3. 入口页面，使用 `<Provider />` 包裹 `<App />` ，并在 `<Provider />` 上添加 store。
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import store from './store/store';
  import App from './pages/App';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  ```

4. 使用页面，使用 connect 包裹页面，并声明想要使用的全局 state，示例参考demo。

5. 修改全局 state，引入 action 里面的函数，使用 `this.props.dispatch(login(data))` 这样的方式进行修改，示例参考demo。

6. 持久化缓存：有些数据如个人信息，可能需要缓存再本地，下次使用时，应用直接进入登陆状态，可以考虑在 reducers 创建 元数据的地方进行 get/set 操作，也可以使用一些三方库（如：redux-persist），在 store.js 里面说明需要缓存的数据。
