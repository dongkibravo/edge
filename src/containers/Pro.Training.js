import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getPersonalTraining} from '../actions/ProAction';
import TrainingTables from '../components/Pro.Training.Tables';
import '../styles/css/Pro.Training.css';

class Training extends React.Component{

  constructor(){
    super();
    this.state={
      ptSessions: [],
      seesionDetail: []
    };
  }

  componentWillMount(){
    this.props.getPersonalTraining();
  }

  componentWillReceiveProps(nextProps){
    console.log("in will receive props");
    console.log(nextProps);
    if(this.props.ptSessions !== nextProps.ptSessions){
      this.setState({
        ptSessions : nextProps.ptSessions
      });
    }



  }

  render(){
    return(
      <div>
        <Row className="description">
          <Col xs={12}>
            <span className="main">Personal Training</span>
            <span className="sub">
              Personal weakness를 분석하고 트레이닝 하는 세션을 자동으로 생성해줌
            </span>
          </Col>
        </Row>
         <Row className="training_table_row">
           <Col xs={12} md={10} mdOffset={1}>
             <TrainingTables data={this.state.ptSessions} onClickHandler="hi" />
           </Col>
         </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ptSessions: state.pro.personalTraining,
    status: state.pro.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    getPersonalTraining: ()=>{
      dispatch(getPersonalTraining());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Training);
