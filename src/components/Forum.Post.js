import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

const Description =()=>{
  return(
    <Row className="title">
      <Col xs={12} className="text-center">
        <span className="main">
          New thread
        </span>
        <span className="sub">
          Enter the content and post it to the community.
        </span>
      </Col>
    </Row>
  );
};

const NewPost = props =>{
  return(
    <Grid className="setting-page">
      <Description />
      <Row className="post-container">
        <Col xs={12} sm={8} smOffset={2}>
          <form>
            <input className="" type="text" placeholder="제목" />
            <textarea type="textarea" placeholder="내용" />
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default NewPost;
