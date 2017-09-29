import React from 'react';
import {Row, Col } from 'react-bootstrap';

//	Next update - categorize the patterns and show with variables

const PatternQuiz = ({dataSet}) => {

	let title_and_log = [];
	dataSet.log.map((pattern_quiz, i)=>(
		title_and_log.push(
			<tr className="pattern_title" key={"pattern_quiz_title_"+i}>
				<td colSpan={5}>
					<span className="title_1">Pattern: </span>
					<span className="title_2"> {pattern_quiz.pattern} / {pattern_quiz.pattern_jp}</span>
				</td>
			</tr>),
			pattern_quiz.log.map((quiz_log, j)=>(
				title_and_log.push(
					<tr className={'log_line '+(((j+1)%2===0)?'even_line':'odd_line')}
						key={"patter_quiz_log_"+i+'_'+j}>
						<td>{j+1}</td>
						<td>{quiz_log.question}</td>
						<td>{quiz_log.user_answer}</td>
						<td>{quiz_log.answer}</td>
						{((quiz_log.result===true)
							?<td>O</td>:<td style={{color:'red'}}>X</td>)}
					</tr>)
			))
	))

  return(
    <Row>
      <Col xs={12}>
        <div className="quiz_table">
          <Row>
            <Col xs={12}>
              <table className="pattern_quiz">
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Question</td>
                    <td>My Answer</td>
                    <td>正解(정답)</td>
                    <td>O/X</td>
                  </tr>
                </thead>
                <tbody>
									{title_and_log}
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
