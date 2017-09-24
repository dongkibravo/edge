import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import WeekStatus from './WeekStatus';

const WeekTable = (props) =>{
  return(
    <Grid className="main_content">
      <Row>
          {props.weeks.map((week, index) =>(
            <div key={index}>
              <Col className="weekly_content" xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
                <Row>
                  <Col xs={12}>
                    <div className="week_title">
                      <span>Week {week.week_num}: {week.week_title}</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="progress_status">
                      <WeekStatus days={week.days} />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col xs={1} xsOffset={6} className="vertical_bar">
                </Col>
              </Row>
            </div>
          ))}
      </Row>
    </Grid>
  );
};

export default WeekTable;
