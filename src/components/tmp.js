import React from 'react';
import {Row, Col} from 'react-bootstrap';

const WeekTable = props =>{
  return(
    <Row className="week_table">
      <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
        <table>
          <tbody>
            <tr className="week" onClick={props.clickHandler}>
              <td>Week 1: Airport</td>
            </tr>
            <div className={props.display}>
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
            </div>
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
  );
};

export default WeekTable;
