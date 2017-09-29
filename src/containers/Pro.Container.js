import React from 'react';
import {Route, Switch, Redirect} from 'react-route-dom';
import {connect} from 'react-redux';
import Weakness from './Pro.Training';
import Notes from './Pro.WrongNote';
import Analysis from './Pro.Analysis';
import {Grid, Row, Col} from 'react-bootstrap';
import '../styles/css/pro.notes.css';

class Pro extends React.Component{
  render(){
    const Page = () =>(
      <Switch>
        <Route path={'/pro/'}
      </Switch>
    )

    return(

    );
  }
}

export default Pro;
