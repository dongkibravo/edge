import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

class Forum extends React.Component{

  render(){
    return(
      <Grid className="setting-page">
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
        <Row>
          <Col xs={2}>
            <div><span>hohoho</span></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <table>
              <thead>
                <tr>
                  <td>번호</td>
                  <td>제목</td>
                  <td>Views</td>
                  <td>Replies</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>뮤무유유유유무무뮤뮤뮤뮤뮤뮤</td>
                  <td>10</td>
                  <td>1</td>
                  <td>2015-11-11</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    뮤무유유유유무무뮤뮤뮤뮤뮤뮤
                    <p>halohalohalo
                      <span className="hidden-md hidden-lg hidden-sm">ahshshsh</span>
                      <span className="hidden-md hidden-lg hidden-sm">ahshshsh</span>
                      <span className="hidden-md hidden-lg hidden-sm">ahshshsh</span>
                    </p>
                  </td>
                  <td>10</td>
                  <td>1</td>
                  <td>2015-11-11</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>뮤무유유유유무무뮤뮤뮤뮤뮤뮤</td>
                  <td>10</td>
                  <td>1</td>
                  <td>2015-11-11</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>뮤무유유유유무무뮤뮤뮤뮤뮤뮤</td>
                  <td>10</td>
                  <td>1</td>
                  <td>2015-11-11</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Forum;
