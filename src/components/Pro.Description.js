import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Description = props =>{
  let {type} = props;
  let main = '';
  let sub = '';
  if (type === "Tutor_1"){
    main = <span className="main">Tutor에게 질문하기</span>;
    sub =
    <div>
      <span className="sub">
        뮤지오에게 궁금한 점을 물어보세요. 여러분의 Tutor가 궁금중을 해결해 줄 것입니다.
      </span>
      <span className="sub">아래 빈칸에 질문 내용을 입력하거나, 버튼을 눌러 음성을 녹음할 수 있습니다.</span>
    </div>;
  }else if(type==="Tutor_2"){
    main = <span className="main">질문 리스트</span>;
    sub = <span className="sub">지난 질문에 대한 Tutor의 답변을 아래에서 확인할 수 있습니다.</span>;
  }else if(type==="WrongNotes"){
    main = <span className="main">Wrong Answer Notes</span>;
    sub = <span className="sub">Wrong Answer Notes를 통해 Day 별 퀴즈 활동에서 틀린 내용들을 볼 수 있습니다.</span>;
  }else if(type==="Analysis"){
    main = <span className="main">Study Analysis</span>;
    sub = <span className="sub">Study Analysis에서는 공부한 데이터의 점수를 그래프로 확인할 수 있음</span>;
  }else if(type==="Training"){
    main = <span className="main">Personal Training</span>;
    sub = <span className="sub">Personal weakness를 분석하고 트레이닝 하는 세션을 자동으로 생성해줌</span>;
  }

  return(
      <Row className="description">
        <Col xs={12}>
          {main}
          {sub}
        </Col>
      </Row>
  );
};

export default Description;
