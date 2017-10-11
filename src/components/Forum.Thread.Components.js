import React from 'react';
import {Row, Col, Collapse,
  DropdownButton, MenuItem} from 'react-bootstrap';
import commentAdmin from '../static/comment_admin.svg';

export const Thread = props =>{
  let {handlers, state} = props;
  return(
    <Row className="thread-content">
      <Col xs={12} sm={10} smOffset={1}>
        <button id="goBack" onClick={handlers.goBackHandler}>
          <span> All Threads</span>
        </button>
        <Row className="title-row">
          <Col xs={12}>
            <div className="row-1">
              <span className="title">{state.thread.title}</span>
              <span className="category">
                Category: {state.thread.category}
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

        <button onClick={handlers.onReplyBtnClick}>Reply</button>
        <Collapse in={state.commentBox}>
          <div className="test">
            <span>Comment</span>
            <textarea type="textarea" rows={4}
              value={state.comment} onChange={handlers.handleChange}/>
            <div className="comment-btns">
              <button className="comment-submit">Submit</button>
              <button className="comment-cancel"
                onClick={handlers.onReplyCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </Collapse>
      </Col>
    </Row>
  );
};


function partA(comment){
  let {id, contents, author_id, author, date, is_admin} = comment;

  return(
    <Row className={(is_admin?"admin":null)+" reply-title"}>
      <Col xs={12}>
        {is_admin?
          <span className="author">
          <img src={commentAdmin} alt="comment-admin"/>
          Musio Support</span>:
          <span className="author">{author}</span>
        }
        <span className="date">{date}</span>
      </Col>
    </Row>
  );
}


function partB(id, data){
  let {contents, handlers, editArray} = data;
  let {onCommentEditChange, onEditCancel,
    onEditClick, onDeleteClick} = handlers;
    console.log(id);
    console.log(editArray.status[id]);
  return(
    <Row className="reply-text comment-owner">
      <Col xs={12}>
        {editArray.status[id]?
          <div className="comment-content">
            <span>{contents}</span>
          </div>:
          <div className="comment-edit">
            <textarea type="textarea" rows={4} value={editArray.comment[id]}
              onChange={(event)=>onCommentEditChange(id, event)} />
            <div className="comment-btns">
              <button className="comment-submit">Submit</button>
              <button className="comment-cancel"
                onClick={(event)=>onEditCancel(id, event)}>
                Cancel
              </button>
            </div>
          </div>
        }
        <DropdownButton title={<i className="glyphicon glyphicon-pencil" />}
          noCaret id="comment_dropdown">
          <MenuItem eventKey="1"
            onClick={(evt)=>onEditClick(id, contents, evt)}>
            Edit
          </MenuItem>
          <MenuItem eventKey="2" onClick={()=>onDeleteClick(id)}>
            Delete
          </MenuItem>
        </DropdownButton>
      </Col>
    </Row>
  );
}

function partC(contents){
  return(
    <Row className="reply-text">
      <Col xs={12}>
        <div className="comment-content">
          <span>{contents}</span>
        </div>
      </Col>
    </Row>
  );
}

export const CommentSection=props=>{
  let {handlers, state, userId} = props;
  let {comments} = state.thread;

  console.log(state);

  return(
    <Row className="reply">
      <Col xs={12} sm={10} smOffset={1}>
        <Row className="title-row">
          <Col xs={12}>
            <span>Replies</span>
          </Col>
        </Row>
        {comments.map((comment,i)=>
          <Row className="reply-content" key={"comment_"+i}>
            <Col xs={12}>
              {partA(comment)}
              {comment.author_id===userId?
                partB(comment.id,
                  {contents:comment.contents, editArray:state.editArray,handlers:handlers}):
                partC(comment.contents)
              }
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};
