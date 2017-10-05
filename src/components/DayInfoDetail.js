import React from 'react';
// import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Dialogue from './Dialogue';
import Pattern from './Pattern';
import Vocabulary from './Vocabulary';
import VocaQuiz from './VocaQuiz';
import PatternQuiz from './PatternQuiz';
import DialogueQuiz from './DialogueQuiz';
import '../styles/css/dashboard2.css';

function detailType(data_type, test_type, set){
  let set_type = null;

  if(test_type==='Practice' || test_type==='Training'){
    if(data_type==='Dialogue'){
      set_type = <Dialogue dataSet={set} />;
    }else if(data_type==='Pattern'){
      set_type = <Pattern dataSet={set} />;
    }else if(data_type==='Vocabulary'){
      set_type = <Vocabulary dataSet={set} />;
    }
  }else if(test_type==='Quiz' || test_type==='Test'){
    if(data_type==='Dialogue'){
      set_type = <DialogueQuiz dataSet={set} />;
    }else if(data_type==='Pattern'){
      set_type = <PatternQuiz dataSet={set} />;
    }else if(data_type==='Vocabulary'){
      set_type = <VocaQuiz dataSet={set} />;
    }
  }
  return set_type;
}

const DayInfoDetail = (props)=> {
  let {content} = props;
  return(
    <Row className="detail_table_background">
      <Col xs={12} md={10} mdOffset={1}>
        <div className="detail_table">
          <Row className="detail_title">
            <Col xs={12}>
              <span>{content.data_type} {content.test_type}</span>
              {content.date?(<span className="title_date">{' - '+content.date}</span>):null}
            </Col>
          </Row>
          {content.data?
            content.data.map((data, index)=>(
              <div className="detail_content" key={"detail_content_"+index}>
                {detailType(content.data_type, content.test_type, data)}
              </div>
            )):
            <div className="detail_content text-center">
              {content.test_type} has not been taken yet.
              {content.test_type}을 진행하고 그 결과를 아래에서 확인하세요.
            </div>
          }
        </div>
      </Col>
    </Row>
  );
};

DayInfoDetail.propTypes={

};

export default DayInfoDetail;
