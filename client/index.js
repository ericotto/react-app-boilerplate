import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App'
import Main from './components/pages/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Auth from './components/auth/Auth';
import Logout from './components/auth/Logout';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/utils/Footer';

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
