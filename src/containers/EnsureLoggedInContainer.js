// https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setRedirectUrl } from '../actions/AuthAction';
import history from '../history';

class EnsureLoggedInContainer extends React.Component{

  componentDidMount(){
    const { dispatch, currentUrl, isLoggedIn, history } = this.props;
    if(!isLoggedIn){
      console.log("checkpoint");
      dispatch(setRedirectUrl(currentUrl));
      this.props.router.push('/login');
    }
  }

  render(){
    console.log("render");
    console.log(this.props.isLoggedIn);
    const{ isLoggedIn } = this.props;
    if (isLoggedIn){
      return this.props.children;
    }
    return <div> hi</div>;
  }
}

function mapStateToProps(state){
  return{
    isLoggedIn: state.logIn.isLoggedIn,
    currentUrl: window.location.pathname
  };
}

export default withRouter(connect(mapStateToProps)(EnsureLoggedInContainer));
