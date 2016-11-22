import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App'
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Auth from './components/Auth';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={Auth(Dashboard)}/>
          <Route path="/logout" component={Auth(Logout)}/>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
