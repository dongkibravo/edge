import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../styles/css/pro.notes.css';
import WeekTable from '../components/Note.WeekTable';
import QuizTable from '../components/Note.QuizTable';
import { getQuizResult, getQuizWeeks } from '../actions/ProAction';

class WrongNotes extends React.Component{

  componentWillMount(){
    console.log("will mount in note");
    this.props.getQuizWeeks();
  }


  componentDidMount(){
    console.log("did mount in note");
  }


  // onclick -> setState to the new props.quizResult
  onClickHandler(props){

  }

  render(){
    console.log("wrong notes is called");
    console.log(this.props.weeks);
    return(
      <div>
        <Row className="description">
          <Col xs={12}>
            <span className="main">Wrong Answer Notes</span>
            <span className="sub">Wrong Answer Notes를 통해 Day 별 퀴즈 활동에서 틀린 내용들을 볼 수 있습니다.</span>
          </Col>
        </Row>
        <WeekTable weeks={this.props.weeks} status={this.props.status}
          getQuiz={this.props.getQuizResult}/>
        <QuizTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    quizResult: state.pro.quizResult,
    weeks: state.pro.quizWeeks,
    status: state.pro.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    getQuizResult: (week) => {
      dispatch(getQuizResult(week));
    },
    getQuizWeeks: ()=>{
      dispatch(getQuizWeeks());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WrongNotes);
