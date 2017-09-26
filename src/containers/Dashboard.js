import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/css/dashboard.css';
import {connect} from 'react-redux';
import { getWeeks } from '../actions/DashboardAction';
import WeekContainer from './WeekContainer';
import DayContainer from './DayContainer';

// Action needs to be applied at this point to receive user's weekly
// status and dispatch it to global state or pass them by props

/*
<Route exact path={this.props.match.path} component={HomeDefault} />
<Route path={`${this.props.match.path}/one`} component={HomePageOne} />
<Route path={`${this.props.match.path}/two`} component={HomePageTwo} />
*/
// to get :day -> this.props.match.params.day

class Dashboard extends React.Component{

  componentWillMount(){
    console.log("component will mount in dashboard");
    this.props.getWeeks();
  }

  render(){
    const Roster = () => (
      <Switch>
        <Route exact path={'/dashboard'} component={WeekContainer} />
        <Route path={'/dashboard/:week/:day'} component={DayContainer} />
      </Switch>
    );
    return(
      <Roster />
      // <WeekContainer />
      // <WeekTable weeks={weeks} />
      // <Switch>
        // <Route exact path={this.props.match.path} component={WeekContainer} />
        // <Route exact path={'${this.props.match.path}/:week/:day'} component={DayContainer} />
      // </Switch>
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
