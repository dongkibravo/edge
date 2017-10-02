import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../styles/css/pro.notes.css';
import WeekTable from '../components/Note.WeekTable';
import QuizTable from '../components/Note.QuizTable';
import { getQuizResult, getQuizWeeks } from '../actions/ProAction';

class WrongNotes extends React.Component{

  constructor(){
    super();
    this.state={
      status : [],
      clickedWeek : null,
      displayedQuiz : null,
      selectedDiv : null,
    };
  }

  componentWillMount(){
    this.props.getQuizWeeks();
    this.props.getQuizResult(0);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      status : Array(nextProps.weeks.length).fill(false)
    });
  }

  componentDidUpdate(){
    console.log("component did update");
    console.log(this.state);

    // let thisWeek = this.state.clickedWeek;
    // if(thisWeek !== null){
    //   console.log("getting new quiz result of week "+thisWeek);
    //   this.props.getQuizResult(thisWeek);
    // }

  }

  show(index, event){
    let status = this.state.status;

    if(this.state.clickedWeek!==null){
      let clickedWeek = this.state.clickedWeek;
      status[clickedWeek] = false;
      if(clickedWeek !== index){
        this.props.getQuizResult(index);

        status[index] = true;
        clickedWeek = index;
      }else{
        clickedWeek = null;
      }
      this.setState({
        status,
        clickedWeek,
        selectedDiv: null
      });
    }else{
      this.props.getQuizResult(index);

      status[index] = true;
      this.setState({
        status,
        clickedWeek: index
      });
    }
  }

  quizDayClicked(index, event){
    console.log("on Quiz day clicked");

    if(this.state.selectedDiv !== null){
      this.state.selectedDiv.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');

    this.setState({
      displayedQuiz: this.props.quizResult[index],
      selectedDiv: event.currentTarget
    });
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
        <WeekTable weeks={this.props.weeks} status={this.state.status}
         show={this.show.bind(this)} onClick={this.quizDayClicked.bind(this)} />
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
