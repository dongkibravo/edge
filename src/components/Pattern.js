import React from 'react';
import {Row, Col} from 'react-bootstrap';

function createTable(data){
  return(
    data.map((pattern, index)=>(
      <Row className="qna_separation" key={"pattern_"+index}>
        <Col className="day_detail_qna" xs={11} md={10} mdOffset={1}>
          <Row className="pattern">
            <Col xs={12}>
              <span className="pattern_eng">{pattern.pattern_en}</span>
              <span className="pattern_jp">{pattern.pattern_jp}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    ))
  );
}

const Pattern = (props)=>{
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

export default Pattern;
