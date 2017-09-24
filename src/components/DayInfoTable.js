import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import DayInfoDetail from './DayInfoDetail';




const DayInfoTable = (props)=>{



  return(
    <Row>
      <Col className="info_table" xs={12} md={10} mdOffset={1}>
        <Row className="table_title">
          <Col xs={12} md={10} mdOffset={1}>
            <div className="title_padding">
              <div className="title_text">
                <div className="week">
                  <span>Week 1: Airport</span>
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
        <DayInfoDetail type="Diagloue Practice"
          title="1. Asking for help" get="Dialogue" data="11"/>
        <DayInfoDetail type="Pattern Practice"
          title="Key Phrases" get="Pattern" data="22" />
        <DayInfoDetail type="Vocabulary Practice"
          get="Vocabulary" data="44" />
      </Col>
    </Row>
  );
};

export default DayInfoTable;
