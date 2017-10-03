import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Dialogue from './Dialogue';
import Pattern from './Pattern';
import Vocabulary from './Vocabulary';
import VocaQuiz from './VocaQuiz';
import PatternQuiz from './PatternQuiz';
import DialogueQuiz from './DialogueQuiz';

function detailType(type, set){
  let set_type = null;
  if(type === "Dialogue Practice"){
    set_type = <Dialogue dataSet={set} />
  }else if (type === "Pattern Practice"){
    set_type = <Pattern dataSet={set} />
  }else if (type === "Vocabulary Practice"){
    set_type = <Vocabulary dataSet={set} />
  }else if (type === "Vocabulary Quiz"){
    set_type = <VocaQuiz dataSet={set} />
  }else if (type === "Pattern Quiz"){
    set_type = <PatternQuiz dataSet={set} />
  }else if (type === "Dialogue Quiz"){
    set_type = <DialogueQuiz dataSet={set} />
  }
  return set_type;
}

const DayInfoDetail = ({content})=> {
  return(
    <Row className="detail_table_background">
      <Col xs={12} md={10} mdOffset={1}>
        <div className="detail_table">
          <Row className="detail_title">
            <Col xs={12}>
              <span>{content.type}</span>
              {content.date?(<span className="title_date">{' - '+content.date}</span>):null}
            </Col>
          </Row>
          {content.data.map((data, index)=>(
            <div className="detail_content" key={index}>
              {detailType(content.type, data)}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

DayInfoDetail.propTypes={

};

export default DayInfoDetail;
