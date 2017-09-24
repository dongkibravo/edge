import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

const Pattern = (props)=>{
  return(
    <Row>
      <Col xs={12}>
        <div className="day_detail">
          <Row className="day_detail_title">
            <Col xs={12} md={10} mdOffset={1}>
              <span>'Key Phrases'</span>
            </Col>
          </Row>
          <Row className="qna_separation">
            <Col className="day_detail_qna" xs={11} md={10} mdOffset={1}>
              <Row className="pattern">
                <Col xs={12}>
                  <span className="pattern_eng">This is pattern in English</span>
                  <span className="pattern_jp">This is pattern in Japanese</span>
                </Col>
              </Row>
              <Row>
                <Col xs={1} xsOffset={6} className="vertical_bar2" />
              </Row>
              <Row className="pattern">
                <Col xs={12}>
                  <span className="pattern_eng">This is musio_part part in English</span>
                  <span className="pattern_jp">This is musio_part part in Japanese</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Pattern;
