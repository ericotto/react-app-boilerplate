import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    var username = event.target.username.value;
    var password = event.target.password.value;
    axios.post(
      '/api/user/login',
      { username: username, password: password },
    ).then( response => {
      if (response.data.success) {
        this.props.login(response.data.token);
        browserHistory.push('/');
      } else {
        this.setState({message: response.data.message });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-offset-4 col-md-4">
        <form className="form" onSubmit={this.handleLogin}>
          { this.state.message ? <div className="alert-danger">{this.state.message}</div> : '' }
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Username" required></input>
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" required></input>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Login;
