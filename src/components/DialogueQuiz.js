import React from 'react';
import {Row, Col} from 'react-bootstrap';

const dialogue_quiz_data=
{
	'type'	:	'Dialogue Quiz',
	'date'	: 	'2017-09-27',		// purpose to check if this quiz has been taken or not (for all three quiz)
 	'data'	:
  [{
		'topic'	:	'asking for help',
		'date'	:	'2017-09-27 20:00:00',
		'log'		:
		[{
			'question'		:	'Welcome aboard',
			'question_jp'	:	'こんにちは。',
			'answer'		:	'Hi. Can you help me find my seat?',
			'answer_jp'		:	'座席を探するのを手伝ってもらえますか?',
			'user'			:	'Find my fucking seat',
			'result'		:	false
		},{
			'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
			'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
			'answer'		:	'Thanks. can you help me with this bag?',
			'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
			'user'			:	'My FUCKING bag!!!!',
			'result'		:	true
		},{
			'question'		:	'Sure. Would you like to put in the overhead compartment?',
			'question_jp'	:	'はい。上の棚へ入れますか？',
			'answer'		:	'Yes, please.',
			'answer_jp'		:	'はい、お願いします。',
			'user'			:	'fuck no.',
			'result'		:	false
		},{
			'question'		:	'Here. Let me know if you need to take it out.' ,
			'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
			'answer'		:	'Thank you so much?',
			'answer_jp'		:	'ありがとうございます。',
			'user'			:	'oh my dear fucking god',
			'result'		:	true
		}]
	},{
		'topic'	:	'changing seats',
		'date'	:	'2017-09-28 20:00:00',
		'log'		:
		[{
			'question'		:	'Welcome aboard',
			'question_jp'	:	'こんにちは。',
			'answer'		:	'Hi. Can you help me find my seat?',
			'answer_jp'		:	'座席を探するのを手伝ってもらえますか?',
			'user'			:	'Find my fucking seat',
			'result'		:	false
		},{
			'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
			'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
			'answer'		:	'Thanks. can you help me with this bag?',
			'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
			'user'			:	'My FUCKING bag!!!!',
			'result'		:	true
		},{
			'question'		:	'Sure. Would you like to put in the overhead compartment?',
			'question_jp'	:	'はい。上の棚へ入れますか？',
			'answer'		:	'Yes, please.',
			'answer_jp'		:	'はい、お願いします。',
			'user'			:	'fuck no.',
			'result'		:	false
		},{
			'question'		:	'Here. Let me know if you need to take it out.' ,
			'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
			'answer'		:	'Thank you so much?',
			'answer_jp'		:	'ありがとうございます。',
			'user'			:	'oh my dear fucking god',
			'result'		:	true
		}]
	}]
};

const DialogueQuiz = ({quizData}) => {
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
                    <th>Topic/Question</th>
                    <th>My Answer</th>
                    <th>正解(정답)</th>
                    <th>O/X</th>
                  </tr>
                </thead>
                <tbody>
                  {quizData.map((data, index)=>(
                    <tr key={index}>
                      <td> + </td>
                      <td colSpan={4}>{data.topic} - {data.date}</td>
                    </tr>
                    {data.log.map((log, index2)=>(
                      <tr key={index2}>
                        <td>{index2}</td>
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

export defualt DialogueQuiz;
