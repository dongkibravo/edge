import React from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import WeekStatus from './WeekStatus';
import circle from '../static/circle.svg';

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
                      <span>Week {week.week_num}: {props.titles[index]} </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className="progress_status">
                      <WeekStatus days={week.days} week={week.week_num}/>
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
        <div style={{'text-align':'center'}} >
          <Image className="end_circle text-center" style={{width:'35px'}} src={circle} circle />
        </div>
      </Row>
    </Grid>
  );
};

export default WeekTable;
