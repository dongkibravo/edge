import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRedirectUrl } from '../actions/AuthAction';
import ContentCategory from './MainContainer';
import {Root} from './Root';
import Dashboard from './Dashboard';
import Pro from './Pro.Container';
import Dashboard2 from './Dashboard2';
import DayContainer from './DayContainer';
import Profile from '../components/Profile';

class RootRouterWrapper extends React.Component{

  componentDidMount(){
    const { currentUrl, jwt } = this.props;
    console.log("component did mount in wrapper");
    console.log(currentUrl);

    if(!jwt){
      console.log("not logged in");
      this.props.setRedirectUrl(currentUrl);
      this.props.history.push("/login");
    }
  }

  render(){
    const { jwt } = this.props;
    const match = this.props.match;

    console.log("match");
    console.log(match);
    if(jwt){
      return(
        <div id="RootRouterWrapper">
          <Switch>
            <Route exact path="/home" component={ContentCategory} />
            <Route>
              <Root>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pro" component={Pro} />
                <Route path="/profile" component={Profile} />
              </Root>
            </Route>
          </Switch>
        </div>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setRedirectUrl: (currentUrl) =>{
      dispatch(setRedirectUrl(currentUrl));
    }
  };
};


const mapStateToProps = (state, props) =>{
  return{
    currentUrl: props.location.pathname,
    jwt: state.auth.jwtToken
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RootRouterWrapper);
