import React from 'react';
import {Row, Col} from 'react-bootstrap';

// VOCA QUIZ
const voca_quiz_data = {
	'type'	: 'Vocabulary Quiz',
	'date'	: '2017-09-27 18:30:00',
	'log'	:
	[{
		'question'		:	'사과',
		'answer'			:	'apple',
		'user_answer'	: 	'apple',
		'result'			:	true
	},{
		'question'		:	'에반',
		'answer'			:	'evan',
		'user_answer'	:	'james',
		'result'			:	false
	},{
		'question'		:	'에반',
		'answer'			:	'evan',
		'user_answer'	:	'james',
		'result'			:	false
	},{
		'question'		:	'에반',
		'answer'			:	'evan',
		'user_answer'	:	'james',
		'result'			:	false
	},{
		'question'		:	'에반',
		'answer'			:	'evan',
		'user_answer'	:	'james',
		'result'			:	false
	}]
};

const VocaQuiz = ({log}) => {
  return(
    <Row>
      <Col xs={12}>
        <div className="quiz_table">
          <Row>
            <Col xs={12}>
              <table className="voca_quiz">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Voca</th>
                    <th>My Answer</th>
                    <th>正解(정답)</th>
                    <th>O/X</th>
                  </tr>
                </thead>
                <tbody>
                  {log.map((data, index)=>(
                    <tr key={index}>
                      <td>{index}</td>
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
