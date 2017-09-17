import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{

  componentDidUpdate(prevProps){
    const { dispatch, redirectUrl } = this.props;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;

    if (isLoggingIn){
      dispatch(navigatTo(redirectUrl))
    } else if (isLoggingOut){
      // Logging out action
    }
  }

  render(){
    return this.props.children
  }

}

function mapStateToProps(state){
  return{
    isLoggedIn: state.isLoggedIn,
    redirectUrl: state.redirectUrl,
  }
}

export default connect(mapStateToProps)(App)