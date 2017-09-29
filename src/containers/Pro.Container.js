import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Training from './Pro.Training';
import WrongNotes from './Pro.WrongNote';
import Analysis from './Pro.Analysis';
import {Grid, Row, Col} from 'react-bootstrap';
import '../styles/css/pro.notes.css';
import Root from '../components/pro.root';

class Pro extends React.Component{
  render(){
    console.log("pro was called");

    console.log(this.props.match.url);
    const match = this.props.match;

//    <Route path={'/pro/personal-training'} component={Training} />
// <Route path={'/pro/analysis'} component={Analysis} />

    return(
      <Root>
        <Route exact path={'${match.url}/wrong-notes'} component={WrongNotes} />
      </Root>
    );
  }
}


export default Pro;
