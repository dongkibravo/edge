import React from 'react';
import {Row, Col} from 'react-bootstrap';

//	Next update - categorize the patterns and show with variables

const pattern_quiz_data={
	'type'	:	'Pattern Quiz',
	'date'	:	'2017-09-27 20:00:00',
	'data'	:
  [{
		'pattern'		: 'is there~',
		'pattern_jp'	: '그곳에 ~ ',
		'log':[
		{
			'variable'		: 'a bathroom',
			'question'		: '저기 화장실 있나요?',
			'answer'		  : 'is there a bathroom',
			'user_answer'	: 'is there a bathroom',
			'result'		  : true
		},
		{
			'variable'		: 'my phone',
			'question'		: '그곳에 나의 폰이 있나요?',
			'answer'		  : 'is there my phone',
			'user_answer'	: 'is there phone',
			'result'		  : true		// 만약 답을 틀렸다하고 유사값을 높게 (최대한 신빙성있는 값) 줄 수 있다면 much better
		}]
	},{
		'pattern'		: 'may i see your~',
		'pattern_jp'	: '제가 ~ 을 봐도 될까요?',
		'log':[
		{
			'variable'		: 'a bathroom',
			'question'		: '저기 화장실 있나요?',
			'answer'		  : 'is there a bathroom',
			'user_answer'	: 'is there a bathroom',
			'result'		  : true
		},
		{
			'variable'		: 'my phone',
			'question'		: '그곳에 나의 폰이 있나요?',
			'answer'		  : 'is there my phone',
			'user_answer'	: 'is there phone',
			'result'		  : true		// 만약 답을 틀렸다하고 유사값을 높게 (최대한 신빙성있는 값) 줄 수 있다면 much better
		}]
	}]
};

const PatternQuiz = ({quizData}) => {
  return(
    <Row>
      <Col xs={12}>
        <div className="quiz_table">
          <Row>
            <Col xs={12}>
              <table className="pattern_quiz">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Pattern/Question</th>
                    <th>My Answer</th>
                    <th>正解(정답)</th>
                    <th>O/X</th>
                  </tr>
                </thead>
                <tbody>
                  {quizData.map((data, index)=>(
                    <tr key={index}></tr>
                      <td>{index}</td>
											<td colSpan={4}>{data.pattern} / {data.pattern_jp}</td>
                    </tr>
                    {data.log.map((log, index2)=>(
                      <tr key={index2}>
                        <td>empty</td>
                        <td>{log.question}</td>
                        <td>{log.user_answer}</td>
                        <td>{log.answer}</td>
                        <td>{((log.result===true)?'O':'X')}</td>
                      </tr>
                    ))}
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
};

export default PatternQuiz;
