import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';


export const ProNav = (props) => {
  let {type} = props;
  return(
    <div>
      <Row className={"title "+type}>
        <Col xs={12}>
          <span>{type}</span>
        </Col>
      </Row>
      {type==="AI"?
        <Row className="pro_links">
          <Col xs={12}>
            <Link to="/pro/personal-training" className="side">
              Personal Training
            </Link>
            <Link to="/pro/wrong-notes" className="center">
              Wrong Answer Notes
            </Link>
            <Link to="/pro/analysis" className="side">
              Study Analysis
            </Link>
          </Col>
        </Row>:
        null
      }
    </div>
  );
};

export default ProNav;
