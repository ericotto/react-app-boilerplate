function user(state = [], action) {
  switch(action.type) {
    case 'LOGIN_USER':
      return {...state,
        loggedIn: true,
        token: action.token,
      };
    case 'LOGIN_MESSAGE':
      return {...state,
        loginMessage: action.message
      };
    case 'REGISTER_MESSAGE':
      console.log('fire')
      return {...state,
        registerMessage: action.message
      };
    case 'LOGOUT_USER':
      return {...state,
        loggedIn: false,
        token: null
      };
    default:
      return state;
  }
}

export default user;
