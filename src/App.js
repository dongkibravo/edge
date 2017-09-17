import React from 'react';
import {BrowserRouter as Router, Route,
  Switch } from 'react-router-dom';

import {Root} from './containers/Root';
import Dashboard from './containers/Dashboard';
import Test from './containers/Test';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Root>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/soso" component={Test} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

export default App;