import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/QuizTable.css';
import {connect} from 'react-redux';
import { getDay } from '../actions/DashboardAction';
import DayInfoTable from '../components/DayInfoTable';

class DayContainer extends React.Component{

  componentWillMount(){
    console.log("Component Will Mount in Day");
  }

  componentDidMount(){
    console.log("Component Did Mount in day");
    const {day, week} = this.props.match.params;
    this.props.getDay(week, day);
  }

  // 이거 새로운 url을 그냥 쳐넣으면 어떻게 되지???
  componentWillReceiveProps(nextProps){
    console.log("Will Receive Props in Day");
    console.log(nextProps);
  }

  render(){
    const {week, day} = this.props.match.params;

    return(
      <DayInfoTable dailyData={this.props.dailyData} titles={this.props.titles}
        week={week} day={day} />
    );
  }
}



const mapDispatchToProps = dispatch=>{
  return{
    getDay: (week, day) => {
      dispatch(getDay(week, day));
    }
  };
};

const mapStateToProps =(state)=>{
  return{
    dailyData: state.dashboard.dailyData,
    titles: state.dashboard.titles
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DayContainer);
