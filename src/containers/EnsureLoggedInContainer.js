// https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
import React from 'react';
import {connect} from 'react-redux';
import { setRedirectUrl } from '../actions/AuthAction';

class EnsureLoggedInContainer extends React.Component{
  componentDidMount(){
    const { dispatch, currentUrl, isLoggedIn } = this.props;
    console.log(currentUrl);

    if(!isLoggedIn){
      dispatch(setRedirectUrl(currentUrl));
      this.props.history.push('/login');
    }
  }

  render(){
    const{ isLoggedIn } = this.props;
    if (isLoggedIn){
      return this.props.children;
    }
  }
}

function mapStateToProps(state, ownProps){
  return{
    isLoggedIn: state.isLoggedIn,
    currentUrl: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer);



