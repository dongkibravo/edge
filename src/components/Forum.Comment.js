import React from 'react';
import {Row, Col} from 'react-boostrap';


export const UserComment = props => {
  let {handlers, comment, statusArray, commentArray, userId} = props;

  let {onCommentEditChange, onEditCancel,
    onEditClick, onDeleteClick} = handlers;

  let {id, contents, author_id, author, date, is_admin} = comment;
  return(
    <Row className="reply-content">
      <Col xs={12}>
        {/* regular user's reply version */}
        <Row className={(comment.is_admin?"admin":null)+" reply-title"}>
          <Col xs={12}>
            // 여기서부터 다시하기 - 이부분에서 어드민 인지
            {is_admin?
              <span className="author">
              <img src={commentAdmin} alt="comment-admin"/>
              Musio Support</span>:
              <span className="author">{author}</span>
            }
            <span className="date">{date}</span>
          </Col>
        </Row>

        {comment.author_id===userId?
          <Row className="reply-text comment-owner">
            <Col xs={12}>
              {statusArray.id?
                <div className="comment-content">
                  <span>{contents}</span>
                </div>:
                <div className="comment-edit">
                  <textarea type="textarea" rows={4} value={commentArray.id}
                    onChange={(e)=>onCommentEditChange(e)} />
                  <div className="comment-btns">
                    <button className="comment-submit">Submit</button>
                    <button className="comment-cancel"
                      onClick={(e)=>onEditCancel(e)}>
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
          </Row> (counter++):
          null
        }

      </Col>
    </Row>
  );
};
