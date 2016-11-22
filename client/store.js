import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import cookie from 'react-cookie';

var token = cookie.load('jwt');

const defaultState = {
  user: {
    loggedIn: token ? true : false,
    token: token
  }
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
