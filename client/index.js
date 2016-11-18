import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
