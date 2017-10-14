import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getPersonalTraining} from '../actions/ProAction';
import TrainingTables from '../components/Pro.Training.Tables';
import ProNav from '../components/pro.nav';
import Description from '../components/Pro.Description';
import '../styles/css/Pro.Training.css';

class Training extends React.Component{

  constructor(){
    super();
    this.state={
      ptSessions: []
    };
  }

  componentWillMount(){
    if(!this.props.ptSessions){
      this.props.getPersonalTraining();
    }else{
      this.setState({
        ptSessions: this.props.ptSessions
      });
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(this.props.ptSessions !== nextProps.ptSessions){
      this.setState({
        ptSessions : nextProps.ptSessions
      });
    }
  }

  render(){
    return(
      <div>
        <ProNav type="AI" />
        <Description type="Training" />
        <Row className="training_table_row">
           <Col xs={12} md={10} mdOffset={1}>
             <TrainingTables data={this.state.ptSessions} />
           </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ptSessions: state.pro.ptSessions,
    status: state.pro.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    getPersonalTraining: ()=>{
      dispatch(getPersonalTraining());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Training);
