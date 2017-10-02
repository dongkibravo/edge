import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/css/pro.quiztable.css';

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
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Question</td>
              <td>Answer</td>
              <td>Your Answer</td>
              <td>발음점수</td>
            </tr>
          </thead>
          <tbody>
            {data.log.map((qna, index)=>(
              <tr key={"quiz_"+index}>
                <td>{index+1}</td>
                <td>{qna.question}</td>
                <td>{qna.answer}</td>
                <td style={{color:'red'}}>{qna.user_answer}</td>
                <td>{qna.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default QuizTable;
