import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Pagination, Grid,
  DropdownButton, MenuItem } from 'react-bootstrap';

const spanStyle="hidden-md hidden-lg hidden-sm";


const Description =()=>{
  return(
    <Row className="title">
      <Col xs={12} className="text-center">
        <span className="main">
          Forum
        </span>
        <span className="sub">
          Edge에 관하여 자유롭게 질문하고 답하는 커뮤니티입니다.
        </span>
      </Col>
    </Row>
  );
};

const Category = (props) =>{
  return(
    <DropdownButton title="Category" id="dropdown-size-medium">
      <MenuItem eventKey="1">category 1</MenuItem>
      <MenuItem eventKey="2">category 2</MenuItem>
      <MenuItem eventKey="3">category 3</MenuItem>
    </DropdownButton>
  );
};

const ForumTable = (props) =>{
  let {forumList, currentPage, onClickHandler} = props;

  return(
    <Row className="forum-container">
      <Col xs={12} md={10} mdOffset={1}>
        <Category />
        <table className="forum-table">
          <thead>
            <tr>
              <td className="hidden-xs number">번호</td>
              <td className="title">제목</td>
              <td className="hidden-xs views">Views</td>
              <td className="hidden-xs replies">Replies</td>
              <td className="hidden-xs date">Date</td>
            </tr>
          </thead>
          <tbody>
            {forumList.map((forum, i)=>(
              <tr key={"forum_"+i} onClick={(evt)=>onClickHandler(forum.id, evt)} id={1}>
                <td className="hidden-xs">{forum.id}</td>
                <td className="title">
                  {forum.title}
                  <p className="description-box">
                    by {forum.author}
                    <span className={spanStyle}>Views 6</span>
                    <span className={spanStyle}>Replies 2</span>
                    <span className={spanStyle}><br />{forum.date}</span>
                  </p>
                </td>
                <td className="hidden-xs">6</td>
                <td className="hidden-xs">2</td>
                <td className="hidden-xs">{forum.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/forum/new-post" className="btn">New Thread</Link>
      </Col>
    </Row>
  );
};

const Paginator=(props)=>{
  let {currentPage, handleSelect, pageLength} = props;
  return(
    <Row className="paging text-center">
      <Col xs={12}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={pageLength}
          maxButtons={5}
          activePage={parseInt(currentPage,10)}
          onSelect={handleSelect} />
      </Col>
    </Row>
  );
};

// ************************************
// REFACTORING REQUIRED
// ***********************************

const ForumContainer=(props)=>{
  let {forumList, currentPage, forumLength} = props.state;
  let {handleSelect, onClickHandler} = props.handlers;
  return(
    <Grid className="forum-page">
      <Description />
      <ForumTable forumList={forumList} currentPage={currentPage}
        onClickHandler={onClickHandler} />
      <Paginator currentPage={currentPage} pageLength={forumLength}
        handleSelect={handleSelect} />
      <Row className="search text-center">
        <Col xs={12}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="search" />
            <button className="input-group-addon">
              <span className="glyphicon glyphicon-search"/>
            </button>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default ForumContainer;
