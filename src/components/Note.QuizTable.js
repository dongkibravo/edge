import React from 'react';
import {Row, Col} from 'react-bootstrap';

const QuizTable = props =>{
  return(
    <Row className="note_table_row text-left">
      <Col className="note_table" xs={12} md={10} mdOffset={1}>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <span className="note_title">Day: 3 Vocabulary Quiz</span>
            <span className="note_timestamp">Quiz result: 2017-09-88</span>
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
                <tr>
                  <td>1</td>
                  <td>사과</td>
                  <td>apple</td>
                  <td>pear</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>사과</td>
                  <td>apple</td>
                  <td>pear</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>사과</td>
                  <td>apple</td>
                  <td>pear</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>사과</td>
                  <td>apple</td>
                  <td>pear</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>사과</td>
                  <td>apple</td>
                  <td>pear</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default QuizTable;
