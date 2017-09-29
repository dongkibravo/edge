import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import DayInfoDetail from './DayInfoDetail';

// Dialogue, Pattern Quiz result 표시하는 부분 question

const DayInfoTable = ({dailyData, titles, week, day})=>{
  return(
    <Row>
      <Col className="info_table" xs={12} md={10} mdOffset={1}>
        <Row className="table_title">
          <Col xs={12} md={10} mdOffset={1}>
            <div className="title_padding">
              <div className="title_text">
                <div className="week">
                  <span>Week {week}: {titles[week-1]}</span>
                </div>
                <div className="day">
                  <span>Day {day}</span>
                </div>
              </div>
              <div className="musio_activation">
                <button>Start in Musio</button>
              </div>
            </div>
          </Col>
        </Row>
        {dailyData.map((dailyContent, index)=>(
          <DayInfoDetail key={index} content={dailyContent} />
        ))}
      </Col>
    </Row>
  );
};

export default DayInfoTable;
