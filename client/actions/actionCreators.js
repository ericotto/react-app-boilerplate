import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

export function login(username, password, remember_me) {
  return function(dispatch) {
    axios.post(
      '/api/user/login',
      { username: username,
        password: password,
        remember_me: remember_me},
    ).then( response => {
      if (response.data.success) {
        dispatch({type: 'LOGIN_USER', token: response.data.token});
        browserHistory.push('/');
      }
      dispatch({type: 'LOGIN_MESSAGE', message: response.data.message});
    });
  }
}

export function logout() {
  return function(dispatch) {
    dispatch({ type: 'LOGOUT_USER'});
    cookie.remove('jwt');
    browserHistory.push('/');
  }
}

export function register(username, password, confirmPassword) {
  return function(dispatch) {
    axios.post(
      '/api/user/create',
      { username: username, password: password, confirmPassword: confirmPassword },
    ).then( response => {
      if (response.data.success) {
        dispatch({type: 'LOGIN_USER', token: response.data.token});
        browserHistory.push('/');
      }
      dispatch({type: 'REGISTER_MESSAGE', message: response.data.message});
    });
  }
}
