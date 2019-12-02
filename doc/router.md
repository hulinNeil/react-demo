### 路由管理（react-router）

### 简介

react 的路由一般是通过 react-router-dom/react-router 进行管理。

```js
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 从 react-router-dom里面引入Router（这里是hash模式，根节点）
// Route（每个页面挂在的地方）
// Switch（匹配中一个后就不往下寻找了）

import App from './pages/App';
import Login from './pages/login';
import Home from './pages/home';

class MRoute extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default MRoute;
```

react 路由 和 vue 路由一样分为 history 模式与 hash 模式。上面的示例是 hash 模式，history 模式的创建方式如下所示，仅仅只是 Router 类型的不同。部署服务器的方式和 vue 一样样的，hash不用特殊照顾，history 需要将网址的路由都指向 index.html 使前端接管路由。

```js
import { BrowserRouter as Router, Route } from 'react-router-dom';
```

#### 路由传参

常用的有两种：

1.在路由上携带参数：

```js
<Route path=' /user/:id '  component={User}></Route>

// 跳转
<Link to='/user/123 '  activeClassName='active'>跳转</Link>      
this.props.history.push('/user/123 ');

// User 页面获取参数：
this.props.match.params
```

2.不在路由上显示：

```js
<Route path=' /user '  component={User}></Route>

// 跳转
<Link to={{ pathname:'/user', querys: { id:12 }}}  activeClassName='active'>跳转</Link>      
this.props.history.push({
  pathname: `/user`,
  querys: { id: 1234, from: 'hello' }
})

// User 页面获取参数：
this.props.location.querys;
```

**注意**：在组件里面，可能没有 this.props.history/location 这些对象，可以给组件套一个 withRouter 就可以生成这些对象了。

#### 路由嵌套

vue 中使用 vue-router 进行路由路由路由配置，在 router.js 中使用 object + children  这样的嵌套形式，然后在页面中使用 `<router-view />` 进行子路由位置的确定。

react 中，没有提供这样的配置，是需要自己以 **组件** 的形式声明路由。如上面的那个示例，一个 `<Route />` 标签它是一个组件，同时也可以理解成是一个路由，他也类似于相当于 vue 里面的 `<router-view />` 标签。

`<Route />` 标签是可以在 react 项目中任何位置使用的，如在根节点声明了有一个路由 '/article'，其 component 是 Article，如果想要实现一个路由 '/article/234'，就可以在 Article 中加一个 `<Route />` 标签，实现子路由。

在 react 中使用 'react-router-config' 进行路由配置，可以达到类似于 react-router 那样的效果。

**注意**：如果有使用路由嵌套，那么父级路由的 `<Route />` 上面不能添加 **exact** 属性，这个属性是 pathname 完全等于 path 时才能使这个路由被命中 ![excat](http://www.neiltop.com/upload/1575176101516_9902136-f074f8bbfa8e394b.png)。


示例参考demo：/src/route.js     /src/pages/App.js    /src/pages/route/route.js

#### 菜单导航

一般应用都会有一部分公共的地方，如后台系统的左侧导航或顶部导航，m 站的底部 tab。

1. 使用路由嵌套：在 demo 中我们使用的是路由嵌套的方式，即：有菜单的地方，就给他加一个 route，'/app/handler'，'/app/props'，这样的好处是理解起来好点，但是有个坏处是，如果路由是 '/app/prop123'，这样的，若没有定义这个路由是不会报错的，会返回 '/app' 的（当然这种也是可以解决的就是麻烦点~）。 

2. 不使用路由嵌套：利用 `<Route />` 标签的 path，进行多次匹配，如下示例这种匹配方式，将 Tab 页面提出来，单独作为一个 route 组件，当匹配到路径时，就添加对应的 dom，[效果展示](http://www.neiltop.com:808/)。
	```js
	export default () => (
	    <Router>
	        <Switch>
	            <Route path="/" exact component={Mv} />
	            <Route path="/music" component={Music} />
	            <Route path="/center" component={Center} />
	            <Route path="/detail" component={Detail} />
	            <Route component={Error} />
	        </Switch>
			<Route exact path={["/", "/music", "/center"]} component={Tab} />
	    </Router >
	);
	```


#### 路由守卫

react-router 没有提供 vue 里面的路由守卫，但是我们可以通过编写 js 到达类似的效果，参考：/src/pages/App.js。

一般路由守卫是做权限之类的管理才会用到的，在 react 中，如果涉及到权限，可以使用路由守卫进行权限鉴定，在页面中，也可以通过条件判断，当符合条件时，才允许显示 `<Route />` 标签。

```js
<Route path='/user' render={props => isLogin ? <User /> : <Redirect to='/app/handler' />} />
```

```js
<Switch>
  <Route exact path="/" component={Home} />
  {isLogin ? <Route path="/user" component={User} /> : ''}
  <Route path="/login" component={Login} />
</Switch>
```