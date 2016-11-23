import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/actionCreators';

class Login extends React.Component {

  handleLogin(event) {
    event.preventDefault();
    var username = event.target.username.value;
    var password = event.target.password.value;
    var remember_me = event.target.remember_me.checked;
    this.props.login(username, password, remember_me);
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-offset-4 col-md-4">
        <form className="form" onSubmit={this.handleLogin.bind(this)}>
          { this.props.loginMessage ? <div className="alert-danger">{this.props.loginMessage}</div> : '' }
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="form-control" placeholder="Username" required></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" placeholder="Password" required></input>
          <input type="checkbox" id="remember_me"></input>
          <label htmlFor="remember_me">Remember Me</label>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginMessage: state.user.loginMessage
  }
}

export default connect(mapStateToProps, { login })(Login);
