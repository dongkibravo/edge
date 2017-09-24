import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './containers/LogInContainer';
import AuthCheck from './containers/AuthContainer';

class Routes extends React.Component{

  render(){
    const {jwt, redirectUrl} = this.props;
    return(
      <Router>
        <div>
        <Route exact path="/" render={()=> (
                     jwt ?(
                       <Redirect to="/home" />
                     ):(
                       <Redirect to="/login" />
                     )
                   )} />
         <Route path="/" component={AuthCheck} />
         <Route path="/login" render={()=> (
                     jwt ?(
                       <Redirect to={redirectUrl} />
                     ):(
                       <Login />
                     )
                  )} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return{
    jwt: state.auth.jwtToken,
    redirectUrl: state.auth.redirectUrl
  };
}

export default connect(mapStateToProps)(Routes);
