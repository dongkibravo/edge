import axios from "axios";

const client_key = "64JXMJSDr30ZjGCOETjP7SH2F4zLmYR2orOnXh3b7RrKuC9w76fgH3pes25CB5ISxf6j23GXZq4Dq6QDsHNQXcYYLFCgJ10vtQF2IAPCZX4OY85VZ2JikYtr2XQJ2fMA";
const url = "https://user.themusio.com/auth/signin/";
const url2 = "http://52.78.124.31/auth/signin/";
const client_key2 = "testkey";

export function login(email, password){
  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('client_key', client_key);
  console.log(email);
  console.log(password);
  return dispatch =>{
    axios.post(url,formData)
      .then((response)=>{
        if (response.data.status === true){
          dispatch({
            type:"LOGIN_FULFILLED",
            payload: response.data,
          })
        }
        else{
          dispatch({
            type:"LOGIN_REJECTED",
            payload: response.data,
          })
        }
      })
      .catch((err)=>{
        dispatch({
          type:"LOGIN_REJECTED",
          payload: err,
        })
      })
  }
}

export function setRedirectUrl(currentUrl){
  return dispatch =>{
    dispatch({
      type: "LOGIN_REQUIRED",
      payload: currentUrl
    })
  }
}
