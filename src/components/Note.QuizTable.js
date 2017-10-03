import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/css/pro.quiztable.css';
import {Vocabulary, Pattern, Dialogue} from './Note.Quizzes';


function QuizSelector(quiz){
  let set_type = null;
  if(quiz.test_type === 'Quiz'){
    if(quiz.data_type === "Pattern"){
      set_type = <Pattern data ={quiz.log} />
    }else if(quiz.data_type === "Dialogue"){
      set_type = <Dialogue data ={quiz.log} />
    }else if(quiz.data_type === "Vocabulary"){
      set_type = <Vocabulary data={quiz.log} />
    }
  }
  return set_type;
}

const QuizTable = ({week, day, data}) =>{
  return(
    <Row>
      <Col xs={12} md={10} mdOffset={1}>
        <span className="note_title">
          Week: {week+1} Day: {day} {data.data_type} {data.test_type}
        </span>
        <span className="note_timestamp">
          Quiz result: {data.timestamp}
        </span>
        {QuizSelector(data)}
      </Col>
    </Row>
  );
};

export default QuizTable;
