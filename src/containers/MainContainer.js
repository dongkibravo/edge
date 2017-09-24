import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Row, Col, Button } from 'react-bootstrap';
import '../styles/css/NavBar1.css';
import '../styles/css/mainpage.css';
import Logo from '../static/edgelogo.png';
import hawaii from '../static/Hawaii.jpg';
import olympics from '../static/Olympic.jpg';
import Footer from '../components/Footer';

class Main extends React.Component{
  render(){
    const hawaii_background = {
      backgroundImage: 'url('+hawaii+')'
    };
    const olympic_background = {
      backgroundImage: 'url('+olympics+')'
    };
    return(
      <Grid className="main_continaer">
        <div className="top_nav">
          <div className="nav_header">
            <Image className=" brand-img logo_img" src={Logo} />
          </div>
        </div>
        <div className="content_container">
          <Row className="hawaii" style={hawaii_background}>
            <Col xs={12}>
              <div className="content">
                <Row>
                  <Col xs={12}>
                    <span> HAWAII </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Link className="btn btn-default" to={'/dashboard'}>Let's Start</Link>
                  </Col>
                </Row>

              </div>
            </Col>
          </Row>
          <Row className="olympic" style={olympic_background}>
            <Col xs={12}>
              <div className="content">
                <span> OLYMPIC </span>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </Grid>
    );
  }
}

export default Main;
