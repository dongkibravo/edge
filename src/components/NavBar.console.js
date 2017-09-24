import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../styles/css/Nav.console.css';
import edgeLogo from '../static/edgelogo.png';
import hawaii_logo from '../static/Theme_hawaii.png';
import olympic_logo from '../static/Theme_olympic.png';
import setting_icon from '../static/Setting.png';

class NavBar extends React.Component{
  render(){
    return(
      <section id="header">
        <div className="container">
          <Row>
            <Col xs={2}>
              <div className="nav_brand">
                <Image className="brand-img" src={edgeLogo}/>
              </div>
            </Col>
            <Col xs={4} xsOffset={1}>
              <div className="nav_menu">
                <Button>Dashboard</Button>
                <DropdownButton title="Pro" id="bg-nested-dropdown" noCaret>
                  <MenuItem eventKey="1">AI</MenuItem>
                  <MenuItem eventKey="2">Tutor</MenuItem>
                  <MenuItem eventKey="3">Online-Eng</MenuItem>
                </DropdownButton>
              </div>
            </Col>
            <Col xs={3} xsOffset={1}>
              <div className="nav_right">
                <button className="btn-upgrade">Upgrade to Pro</button>
                <div className="dropdown_section">
                  <div className="dropdown_contents">
                    <DropdownButton noCaret title={<img src={hawaii_logo}></img>}>
                      <MenuItem disabled>학습 중</MenuItem>
                      <MenuItem eventKey="4"><Image src={hawaii_logo} /></MenuItem>
                      <MenuItem eventKey="5"><Image src={olympic_logo} /></MenuItem>
                    </DropdownButton>
                  </div>
                  <div className="dropdown_contents">
                    <DropdownButton noCaret title={<img src={setting_icon}/>}>
                      <MenuItem disabled>Dong Park</MenuItem>
                      <MenuItem eventKey="6">My Profile</MenuItem>
                      <MenuItem eventKey="7">Help/Community</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey="8">Log Out</MenuItem>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default NavBar;
