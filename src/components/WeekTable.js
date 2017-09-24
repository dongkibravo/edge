import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import StatusChart from '../components/charts/StatusChart';
import WeekStatus from './WeekStatus';

const WeekTable = (props) =>{
  <Grid className="main_content">
    <Row>
      <Col className="weekly_content" xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
        <Row>
          <Col xs={12}>
            <div className="week_title"><span>Week 1: Airport</span></div>
          </Col>
        </Row>
        {props.contents.map(content =>(
          <Row>
            <Col xs={12}>
              <div className="progress_status">
                <StatusChart status="temp" />
              </div>
              <WeekStatus days="temp" />
            </Col>
          </Row>
        ))}
        <Row>
          <Col xs={1} xsOffset={6} className="vertical_bar">
          </Col>
        </Row>
      </Col>
    </Row>
  </Grid>;
};

export default WeekTable;
