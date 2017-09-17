import React from 'react';
import Header from './Header';
import { Grid, Col, Row} from 'react-bootstrap';

export const Root = (props) => {
  return(
    <Grid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={10} xsOffset={1}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  )
};
