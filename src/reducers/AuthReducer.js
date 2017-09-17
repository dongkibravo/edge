export default function reducer(state={
                                  jwtToken: null,
                                  error: null,
                                }, action) {

  switch (action.type) {
    case "LOGIN_FULFILLED": {
      console.log(action.payload);
      return {...state, jwtToken: 'JWT '+action.payload.token}
    }

    case "LOGIN_REJECTED":{
      console.log(action.payload);
      return {...state, err: action.payload.message}
    }

    case "LOGOUT": {
      console.log('from reducer, logging out');
      return { jwtToken: null}
    }

    default: {
      return {...state}
    }
  }
}
