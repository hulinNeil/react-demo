### 概述

#### 核心：一切皆组件。

react 里面所有的页面元素都是通过继承 Component 创建的，在组件内部，通过 render 函数返回一段 JSX 代码，react 会将 JSX 解析成 **虚拟 dom**，然后页面有需求时，就是解析虚拟dom，将在页面上渲染成真实 dom。

```js
import React, { Component } from 'react';
class HelloMessage extends Component {
  render() {
    return (
      <div>
        Hello React
      </div>
    );
  }
}
```

#### 快速上手

1.安装 yarn/create-react-app:  [yarn](https://yarnpkg.com/zh-Hans/)（react 官方推荐的包管理工具，项目中使用 npm 如果出了问题，换成 yarn 或许就好了~~）、create-react-app（react 脚手架）

```bash 
# yarn global add create-react-app
npm install -g create-react-app
```

2.创建应用
```bash 
create-react-app first-react
```
3.运行
```bash
yarn start
```
