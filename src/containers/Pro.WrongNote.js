import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../styles/css/pro.notes.css';

class WrongNotes extends React.Component{
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
        <Row className="week_table">
          <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
            <table>
              <tbody>
                <tr className="week">
                  <td>Week 1: Airport</td>
                </tr>
                <tr className="day">
                  <td>Day 2: Pattern Quiz</td>
                </tr>
                <tr className="day">
                  <td>Day 3: Vocabulary Quiz</td>
                </tr>
                <tr className="day">
                  <td>Day 3: Dialogue Quiz</td>
                </tr>
                <tr className="day">
                  <td><span style={{color:'#6be1cc'}}>Pro</span> Day 4</td>
                </tr>
                <tr className="week">
                  <td>Week 2: Airplane</td>
                </tr>
                <tr className="week">
                  <td>Week 3: I DON'T KNOW</td>
                </tr>
                <tr className="week">
                  <td>Week 4: DO YOU KNOW?</td>
                </tr>
                <tr className="day">
                  <td><span style={{color:'#6be1cc'}}>Pro</span> Day 4</td>
                </tr>
                <tr className="week">
                  <td>Week 2: Airplane</td>
                </tr>
                <tr className="week">
                  <td>Week 3: I DON'T KNOW</td>
                </tr>
                <tr className="week">
                  <td>Week 4: DO YOU KNOW?</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

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
      </div>
    );
  }
}

export default WrongNotes;
