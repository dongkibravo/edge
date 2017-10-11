import React from 'react';
import {Row, Col, Grid, Collapse, DropdownButton, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import commentAdmin from '../static/comment_admin.svg';
import commetEdit from '../static/comment_edit.svg';
import '../styles/css/support.forum.thread.css';

class ForumThread extends React.Component{
  constructor(){
    super();
    this.state={
      commentBox: false,
      comment: ''
    };
    this.goBackHandler = this.goBackHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  goBackHandler(){
    this.props.history.goBack();
  }

  handleChange(evt){
    this.setState({
      comment: evt.target.value
    });
    console.log(this.state.comment);
  }

  render(){
    return(
      <Grid className="forum-page">
        <Row className="thread-content">
          <Col xs={12} sm={10} smOffset={1}>
            <button id="goBack" onClick={this.goBackHandler}><span> All Threads</span></button>
            <Row className="title-row">
              <Col xs={12}>
                <div className="row-1">
                  <span className="title">타이틀</span>
                  <span className="category">
                    Category:
                    {/* loop category array here*/}
                    Software
                  </span>
                </div>
                <div className="row-2">
                  <span>user id</span>
                </div>
              </Col>
            </Row>

            <Row className="text-row">
              <Col xs={12}>
                <span>
                  the context of this thread comes in here\n
                  asdfasdvzxcvzsd asdfzxcv \n
                  sadfasdv
                </span>
              </Col>
            </Row>

            <button onClick={()=> this.setState({ commentBox: true })}>Reply</button>
            <Collapse in={this.state.commentBox}>
              <div className="test">
                <span>Comment</span>
                <textarea type="textarea" rows={4}
                  value={this.state.comment} onChange={this.handleChange}/>
                <div className="comment-btns">
                  <button className="comment-submit">Submit</button>
                  <button className="comment-cancel"
                    onClick={()=>this.setState({commentBox: false, comment:''})}>
                    Cancel
                  </button>
                </div>
              </div>
            </Collapse>
          </Col>
        </Row>

        <Row className="reply">
          <Col xs={12} sm={10} smOffset={1}>
            <Row className="title-row">
              <Col xs={12}>
                <span>Replies</span>
              </Col>
            </Row>
            {/* loop reply array in here */}

            <Row className="reply-content">
              <Col xs={12}>
                {/* regular user's reply version */}
                <Row className="reply-title">
                  <Col xs={12}>
                      <span className="author">comment author</span>
                      <span className="date">2017-09-92 commented time</span>
                  </Col>
                </Row>
                <Row className="reply-text comment-owner">
                  <Col xs={12}>
                    <span>comment text text text</span>
                    {/* if the comment is created by the current user */}

                    <DropdownButton title={<i className="glyphicon glyphicon-pencil" />} noCaret>
                      <MenuItem eventKey="1">Edit</MenuItem>
                      <MenuItem eventKey="2">Delete</MenuItem>
                    </DropdownButton>

                  </Col>
                </Row>
              </Col>
            </Row>  {/* border bottom dotted */}

            <Row className="reply-content">
              <Col xs={12}>
                {/* admin reply version */}
                <Row className="reply-title admin">
                  <Col xs={12}>
                      <span className="author">
                        <img src={commentAdmin} alt="comment-admin"/>
                        Musio support
                      </span>
                      <span className="date">2017-09-92 commented time</span>
                  </Col>
                </Row>
                <Row className="reply-text">
                  <Col xs={12}>
                    <span>comment text text text</span>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ForumThread;
