import React from 'react';
import { Grid, Col, Row, Form} from 'react-bootstrap';

const musio_img = require('./musio_logo_favicon.png');

const TopNav = <div className="login_nav">
  <div className="content">
    <image src={musio_img} />
    <span>MUSIO VITA</span>
  </div>
</div>;

class LoginPage extends React.Component{

  render(){
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <TopNav/>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <Form>

            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}