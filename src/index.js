import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/css/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store";
import Usermodel from './api_client/usermodelClient';
import Route from './containers/EnsureLoggedInContainer';
import Login from './containers/LogInContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
