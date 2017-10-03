import React from 'react';
import {Row, Col, DropdownButton, MenuItem } from 'react-bootstrap';


function clickclick(){
	let id = 'a_'+this
	document.getElementById(id).className = 'active';
	console.log(
		"click!  "
	);
}


const DialogueQuiz = ({dataSet}) => {
	let topic_and_log = [];
	dataSet.log.map((dialogue_quiz, i)=>(
		topic_and_log.push(
			<tr className="dialogue_topic" key={"dialogue_quiz_topic_"+i}>
				<td colSpan={5}>
					<span className="title_1">Topic: </span>
					<span className="title_2"> {dialogue_quiz.topic}</span>
				</td>
			</tr>),
			dialogue_quiz.log.map((quiz_log, j)=>(
				topic_and_log.push(
					<tr className={'log_line '+(((j+1)%2===0)?'even_line':'odd_line')}
						key={"dialogue_quiz_log_"+i+'_'+j}>
						<td className="index">{j+1}</td>
						<td className="question">
							{quiz_log.question}</td>
						<td className="user_answer">
							{quiz_log.user_answer}</td>
						<td className="answer">
							<div className="dropdown">
							  <a className="aaa" id={'a_'+j} onClick={clickclick.bind(j)}>답이다</a>
							  <div className="dropdown-content">
							    <p>{quiz_log.answer}</p>
							  </div>
							</div>
						</td>
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
              <table className="dialogue_quiz">
                <thead>
                  <tr>
                    <td className="index">No.</td>
                    <td className="question">Question</td>
                    <td className="user_answer">My Answer</td>
                    <td className="answer">正解(정답)</td>
                    <td className="correct">O/X</td>
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
