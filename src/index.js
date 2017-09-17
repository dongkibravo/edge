import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/css/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store";
// import axios from 'axios';
import Usermodel from './api_client/usermodelClient';

import registerServiceWorker from './registerServiceWorker';

import LogIn from './containers/LogInContainer';

let formData = new FormData();
formData.append('email','test@test.com');
formData.append('password','123123');
formData.append('client_key','testkey');


// store.dispatch({
//   type:"LOGIN",
//   payload: Usermodel.post(
//     '/auth/signin/',
//     formData
//   )
// });
// store.dispatch({
//   type:"LOGIN",
//   payload: Usermodel.get(
//     '/academy/api/teachers/',
//     {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDUyMDM2NzQsImNsaWVudF9rZXkiOiJ0ZXN0a2V5IiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZXhwIjoxNTEwMzg3Njc0LCJpZCI6MzEyNH0.o498vIxswgq8Hq2RIfJBQosYd-KaI4uTuH0qBIjzdrM"}}
//   )
// });
// const client_key = "64JXMJSDr30ZjGCOETjP7SH2F4zLmYR2orOnXh3b7RrKuC9w76fgH3pes25CB5ISxf6j23GXZq4Dq6QDsHNQXcYYLFCgJ10vtQF2IAPCZX4OY85VZ2JikYtr2XQJ2fMA";
//
// store.dispatch({
//   type:"LOGIN",
//   payload: axios.post(
//     'https://user.themusio.com/auth/signin/',
//     {username:"j@aka.com",password:"aka5377201",client_key:client_key},
//     {headers:{"Access-Control-Allow-Origin": "*"}}
//   )
// });



ReactDOM.render(
  <Provider store={store}>
    <LogIn />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
