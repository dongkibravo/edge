import axios from "axios";
import { push } from 'react-router-redux';

const client_key = "64JXMJSDr30ZjGCOETjP7SH2F4zLmYR2orOnXh3b7RrKuC9w76fgH3pes25CB5ISxf6j23GXZq4Dq6QDsHNQXcYYLFCgJ10vtQF2IAPCZX4OY85VZ2JikYtr2XQJ2fMA";
const url = "https://user.themusio.com/auth/signin/";

export function login(email, password){
  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('client_key', client_key);

  return (dispatch, getState) =>{
    // Log In successful
    const state = getState();
    let redirectUrl = state.auth.redirectUrl;
    dispatch({
      type:"LOGIN_FULFILLED",
      payload: 'jwtTOKEN'
    });
    console.log("redirect action");
    console.log(redirectUrl);
    // dispatch(push(redirectUrl));

    // Log In rejected
    // dispatch({
    //   type: "LOGIN_REJECTED",
    //   payload: "login rejected"
    // });

    // axios.post(url,formData)
    // .then((response)=>{
    //   if (response.data.status === true){
    //     dispatch({
    //       type:"LOGIN_FULFILLED",
    //       payload: response.data.token,
    //     });
    //     dispatch(push(redirectUrl));
    //   }
    //   else{
    //     dispatch({
    //       type:"LOGIN_REJECTED",
    //       payload: response.data.message,
    //     });
    //   }
    // })
    // .catch((err)=>{
    //   dispatch({
    //     type:"LOGIN_REJECTED",
    //     payload: err,
    //   });
    // });
  };
}

export function setRedirectUrl(currentUrl){
    return (dispatch) =>{
    dispatch({
      type: "REDIRECT_URL",
      payload: currentUrl
    });
  };
}
