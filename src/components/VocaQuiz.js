import React from 'react';
import {Row, Col} from 'react-bootstrap';


const VocaQuiz = ({dataSet}) => {
  return(
    <Row>
      <Col xs={12}>
        <div className="quiz_table">
          <Row>
            <Col xs={12}>
              <table className="voca_quiz">
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Voca</td>
                    <td>My Answer</td>
                    <td>正解(정답)</td>
                    <td>O/X</td>
                  </tr>
                </thead>
                <tbody>
                  {dataSet.log.map((data, index)=>(
                    <tr className={(((index+1)%2===0)?'even_line':'odd_line')} key={index}>
                      <td>{index+1}</td>
											<td>{data.question}</td>
											<td>{data.user_answer}</td>
											<td>{data.answer}</td>
											<td>{((data.result===true)?'O':'X')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default VocaQuiz;
