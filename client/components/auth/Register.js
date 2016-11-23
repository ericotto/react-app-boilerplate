import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/actionCreators';

class Register extends React.Component {

  handleRegistration(event) {
    event.preventDefault();
    var username = event.target.username.value;
    var password = event.target.inputPassword.value;
    var confirmPassword = event.target.confirmPassword.value;
    this.props.register(username, password, confirmPassword);
    event.target.username.value = '';
    event.target.inputPassword.value = '';
    event.target.confirmPassword.value = '';
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-offset-4 col-md-4">
        <form className="form" onSubmit={this.handleRegistration.bind(this)}>
          { this.props.registerMessage ? <div className="alert-danger">{this.props.registerMessage}</div> : '' }
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="form-control" placeholder="Username" required></input>
          <label htmlFor="inputPassword">Password:</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" className="form-control" placeholder="Password" required></input>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    registerMessage: state.user.registerMessage
  }
}

export default connect(mapStateToProps, { register })(Register);
