import Login from './pages/login';
import Home from './pages/home';
import Handler from './pages/base/handler';
import List from './pages/base/list';
import From from './pages/base/from';
import Route from './pages/route/route';
import Props from './pages/state/props';
import SetState from './pages/state/set_state';
import ShowState from './pages/state/show_state';
import Page404 from './pages/error';

export default [
  {
    path: '/app',
    component: Home,
    routes: [
      {
        path: '/app/handler',
        component: Handler
      },
      {
        path: '/app/list',
        component: List
      },
      {
        path: '/app/from',
        component: From
      },
      {
        path: '/app/route',
        component: Route
      },
      {
        path: '/app/props',
        component: Props
      },
      {
        path: '/app/set-state',
        component: SetState
      },
      {
        path: '/app/show-state',
        component: ShowState
      }
    ]
  },
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '*',
    component: Page404
  }
];