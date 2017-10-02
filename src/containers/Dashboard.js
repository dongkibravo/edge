import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import '../styles/css/dashboard.css';
import {connect} from 'react-redux';
import { getWeeks } from '../actions/DashboardAction';
import WeekContainer from './WeekContainer';
import DayContainer from './DayContainer';
import Navbar from '../components/NavBar.console.js';
import {Grid} from 'react-bootstrap';

// Action needs to be applied at this point to receive user's weekly
// status and dispatch it to global state or pass them by props

class Dashboard extends React.Component{

  componentWillMount(){
    console.log("component will mount in dashboard");
    this.props.getWeeks();
  }

  render(){
    const Page = () => (
      <Switch>
        <Route exact path={'/dashboard'} component={WeekContainer} />
        <Route exact path={'/dashboard/:week/:day'} component={DayContainer} />
        <Route path={'/dashboard/:something'}
          render={()=><Redirect to="/dashboard" />} />
      </Switch>
    );
    return(
      <Page />
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getWeeks: () => {
      dispatch(getWeeks());
    }
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
