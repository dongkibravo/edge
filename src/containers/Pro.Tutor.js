import React from 'react';
import {connect} from 'react-redux';
import {getTutorQuestion, postTutorQuestion} from '../actions/ProAction';
import Description from '../components/Pro.Description';
import ProNav from '../components/pro.nav';
import { QuestionForm, Divider, QuestionList } from '../components/Tutor.Components';
import '../styles/css/pro.tutor.css';

class Tutor extends React.Component{

  constructor(props){
    super(props);
    this.state={
      status : [],          // for closing and opening dropdown in table
      tutorList : [],
      question_num: null
    };
  }

  componentWillMount(){
    if(this.props.tutorList.length===0){
      this.props.getTutorQuestion();
    }else{
      this.setState({
        tutorList: this.props.tutorList
      });
    }
  }

  componentWillReceiveProps(nextProps){

    if(this.state.status.length !== nextProps.tutorList.length){
      this.setState({
        status : Array(nextProps.tutorList.length).fill(false)
      });
    }

    if(this.props.tutorList!==nextProps.tutorList){
      this.setState({
        tutorList: nextProps.tutorList
      });
    }
  }

  show(index, event){
    let {status, question_num} = this.state;

    // the question_num table has been already clicked
    if(question_num !== null){
      status[question_num] = false;
      if(question_num !== index){  // the clicked question_num is not same as previously clicked question_num
        status[index] = true;
        question_num = index;
      } else{  // the clicked question_num is same as previously clicked question_num
        question_num = null;
      }
      this.setState({
        status,
        question_num,
        selectedDiv: null
      });
    } else{  // question_num table has not been clicked yet
      status[index] = true;
      this.setState({
        status,
        question_num: index
      });
    }
  }

  render(){
    let {tutorList, status} = this.state;
    return(
      <div>
        <ProNav type="Tutor" />
        <Description type="Tutor_1" />
        <QuestionForm />
        {Divider}
        <Description type="Tutor_2" />
        <QuestionList questionList={tutorList} status={status}
          show={this.show.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    tutorList: state.pro.tutorList
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    getTutorQuestion: ()=>{
      dispatch(getTutorQuestion());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutor);
