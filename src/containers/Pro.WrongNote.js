import React from 'react';
import {Row, Col} from 'react-bootstrap';
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
      week : null,
      displayedQuiz : null,
      selectedDiv : null,
      day : null,
    };
  }

  componentWillMount(){
    this.props.getQuizWeeks();
    this.props.getQuizResult(0);    // UPDATE THIS PART DURING API CONNECTION
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      status : Array(nextProps.weeks.length).fill(false)
    });
  }

  componentDidUpdate(){
    console.log("component did update");
    console.log(this.state);
  }

  show(index, event){
    let status = this.state.status;

    if(this.state.week!==null){
      let week = this.state.week;
      status[week] = false;
      if(week !== index){
        this.props.getQuizResult(index);

        status[index] = true;
        week = index;
      }else{
        week = null;
      }
      this.setState({
        status,
        week,
        selectedDiv: null
      });
    }else{
      this.props.getQuizResult(index);

      status[index] = true;
      this.setState({
        status,
        week: index
      });
    }
  }

  quizDayClicked(index, day, event){
    console.log("on Quiz day clicked");

    if(this.state.selectedDiv !== null){
      this.state.selectedDiv.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');

    this.setState({
      displayedQuiz : this.props.quizResult[index],
      selectedDiv   : event.currentTarget,
      day           : day
    });
  }

  render(){
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
         <Row className="note_table_row text-left">
           <Col className="note_table" xs={12} md={10} mdOffset={1}>
             {this.state.displayedQuiz?
               <QuizTable data={this.state.displayedQuiz}
                 day={this.state.day} week={this.state.week} />
               : null}
           </Col>
         </Row>
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
