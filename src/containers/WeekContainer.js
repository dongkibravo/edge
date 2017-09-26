import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { getWeeks } from '../actions/DashboardAction';
import WeekTable from '../components/WeekTable';

class WeekContainer extends React.Component{

  constructor(){
    super();
    this.state={
      weeks: [],
      titles: [],
    };
  }
  // componentWillMount(){
  //   console.log("Component Will Mount in Week");
  //   this.props.getWeeks();
  // }

  componentDidMount(){
    const { titles, weeklyStatus } = this.props;
    // put axios in here to grab week information
    // dispatching getWeeks should be somewhere else
    console.log("Component Did Mount in week");
    this.setState({
      weeks: weeklyStatus,
      titles: titles
    });
  }

  render(){
    return(
      <WeekTable weeks={this.state.weeks} titles={this.state.titles} />
    );
  }
}

WeekContainer.propTypes={
  titles: PropTypes.array.isRequired,
};

const mapStateToProps =(state)=>{
  return{
    titles: state.dashboard.titles,
    weeklyStatus: state.dashboard.weeklyStatus
  };
};


export default connect(mapStateToProps)(WeekContainer);
