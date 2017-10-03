import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';
import basic_lock from '../static/pt_lock.svg';
import ongoing from '../static/pt_ongoing.svg';
import complete from '../static/pt_complete.svg';

function sessionImage(session) {
  const {session_num, materials, status} = session;

  let linkUrl = '/pro/personal-training/'+session_num;
  switch(status){
    case "complete":{
      return <Link to={linkUrl}><input className="pt_circle complete img-circle"
        type="image" src={complete} /></Link>;
    }
    case "ongoing":{
      return <Link to={linkUrl}><input className="pt_circle ongoing img-circle"
        type="image" src={ongoing} /></Link>;
    }
    case "locked":{
      return <Image className="pt_circle lock img-circle"
        src={basic_lock} circle />;
    }
  }
}

const TrainingTables = (props) =>{
  const {data} = props;
  return(
    <div className="session_boxes">
      {data.map((session, index)=>(
        <div className={"session_box "+session.status}
          key={"session_box_"+index}>
          <div className="session_title">
            <span>Session {session.session_num}</span>
          </div>
          <div className="session_image">
            {sessionImage(session)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingTables;
