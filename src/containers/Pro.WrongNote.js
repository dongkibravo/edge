import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../styles/css/pro.notes.css';
import WeekTable from '../components/Note.WeekTable';
import QuizTable from '../components/Note.QuizTable';
import { getQuizResult } from '../actions/ProAction';

class WrongNotes extends React.Component{

  constructor(){
    console.log("constructor");
    super();
    this.state={
      isHidden: true
    };

  }

  componentWillMount(){
    console.log("will mount in note");
  }


  componentDidMount(){
    console.log("did mount in note");
  }

  onWeekClick(){
    alert("clicked clicked");
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  // onclick -> setState to the new props.quizResult
  onClickHandler(props){

  }

  render(){
    console.log("wrong notes is called");
    return(
      <div>
        <Row className="description">
          <Col xs={12}>
            <span className="main">Wrong Answer Notes</span>
            <span className="sub">Wrong Answer Notes를 통해 Day 별 퀴즈 활동에서 틀린 내용들을 볼 수 있습니다.</span>
          </Col>
        </Row>
        <WeekTable clickHandler={this.onWeekClick.bind(this)}
          display={this.state.isHidden}/>
        <QuizTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    quizResult: state.pro.quizResult,
    titles: state.dashboard.titles
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    getQuizResult: (week) => {
      dispatch(getQuizResult(week));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WrongNotes);
