import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/css/dropdown.css';

function  renderListItems(schedule, onClick) {
  var items = [];
  schedule.map((test, index)=>(
    items.push(<div key={'test_'+index} onClick={(evt)=>onClick(index, test.day, evt)}>
      <span>Day {test.day} - {test.data_type} {test.test_type}</span>
    </div>)
  ));
  return items;
}

const WeekTable = ({weeks, status, show, onClick}) =>{
  return (
    <Row className="week_table">
      <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
        <div className="table_overflow">
          {
            weeks.map((week, index)=>(
            <div key={'week_'+(week.week_num)}
              className={"dropdown-container" + (status[index] ? " show" : "")}>
              <div className={"dropdown-display" + (status[index] ? " clicked": "")}
                onClick={(e)=>show(index,e)} >
                <span>Week{week.week_num}. {week.title}</span>
                {status[index]?
                  <i className="glyphicon glyphicon-menu-up" />:
                  <i className="glyphicon glyphicon-menu-down" />
                }
              </div>
              <div className="dropdown-list"
                style={status[index]?{visibility:'visible'}:{visibility:'hidden'}}>
                <div>
                  {renderListItems(week.schedule, onClick)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}



export default WeekTable;
