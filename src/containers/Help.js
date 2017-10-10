import React from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import '../styles/css/support.help.css';
import { getFaq } from '../actions/SupportAction';

class Help extends React.Component{

  constructor(){
    super();
    this.state={
      faqLength: null,
      faqList : [],
      currentPage : 1
    };
  }

  componentWillMount(){
    let {faqList, faqLength, getFaq} = this.props;

    if(faqList.length === 0){
      getFaq(this.state.currentPage);
    }else{
      this.setState({
        faqLength: faqLength,
        faqList: faqList,
      });
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("will receive props");
    // if(this.state.currentPage !== nextProps.match.params.page){
    //   console.log("different page called and dispatching get faq");
    //   this.props.getFaq(nextProps.match.params.page);
    //   this.setState({
    //     currentPage: nextProps.match.params.page
    //   });
    // }

    if(this.props.faqList !== nextProps.faqList){
      console.log("new faq arrived and calling setstate");
      this.setState({
        faqLength : nextProps.faqLength,
        faqList : nextProps.faqList
      });
    }
  }


  render(){
    console.log("in render");
    console.log(this.state.faqList);
    return(
      <Grid className="setting-page">
        <Row className="title">
          <Col xs={12} className="text-center">
            <span className="main">Frequently Asked Questions</span>
            <span className="sub">자주 묻는 질문들에 대한 대답</span>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <Accordion className="faq-container">
              {this.state.faqList.map((faq,i)=>(
                <Panel header=
                  {<div><span>Q </span><span>{faq.question}</span></div>}
                   eventKey={i} key={"qna_"+i}>
                   <span>A </span><span>{faq.answer}</span>
                </Panel>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    getFaq: (page) =>{
      dispatch(getFaq(page));
    }
  };
};


const mapStateToProps = (state, props) =>{
  return{
    faqList : state.support.faq,
    faqLength : state.support.faqLength
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Help);
