import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Vocabulary = ({dataSet}) =>{
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
                  {dataSet.set.map((vocab, i)=>(
                    <tr key={"voca_prac_"+i}>
                      <td>{vocab.vocab_en}</td>
                      <td>{vocab.vocab_jp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};


export default Vocabulary;
