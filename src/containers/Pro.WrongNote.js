import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../styles/css/pro.notes.css';
import WeekTable from '../components/Note.WeekTable';
import QuizTable from '../components/Note.QuizTable';
import ProNav from '../components/pro.nav';
import Description from '../components/Pro.Description';
import { getQuizResult, getQuizWeeks } from '../actions/ProAction';

class WrongNotes extends React.Component{

  constructor(props){
    super(props);
    this.state={
      status : [],              // for closing and opening dropdown in table
      week : null,
      displayedQuiz : null,
      selectedDiv : null,
      day : null,
      prevClickedWeek : null      // feel like there would be better way to acheive this
    };
  }

  componentWillMount(){
    if(this.props.weeks.length === 0){
      this.props.getQuizWeeks();
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.weeks.length===0){
      this.setState({
        status : Array(nextProps.weeks.length).fill(false)
      });
    }
  }

  show(index, event){
    let {status, week, prevClickedWeek} = this.state;

    // the week table has been already clicked
    if(week !== null){
      status[week] = false;
      if(week !== index){  // the clicked week is not same as previously clicked week
        this.props.getQuizResult(index);
        status[index] = true;
        week = index;
      } else{  // the clicked week is same as previously clicked week
        week = null;
        prevClickedWeek = index;
      }
      this.setState({
        status,
        week,
        selectedDiv: null,
        prevClickedWeek
      });
    } else{  // week table has not been clicked yet
      if(prevClickedWeek !== index){
        this.props.getQuizResult(index);
      }
      status[index] = true;
      this.setState({
        status,
        week: index
      });
    }
  }

  quizDayClicked(index, day, event){
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
        <ProNav type="AI" />
        <Description type="WrongNotes" />
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
