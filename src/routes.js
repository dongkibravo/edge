import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './apps';
import { Root } from './containers/Root';
import LogIn from './containers/LogInContainer';
import EnsureLoggedIn from './containers/EnsureLoggedInContainer';
import Dashboard from './containers/Dashboard';
import Test from './containers/Test';


class Route extends React.Component{
  render(){
    return(
      <Router>
        <Route path="/" component={App}>
          <Route path="login" component={LogIn} />

          <Route component={EnsureLoggedIn}>
            <Root>
              <Switch>
                <Route path="dashboard" component={Dashboard} />
                <Route path="test" component={Test} />
              </Switch>
            </Root>
          </Route>
        </Route>
      </Router>
    )
  }
}

export default Route;