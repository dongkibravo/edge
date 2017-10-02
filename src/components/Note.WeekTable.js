import React from 'react';
import {Row, Col} from 'react-bootstrap';
import '../styles/dropdown.css';

const WeekTable = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false
    };
  },

  select: function(item) {
    this.props.selected = item;
  },

  show: function(event) {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
    console.log(event.currentTarget.nextSibling.style="visibility:visible;");
    // document.querySelector()
  },
  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
    console.log(document.querySelector(".dropdown-list").style="visibility:hidden;");
  },

  render: function() {
    return (
      <Row className="week_table">
        <Col xs={12} md={6} mdOffset={3} lg={4} lgOffset={4}>
          <div>
            <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
              <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
                <i className="fa fa-angle-down"></i>
              </div>
              <div className="dropdown-list">
                <div>
                  <div><span>111</span></div>
                  <div><span>222</span></div>
                  <div><span>333</span></div>
                </div>
              </div>
            </div>
            <div className={"dropdown-container"}>
              <div className={"dropdown-display"}>
                <span>second one</span>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
            <div className={"dropdown-container"}>
              <div className={"dropdown-display"}>
                <span>third one</span>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  },

  renderListItems: function() {
    var items = [];


    items.push(<div><span>111</span></div>);
    items.push(<div><span>222</span></div>);
    items.push(<div><span>333</span></div>);

    return items;
  }
});

export default WeekTable;
