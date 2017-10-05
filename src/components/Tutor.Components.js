import React from 'react';
import {Row, Col, Image, FormGroup, FormControl} from 'react-bootstrap';
import complete from '../static/complete.svg';

const placeHolder = "질문 내용을 입력하고 등록 버튼을 누르세요.";

export const QuestionForm = props =>{

  return(
    <Row className="question-form">
      <Col xs={12} md={10} mdOffset={1}>
        <form>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder={placeHolder} />
          </FormGroup>
          <button type="submit">등록</button>
        </form>
      </Col>
    </Row>
  );
};

export const Divider=(
  <Row className="divider">
    <Col xs={12} md={10} mdOffset={1}></Col>
  </Row>
);

export const QuestionList = (props)=>{
  let {questionList, status, show} = props;
  return(
    <Row className="tutorQA">
      <Col xs={12} md={10} mdOffset={1}>
        <div className="question-table text-left">
          {questionList.map((question, i)=>(
            <div key={'question_'+i}
              className={"dropdown-container "+(status[i]?"show":"")}>
              <div className={"dropdown-display "+(status[i]?"clicked":"")}
                onClick={(e)=>show(i,e)} >
                {question.answer?
                  <Image src={complete} circle />:<Image src={complete} />
                }
                <span>{question.date}의 질문</span>
                <span>{question.question}</span>
              </div>
              <div className="dropdown-list"
                style={status[i]?{visibility:'visible'}:{visibility:'hidden'}}>
                <div className="tutor-answer">
                  <div>
                    <Image src={complete}/>
                    {question.answer?
                      <span className="answered">A. {question.answer}</span>:
                      <span className="unanswered">아직 튜터의 답변이 도착하지 않았습니다.</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};
