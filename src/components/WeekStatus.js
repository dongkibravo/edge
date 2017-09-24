import React from 'react';
import {Image} from 'react-bootstrap';
import '../styles/WeekStatus/css';
import basic_lock from '../static/basic_lock.svg';
import pro_lock from '../static/pro_lock.svg';
import ongoing from '../static/ongoing.svg';
import complete from '../static/complete.svg';

function dayImage(status){
  switch(status){
    case "complete":{
      return <Image className="mini_circle complete"
              src={complete} />;
    }
    case "ongoing":{
      return <Image className="mini_circle ongoing"
              src={ongoing} />;
    }
    case "lock":{
      return <Image className="mini_circle lock"
              src={basic_lock} />;
    }
    case "pro_lock":{
      return <Image className="mini_circle lock"
              src={pro_lock} />;
    }
  }
}

const WeekStatus = (props) => {
  {props.days.map(day=>(
    <div>
      <div className={'line '+props.status} />
      <div className="form-group">ㅇ
        {dayImage(day.status)}
        <label>Day {day.day}</label>
      </div>
    </div>
    ));
  }
};

export default WeekStatus;
