import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setRedirectUrl } from '../actions/AuthAction';
import ContentCategory from './MainContainer';
import {Root} from './Root';
import Dashboard from './Dashboard';
import Pro from './Pro.Container';
import Profile from '../components/Profile';
import Forum from './Forum';
import Help from './Help';

class RootRouterWrapper extends React.Component{

  componentDidMount(){
    const { currentUrl, jwt, titles } = this.props;
    console.log("component did mount in wrapper");
    console.log(currentUrl);

    if(!jwt){
      console.log("not logged in");
      this.props.setRedirectUrl(currentUrl);
      this.props.history.push("/login");
    }else{
      if(!titles){
        console.log("in auth container, no titles yet");
      }

    }
  }

  render(){
    const { jwt } = this.props;

    if(jwt){
      return(
        <div id="RootRouterWrapper" style={{height:"100%"}}>
          <Switch>
            <Route path="/home" component={ContentCategory} />
            <Root>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pro" component={Pro} />
                <Route path="/profile" component={Profile} />
                <Route exact path="/help" render={()=><Redirect to="/help/1"/>} />
                <Route path="/help/:page" component={Help} />
                <Route exact path="/forum" render={()=><Redirect to="/forum/1"/>} />
                <Route path="/forum/:page" component={Forum} />
              </Switch>
            </Root>
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
    jwt: state.auth.jwtToken,
    titles: state.dashboard.titles
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RootRouterWrapper);
