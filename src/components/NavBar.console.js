import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, DropdownButton, MenuItem } from 'react-bootstrap';
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
                <Link to="/home">
                  <input className="brand-img" type="image" src={edgeLogo} alt="EdgeLogo"/>
                </Link>
              </div>
            </Col>
            <Col xs={4} xsOffset={1} style={{'marginTop':'2px'}}>
              <div className="nav_menu">
                <Link to="/dashboard" className="btn btn-default">Dashboard</Link>
                <DropdownButton title="Pro" id="bg-nested-dropdown" noCaret>
                  <MenuItem eventKey="1" href="/pro">AI</MenuItem>
                  <MenuItem eventKey="2" href="/pro/tutor">Tutor</MenuItem>
                  {/* <MenuItem eventKey="3">Online-Eng</MenuItem> */}
                </DropdownButton>
              </div>
            </Col>
            <Col xs={3} xsOffset={1} style={{'marginTop':'5px'}}>
              <div className="nav_right">
                <button className="btn-upgrade">Upgrade to Pro</button>
                <div className="dropdown_section">
                  <div className="dropdown_contents">
                    <DropdownButton id="contents_dropdown" noCaret
                      title={<img src={hawaii_logo} alt="Hawaii_Logo" />}>
                      <MenuItem disabled>학습 중</MenuItem>
                      <MenuItem eventKey="4" className="selected" disabled>
                        <Image src={hawaii_logo} /><span>Hawaii</span>
                      </MenuItem>
                      <MenuItem eventKey="5">
                        <Image src={olympic_logo} /><span>Olympic</span>
                      </MenuItem>
                    </DropdownButton>
                  </div>
                  <div className="dropdown_contents">
                    <DropdownButton id="setting_dropdown" noCaret
                      title={<img src={setting_icon} alt="setting"/>}>
                      <MenuItem disabled>Dong Park</MenuItem>
                      <MenuItem eventKey="6" href="/profile">My Profile</MenuItem>
                      <MenuItem eventKey="7" href='/help'>Help</MenuItem>
                      <MenuItem eventKey="8" href='/forum'>Forum</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey="9">Log Out</MenuItem>
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
