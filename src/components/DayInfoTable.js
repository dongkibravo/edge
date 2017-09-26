import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import DayInfoDetail from './DayInfoDetail';

// Dialogue, Pattern Quiz result 표시하는 부분 question

const DayInfoTable = (props)=>{
  console.log("day info table!!!!!!");
  console.log(props);

  return(
    <Row>
      <Col className="info_table" xs={12} md={10} mdOffset={1}>
        <Row className="table_title">
          <Col xs={12} md={10} mdOffset={1}>
            <div className="title_padding">
              <div className="title_text">
                <div className="week">
                  <span>Week 1: Airport {props.title}</span>
                </div>
                <div className="day">
                  <span>Day 1</span>
                </div>
              </div>
              <div className="musio_activation">
                <button>Start in Musio</button>
              </div>
            </div>
          </Col>
        </Row>
        {props.dailyData.map((dailyContent, index)=>(
          <DayInfoDetail content={dailyContent} />
        ))}
      </Col>
    </Row>
  );
};

export default DayInfoTable;
