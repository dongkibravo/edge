import React from 'react';
// import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

function createTable(data){
  return(
    data.map((dialogue, index)=>(
      <Row className="qna_separation" key={index}>
        <Col className="day_detail_qna" xs={11} md={10} mdOffset={1}>
          <Row className="user_part">
            <Col xs={12}>
              <span>{dialogue.part_a_en}</span>
              <span>{dialogue.part_a_jp}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={1} xsOffset={6} className="vertical_bar2" />
          </Row>
          <Row className="musio_part">
            <Col xs={12}>
              <span>{dialogue.part_b_en}</span>
              <span>{dialogue.part_b_jp}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
  );
}

const Dialogue = (props)=>{
  let {dataSet} = props;
  return(
    <Row>
      <Col xs={12}>
        <div className="day_detail">
          <Row className="day_detail_title">
            <Col xs={12} md={10} mdOffset={1}>
              <span>{dataSet.title}</span>
            </Col>
          </Row>
          {createTable(dataSet.set)}
        </div>
      </Col>
    </Row>

  );
};

export default Dialogue;
