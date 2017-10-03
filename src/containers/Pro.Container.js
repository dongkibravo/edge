import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Training from './Pro.Training';
import WrongNotes from './Pro.WrongNote';
import Analysis from './Pro.Analysis';
import {Grid} from 'react-bootstrap';
import '../styles/css/pro.notes.css';
import ProNav from '../components/pro.nav';

class Pro extends React.Component{

  componentDidlMount(props){
    console.log("component did mount in pro container");
    console.log(this.props.match.url);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("should update in pro");
    return true;
  }
  render(){
    console.log("pro was called");
    const Page = () => (
      <Switch>
        <Route exact path={'/pro'}
          render={()=><Redirect to="/pro/personal-training" />} />
        <Route exact path={'/pro/personal-training'} component={Training} />
        <Route exact path={'/pro/wrong-notes'} component={WrongNotes} />
        <Route exact path={'/pro/analysis'} component={Analysis} />
      </Switch>
    );

    return(
      <Grid className="text-center">
        <ProNav />
        <Page />
      </Grid>
    );
  }
}


export default Pro;
