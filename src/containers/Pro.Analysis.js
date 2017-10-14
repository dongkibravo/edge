import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getQuizScore} from '../actions/ProAction';
import ProNav from '../components/pro.nav';
import AnalysisChart from '../components/charts/AnalysisChart';
import Description from '../components/Pro.Description';
import '../styles/css/pro.analysis.css';

class Analysis extends React.Component{

  constructor(){
    super();
    this.state={
      quizScore: null
    };
  }

  componentDidMount(){
    console.log("did mount");
    let width = ReactDOM.findDOMNode(this).offsetWidth;
    console.log(width);
  }

  componentWillMount(){
    if(this.props.quizScore === null){
      this.props.getQuizScore();
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      quizScore : nextProps.quizScore
    });
  }

  render(){
    let {quizScore} = this.state;
    return(
      <div>
        <ProNav type="AI" />
        <Description type="Analysis"/>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            {quizScore?quizScore.map((set, index)=>(
              <AnalysisChart key={"chart_"+index} data={set} />
            )):null}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    quizScore: state.pro.quizScore
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    getQuizScore: ()=>{
      dispatch(getQuizScore());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
