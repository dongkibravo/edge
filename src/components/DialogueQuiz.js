import React from 'react';
import {Row, Col} from 'react-bootstrap';

const DialogueQuiz = ({dataSet}) => {

	let topic_and_log = [];
	dataSet.log.map((dialogue_quiz, i)=>(
		topic_and_log.push(
			<tr className="dialogue_topic" key={"dialogue_quiz_topic_"+i}>
				<td colSpan={5}>
					Topic : {dialogue_quiz.topic}
				</td>
			</tr>),
			dialogue_quiz.log.map((quiz_log, j)=>(
				topic_and_log.push(
					<tr className={(((j+1)%2==0)?'even_line':'odd_line')}
						key={"dialogue_quiz_log_"+i+'_'+j}>
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
              <table className="dialogue_quiz">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Question</th>
                    <th>My Answer</th>
                    <th>正解(정답)</th>
                    <th>O/X</th>
                  </tr>
                </thead>
                <tbody>
									{topic_and_log}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
};

export default DialogueQuiz;
