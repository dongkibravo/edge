import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../styles/css/profile.css';

const Profile = (props) =>{
  return(
    <div>
      <Row className="title_row">
        <Col xs={12} className="text-center">
          <span>My Account</span>
        </Col>
      </Row>
      <Row className="text_row">
        <Col xs={12} md={10} mdOffset={1} className="text-center">
          <span className="profile_line1">Musio Edge 회원정보 관리는 <Link to="https://www.themusio.com">themusio.com</Link> 홈페이지에서 통합관리 하고 있습니다.</span>
          <span className="profile_line2">회원정보 및 비밀번호 수정을 원하시면 아래 링크를 클릭하시기 바랍니다.</span>
          <div>
            <a href="https://themusio.com/mypage/info" className="profile_link btn">themusio.com 으로 이동</a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
