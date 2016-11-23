import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class Auth extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if(!this.props.loggedIn) {
        browserHistory.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.loggedIn) {
        browserHistory.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { loggedIn: state.user.loggedIn }
  }

  return connect(mapStateToProps)(Auth);
}
