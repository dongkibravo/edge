const initialState = {
  currentUrl: null,
  redirectUrl: null,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
};

function logInReducer(state=initialState, action){
  switch (action.type){

    case "LOGIN_REQUIRED":{
      return Object.assign({}, state, {
        isLoggingIn: true,
        currentUrl: action.payload
      });
    }

    case "LOGIN_REQUIRED_FULFILLED": {
      return Object.assign({}, state, {
        isLoggingIn: false,
        isLoggedIn: true,
      });
    }

    default:
      return state;
  }

}

export default logInReducer;
