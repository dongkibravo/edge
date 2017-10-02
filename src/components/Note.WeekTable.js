import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/css/dropdown.css';

const WeekTable =  React.createClass({
  getInitialState: function() {
    return {
      listVisible: false,

    };
  },

  select: function(item) {
    this.props.selected = item;
  },
  show: function(index, event) {
    this.props.getQuiz(1);
    this.setState({ listVisible: true });
    console.log(index);
    document.addEventListener("click", this.hide);
    console.log(event.currentTarget);

    console.log(event.currentTarget.nextSibling.style="visibility:visible;");
  },
  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
    console.log(document.querySelector(".dropdown-list").style="visibility:hidden;");
  },

  render: function() {

    const { weeks } = this.props;

    return (
      <Row className="week_table">
        <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
          <div className="table_overflow">
            {
              weeks.map((week)=>(
              <div key={'week_'+(week.num)} className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
                <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")}
                  onClick={(e)=>this.show(week.num,e)}>
                  <span>Week{week.num}. {week.title}</span>
                  <i className="glyphicon glyphicon-menu-down"></i>
                </div>
                <div className="dropdown-list">
                  <div>
                    {this.renderListItems(week.quizzes)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    );
  },

  renderListItems: function(quizzes) {
    var items = [];
    quizzes.map((quiz, index)=>(
      items.push(<div key={'quiz_'+index}><span>{quiz}</span></div>)
    ));
    return items;
  }
});

export default WeekTable;
