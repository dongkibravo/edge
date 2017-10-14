import React from 'react';
import {Row, Col} from 'react-bootstrap';

export const Vocabulary = ({data}) => {
  return(
    <table>
      <thead>
        <tr>
          <td>No.</td>
          <td>Question</td>
          <td>Answer</td>
          <td>Your Answer</td>
          <td>발음점수</td>
        </tr>
      </thead>
      <tbody>
        {data.map((qna, index)=>(
          <tr key={"quiz_log_"+index}>
            <td className="index">{index+1}</td>
            <td className="question">{qna.question}</td>
            <td className="answer">{qna.answer}</td>
            <td className="user_answer">{qna.user_answer}</td>
            <td className="score">{qna.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Pattern = ({data}) =>{
  return(
    <div>
      {data.map((pattern, i)=>(
        <Row key={"quiz_"+i}>
          <Col xs={12}>
            <Row className="note_type">
              <Col xs={12}>
                <span className="title_1">Pattern: </span>
                <span className="title_2">{pattern.pattern} / {pattern.pattern_jp}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <table>
                  <thead>
                    <tr>
                      <td>No.</td>
                      <td>Question</td>
                      <td>Answer</td>
                      <td>Your Answer</td>
                      <td>발음점수</td>
                    </tr>
                  </thead>
                  <tbody>
                    {pattern.log.map((qna, j)=>(
                      <tr key={"quiz_log_"+i+"_"+j}>
                        <td className="index">{j+1}</td>
                        <td className="question">{qna.question}</td>
                        <td className="answer">{qna.answer}</td>
                        <td className="user_answer">{qna.user_answer}</td>
                        <td className="score">{qna.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export const Dialogue = ({data}) =>{
  return(
    <div>
      {data.map((dialogue, i)=>(
        <Row key={"quiz_"+i}>
          <Col xs={12}>
            <Row className="note_type">
              <Col xs={12}>
                <span className="title_1">Topic: </span>
                <span className="title_2">{dialogue.topic}</span>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <table>
                  <thead>
                    <tr>
                      <td>No.</td>
                      <td>Question</td>
                      <td>Answer</td>
                      <td>Your Answer</td>
                      <td>발음점수</td>
                    </tr>
                  </thead>
                  <tbody>
                    {dialogue.log.map((qna, j)=>(
                      <tr key={"quiz_log_"+i+"_"+j}>
                        <td className="index">{j+1}</td>
                        <td className="question">{qna.question}</td>
                        <td className="answer">{qna.answer}</td>
                        <td className="user_answer">{qna.user_answer}</td>
                        <td className="score">{qna.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </div>
  );
};
