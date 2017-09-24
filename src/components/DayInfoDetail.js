import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Dialogue from './Dialogue';
import Pattern from './Pattern';
import Vocabulary from './Vocabulary';


const DayInfoDetail = (props)=>{

  let detail_type=null;
  if(props.get ==="Dialogue"){
    detail_type=<Dialogue title={props.title}/>;
  }else if (props.get==="Pattern") {
    detail_type=<Pattern title={props.title}/>;
  }else if (props.get==="Vocabulary"){
    detail_type=<Vocabulary />;
  }

  return(
    <Row className="detail_table_background">
      <Col xs={12} md={10} mdOffset={1}>
        <div className="detail_table">
          <Row className="detail_title">
            <Col xs={12}>
              <span>{props.type}</span>
            </Col>
          </Row>
          <div className="detail_content">
            {detail_type}
          </div>
        </div>
      </Col>
    </Row>
  );
};

DayInfoDetail.propTypes={

};

export default DayInfoDetail;
