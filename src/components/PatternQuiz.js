import React from 'react';
import {Row, Col} from 'react-bootstrap';

//	Next update - categorize the patterns and show with variables

const PatternQuiz = ({dataSet}) => {

	let title_and_log = [];
	dataSet.log.map((pattern_quiz, i)=>(
		title_and_log.push(
			<tr className="pattern_title" key={"pattern_quiz_title_"+i}>
				<td colSpan={5}>
					Pattern : {pattern_quiz.pattern} / {pattern_quiz.pattern_jp}
				</td>
			</tr>),
			pattern_quiz.log.map((quiz_log, j)=>(
				title_and_log.push(
					<tr className={(((j+1)%2==0)?'even_line':'odd_line')}
						key={"patter_quiz_log_"+i+'_'+j}>
						<td>{j+1}</td>
						<td>{quiz_log.question}</td>
						<td>{quiz_log.user_answer}</td>
						<td>{quiz_log.answer}</td>
						<td>{((quiz_log.result===true)?'O':'X')}</td>
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
