import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    },
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleRegistration(event) {
    event.preventDefault();
    var username = event.target.username.value;
    var password = event.target.inputPassword.value;
    if (password !== event.target.confirmPassword.value) {
      this.setState({message: 'Passwords don\'t match'});
      event.target.inputPassword.value = '';
      event.target.confirmPassword.value = '';
    }
    axios.post(
      '/api/user/create',
      { username: username, password: password },
    ).then( response => {
      if (response.data.success) {
        browserHistory.push('/');
        return;
      } else {
        this.setState({message: response.data.message });
      }
    });
    event.target.username.value = '';
    event.target.inputPassword.value = '';
    event.target.confirmPassword.value = '';
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-offset-4 col-md-4">
        <form className="form" onSubmit={this.handleRegistration}>
          { this.state.message ? <div>{this.state.message}</div> : '' }
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="form-control" placeholder="Username" required autofocus></input>
          <label htmlFor="inputPassword">Password:</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" className="form-control" placeholder="Password" required></input>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
        </div>
      </div>
    )
  }
}


export default Register;
