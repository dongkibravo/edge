import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StatusChart from '../components/charts/StatusChart';
import '../styles/css/weekStatus.css';
import basic_lock from '../static/basic_lock.svg';
import pro_lock from '../static/pro_lock.svg';
import ongoing from '../static/ongoing.svg';
import complete from '../static/complete.svg';

function dayImage(status){
  switch(status){
    case "complete":{
      return <Link to="#"><input className="mini_circle complete img-circle"
        type="image" src={complete} /></Link>;
    }
    case "ongoing":{
      return <Link to="#"><input className="mini_circle ongoing img-circle"
        type="image" src={ongoing} /></Link>;
    }
    case "locked":{
      return <input className="mini_circle lock img-circle"
        type="image" src={basic_lock} />;
    }
    case "pro_locked":{
      return <Image className="mini_circle lock" src={pro_lock} />;
    }
  }
}

const WeekStatus = (props) => {
  let complete_count = props.days.filter(
    value=>value.status ==='complete').length;
  // if this user is PRO user the total count needs to be 4
  let total_count = 3;

  return(
    <Row className="text-center">
      <Col style={{width:'auto',display:'inline-block'}}>
        <StatusChart completedCount={complete_count} totalCount={total_count}/>
        {props.days.map((day,index)=>(
          <div className="day_part" key={index}>
            <div className={'line '+ day.status} />
            <div className="form-group">
              {dayImage(day.status)}
              <label>Day {day.day}</label>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default WeekStatus;
