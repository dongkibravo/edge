const initialState ={
  jwtToken: 'truetureture',
  error: null,
  redirectUrl: null,
  userId : 1
};

function authReducer(state=initialState, action){
  switch (action.type){
    case "LOGIN_FULFILLED":{
      return Object.assign({}, state, {
        jwtToken: 'Bearer ' + action.payload
      });
    }

    case "LOGIN_REJECTED":{
      return Object.assign({}, state, {
        error: action.payload
      });
    }

    case "REDIRECT_URL":{
      return Object.assign({}, state, {
        redirectUrl: action.payload
      });
    }
    default:
      return state;
  }
}

export default authReducer;
