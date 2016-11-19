import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import cookie from 'react-cookie';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null,
      loggedIn: false
    };
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    var token = cookie.load('jwt');
    this.setState({
      token: token,
      loggedIn: token ? true : false
    });
  }

  login(token) {
    this.setState({
      token: token,
      loggedIn: true
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/login" component={() => (<Login login={this.login} />)}/>
          <Route path="/register" component={() => (<Register login={this.login} />)}/>
        </Router>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
