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
      loggedIn: false
    };
    //this.login = this.login.bind(this);
  }

  componentDidMount() {
    var token = cookie.load('jwt');
    this.setState({
      loggedIn: token ? true : false
    });
    console.log(token);
  }

  // login() {
  //   this.setState({loggedIn: true});
  //   console.log("login");
  // }
  // login={() => this.login()}

  render() {
    return (
      <div>
        <Header />
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </Router>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
