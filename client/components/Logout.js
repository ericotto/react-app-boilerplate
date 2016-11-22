import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/actionCreators';

class Logout extends React.Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return (
      <div>Logging Out</div>
    )
  }
}


export default connect(null, { logout })(Logout);
