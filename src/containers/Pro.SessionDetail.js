import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getPersonalTraining,getPtDetail} from '../actions/ProAction';
import DayInfoTable from '../components/DayInfoTable';
import '../styles/css/Pro.SessionDetail.css';

class SessionDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sessionDetail: []
    };
  }

  componentWillMount(){
    let {session_num} = this.props.match.params;

    if(this.props.ptSessions===null){
      this.props.getPersonalTraining();
    }else{
      let materials = this.props.ptSessions[session_num-1].materials;
      this.props.getPtDetail(session_num, materials);
    }
  }

  componentDidMount(){
    console.log("component did mount in pt detail");
    console.log(this.props.ptSessions);
  }

  componentWillReceiveProps(nextProps){
    console.log("will receive props");
    let {session_num} = this.props.match.params;

    if(this.props.ptSessions===null){
      console.log("set state pt sessions");
      let materials = nextProps.ptSessions[session_num-1].materials;
      this.props.getPtDetail(session_num, materials);
    }else if(this.props.sessionDetail.length===0){
      this.setState({
        sessionDetail: nextProps.sessionDetail
      });
    }
  }

  render(){
    let {session_num} = this.props.match.params;

    return(
      <DayInfoTable dailyData={this.state.sessionDetail}
        session_num={session_num} />
    );
  }

}

const mapStateToProps=(state)=>{
  return{
    ptSessions: state.pro.ptSessions,
    sessionDetail: state.pro.sessionDetail
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    getPersonalTraining: ()=>{
      dispatch(getPersonalTraining());
    },
    getPtDetail: (session_num, materials)=>{
      dispatch(getPtDetail(session_num, materials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionDetail);
