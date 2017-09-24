// https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { setRedirectUrl } from '../actions/AuthAction';
import history from '../history';

class EnsureLoggedInContainer extends React.Component{
  constructor(...props){
    super(...props);
  }


  componentDidMount(){
    const { dispatch, currentUrl, isLoggedIn } = this.props;
    console.log("component did mount");

    if(!isLoggedIn){
      console.log("checkpoint");
      dispatch(setRedirectUrl(currentUrl));
      history.push('/login');
    }
  }

  render(){
    console.log("render");
    console.log(this.props.isLoggedIn);
    const{ isLoggedIn } = this.props;
    if (isLoggedIn){
      return this.props.children;
    } else{
      return <div>DID NOT WORK</div>;
    }
  }
}

function mapStateToProps(state, props){
  return{
    isLoggedIn: state.logIn.isLoggedIn,
    currentUrl: window.location.pathname
    // currentUrl: props.location.pathname
  };
}

// export default withRouter(connect(mapStateToProps)(EnsureLoggedInContainer));
export default connect(mapStateToProps)(EnsureLoggedInContainer);
