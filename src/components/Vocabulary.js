import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

const Vocabulary = (props) =>{
  return(
    <Row>
      <Col xs={12}>
        <div className="vocab_prac">
          <Row>
            <Col xs={12}>
              <table>
                <thead>
                  <tr>
                    <th>English</th>
                    <th>Japanese</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Apple</td>
                    <td>사과</td>
                  </tr>
                  <tr>
                    <td>Tree</td>
                    <td>나무</td>
                  </tr>
                  <tr>
                    <td>Fan</td>
                    <td>선풍기</td>
                  </tr>
                  <tr>
                    <td>Airplane</td>
                    <td>비행기</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

Vocabulary.PropTypes={

};

export default Vocabulary;
