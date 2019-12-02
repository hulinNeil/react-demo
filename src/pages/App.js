import React from 'react';
import './App.css';
import routes from '../route';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect path='/' exact to='/app/handler' />
          {/* {renderRoutes(routes)} */}
          {routes.map((item, index) => (
            <Route key={item.path} path={item.path} render={props => {
              const isLogin = window.sessionStorage.getItem('isLogin');
              if(props.location.pathname !== '/login' && isLogin !== 'true'){
                return <Redirect to='/login' />
              }
              return <item.component {...props} route={item} />
            }} />
          ))}
        </Switch>
      </Router>
    );
  }
}
