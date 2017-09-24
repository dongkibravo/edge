import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

const Dialogue = (props)=>{
  // delete div and duplicate dialogue
  return(
    <Row>
      <Col xs={12}>
        <div className="day_detail">
          <Row className="day_detail_title">
            <Col xs={12} md={10} mdOffset={1}>
              <span>{props.title}</span>
            </Col>
          </Row>
          <Row className="qna_separation">
            <Col className="day_detail_qna" xs={11} md={10} mdOffset={1}>
              <Row className="user_part">
                <Col xs={12}>
                  <span>This is user_part part in English</span>
                  <span>This is user_part part in Japanese</span>
                </Col>
              </Row>
              <Row>
                <Col xs={1} xsOffset={6} className="vertical_bar2" />
              </Row>
              <Row className="musio_part">
                <Col xs={12}>
                  <span>This is musio_part part in English</span>
                  <span>This is musio_part part in Japanese</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>


  );
};

export default Dialogue;
