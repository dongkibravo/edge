import React from 'react';
// import PropTypes from 'prop-types';
import {Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import StatusChart from '../components/charts/StatusChart';
import '../styles/css/weekStatus.css';
import basic_lock from '../static/basic_lock.svg';
import pro_lock from '../static/pro_lock.svg';
import ongoing from '../static/ongoing.svg';
import complete from '../static/complete.svg';

function dayImage(status, day, week) {
  let linkUrl = '/dashboard/'+week+'/'+day;
  switch(status){
    case "complete":{
      return <Link to={linkUrl}><input className="mini_circle complete img-circle"
        type="image" src={complete} alt="complete"/></Link>;
    }
    case "ongoing":{
      return <Link to={linkUrl}><input className="mini_circle ongoing img-circle"
        type="image" src={ongoing} alt="ongoing"/></Link>;
    }
    case "locked":{
      return <Image className="mini_circle lock img-circle"
        src={basic_lock} alt="basic_lock" circle />;
    }
    case "pro_locked":{
      return <Image className="mini_circle lock img-circle pro"
        src={pro_lock} alt="pro_lock" circle />;
    }
    default:
      return;
  }
}

const WeekStatus = (props) => {
  let completedCount = props.days.filter(
    value=>value.status === 'complete').length;
  // if this user is PRO user the total count needs to be 4
  let total_count = 3;

  return(
    <Row className="text-center">
      <Col style={{width:'auto',display:'inline-block'}}>
        <StatusChart completedCount={completedCount} totalCount={total_count}/>
        {props.days.map((day,index)=>(
          <div className="day_part" key={index}>
            <div className={'line ' + day.status} />
            <div className='form-group'>
              {dayImage(day.status, day.day, props.week)}
              <label>Day {day.day}</label>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

WeekStatus.propTypes={

};

export default WeekStatus;
