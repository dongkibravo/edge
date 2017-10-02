import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';


export const ProNav = (props) => {
  return(
    <div>
      <Row className="title">
        <Col xs={12}>
          <span>AI</span>
        </Col>
      </Row>
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
      </Row>
    </div>
  );
};

export default ProNav;
