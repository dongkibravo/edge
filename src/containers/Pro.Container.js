import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import Training from './Pro.Training';
import WrongNotes from './Pro.WrongNote';
import Analysis from './Pro.Analysis';
import Tutor from './Pro.Tutor';
import SessionDetail from './Pro.SessionDetail';
import '../styles/css/pro.notes.css';

// issue - when pro page is rendered, previous dashboard states are gone

class Pro extends React.Component{

  componentDidlMount(props){
    console.log("component did mount in pro container");
    console.log(this.props.match.url);
  }

  render(){
    const Page = () => (
      <Switch>
        <Route exact path={'/pro'}
          render={()=><Redirect to="/pro/personal-training" />} />
        <Route exact path={'/pro/personal-training'} component={Training} />
        <Route exact path={'/pro/personal-training/:session_num'}
          component={SessionDetail} />
        <Route exact path={'/pro/wrong-notes'} component={WrongNotes} />
        <Route exact path={'/pro/analysis'} component={Analysis} />
        <Route exact path={'/pro/tutor'} component={Tutor} />
      </Switch>
    );

    return(
      <Grid className="text-center">
        <Page />
      </Grid>
    );
  }
}


export default Pro;
