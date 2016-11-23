import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends React.Component {

  renderLinks() {
    if (!this.props.loggedIn) {
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/register">Sign Up</Link></li>
      ]
    } else {
      return [
        <li><Link to="/dashboard">Dashboard</Link></li>,
        <li><Link to="/logout">Logout</Link></li>
      ]
    }
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Untitled Site</Link>
          </div>
          <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              { this.renderLinks() }
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.user.loggedIn }
}

export default connect(mapStateToProps)(Header);
