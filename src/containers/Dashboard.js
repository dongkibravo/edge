import React from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import '../styles/css/dashboard.css';
import basic_lock from '../static/basic_lock.svg';
import pro_lock from '../static/pro_lock.svg';
import ongoing from '../static/ongoing.svg';
import complete from '../static/complete.svg';
import StatusChart from '../components/charts/StatusChart';

class Dashboard extends React.Component{
  render(){
    return(
      <Grid className="main_content">
        <Row>
          <Col className="weekly_content" xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Row>
              <Col xs={12}>
                <div className="week_title"><span>Week 1: Airport</span></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="progress_status">
                  <StatusChart />
                  <div className="line finished"></div>
                  <div className="form-group">
                    <Image className="day_one mini_circle complete" src={complete} circle />
                    <label htmlFor="day_one">Day 1</label>
                  </div>
                  <div className="line finished"></div>
                  <div className="form-group">
                    <Image className="day_two mini_circle ongoing" src={ongoing} circle />
                    <label htmlFor="day_two">Day 2</label>
                  </div>
                  <div className="line connect"></div>
                  <div className="form-group">
                    <Image className="day_three mini_circle lock" src={basic_lock} circle />
                    <label htmlFor="day_three">Day 3</label>
                  </div>
                  <div className="line connect"></div>
                  <div className="form-group">
                    <Image className="day_four mini_circle lock" src={pro_lock} circle />
                    <label htmlFor="day_four">Day 4</label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={1} xsOffset={6} className="vertical_bar">
          </Col>
        </Row>
        <Row>
          <Col className="weekly_content" xs={12} md={10} mdOffset={1} lg={8} lgOffset={2}>
            <Row>
              <Col xs={12}>
                <div className="week_title"><span>Week 1: Airport</span></div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={10} mdOffset={1}>
                <div className="progress_status">
                  <Image className="status" src={ongoing} circle />
                  <div className="line finished"></div>
                  <Image className="mini_circle complete" src={complete} circle />
                  <div className="line finished"></div>
                  <Image className="mini_circle ongoing" src={ongoing} circle />
                  <div className="line connect"></div>
                  <Image className="mini_circle lock" src={basic_lock} circle />
                  <div className="line connect"></div>
                  <Image className="mini_circle lock" src={pro_lock} circle />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <StatusChart />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
