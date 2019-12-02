### 基本语法

#### 一、JSX

JSX 类似于 vue 的 template，主要适用于书写页面元素的，但是它比 vue 更加灵活，在 vue 里面只能使用规定的一些指令，在 JSX 里面可以更加方便的绑定变量，函数。

JSX 主要使用 '{ }' 进行 js 操作，一般情况，里面进行三元运算。

**注意**：一个 '( )' 包裹的 JSX 代码块，只能有一个父元素。

```js
(
  <div>
    <div className={isLogin ? 'login' : 'register'}>...</div>
    <ul>
      {list.map(value => <li> hello </li>)}
    </ul>
    {isLogin ? <span>asd</span> : <span>没有登录</span>}
    <img src="" onClick={this.handler} />
  </div>
)
```

#### 二、事件绑定

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 12
    }
  }
  handler = () => {
    console.log('触发点击事件！');
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" onClick={this.handler} />
      </div>
    );
  }
}
```

**注意**：如果不使用箭头函数，已绑定事件的函数内部是不能访问组件的内部属性的，其 this 为 undefined。

#### 三、条件渲染

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  login() {
    return (
      <div>已经登录成功了！！</div>
    )
  }
  register() {
    return (
      <div>前往登录吧~~</div>
    )
  }
  render() {
    return (
      <div className="App">
        {isLogin ? this.login() : this.register()}
      </div>
    );
  }
}
```

#### 四、列表渲染

列表渲染主要使用 Array 的 map 方法进行循环渲染，类似于 vue 的 v-for.

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5]
    }
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        {list.map((value, index) => <p key={'item' + index}> list-{value} - {index} </p>)}
      </div>
    );
  }
}
```

**注意**：列表渲染的子项需要绑定key属性（唯一值）

#### 五、样式绑定

```css
/* App.css */
.css-name {
  height: 400px;
}
```

1.直接 import css文件（样式作用于全局）：

```js
import './App.css';
...
return (
  <h1 className='css-name'>Hello React!</h1>
);
...
```

2.使用 css module（样式文件仅作用于组件内部，类似于 vue style 上加 scope）：

```js
import styles from './App.css';
...
return (
  <h1 className={styles['css-name']}>Hello React!</h1>
);
...
```



#### 六、生命周期

生命周期图可以参考：[react 生命周期](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/);

|react|vue|说明|
|---|---|---|
|constructor|created|创建组件时触发事件，如果是无状态组件（不初始化state），则不需要使用此方法|
|render|-|当 render 被调用时触发（可以理解为将要挂载到dom时，区别于componentWillMount），每个 class 里面必须要有此方法 |
|componentDidMount|mounted|组件挂载到dom后触发事件，可以操作 dom 了|
|componentDidUpdate|updated|组件更新后触发事件|
|componentWillMount|beforeDestroy/destroyed|组件将要卸载时触发事件|
|getDerivedStateFromProps|watch|props改变时触发事件，return state对象（需要加上 static）|

其他几个函数应该都好理解，和 vue 的用法差不多，getDerivedStateFromProps的用法参考下一节：


#### 七、组件调用

Hello 组件：
```js
export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSync: 10
    }
  }
  static getDerivedStateFromProps(props, state) {
    const { id } = props;
    return id > 5 ? { idSync: id } : null;
  }
  render() {
    const { id } = this.props;
    const { idSync } = this.state;
    return (
      <div>Hello-{id} - {idSync}</div>
    )
  }
}
```
调用 Hello 组件
```js
import React from 'react';
import Hello from './Hello';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }
  hello() {
    this.setState({
      id: ++this.state.id
    })
  }
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <div onClick={this.hello.bind(this)}>改变状态{id}</div>
        <Hello id={id} />
      </div>
    );
  }
}

```

#### 八、其他

1. filters（过滤器），在 vue 里面常用 filters 进行数据转换，在 react 里面是没有这个函数的，react 体现的是 all in js，可以在 JSX 里面直接调用函数进行过滤。


