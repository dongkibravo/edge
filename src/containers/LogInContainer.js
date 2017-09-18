import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Image, Button, Form } from 'react-bootstrap';
import {connect} from "react-redux";
import logo_img from '../static/logo.png';
import { login } from '../actions/AuthAction';

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  componentWillupdate(){

  }

  render(){
    return(
      <Grid>
        <Row className="top_nav">
          <Col xs={12}>
            <div className="login_nav">
              <div className="content">
                <Image src={logo_img} className="logo_img"/>
                <span>VITA</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form className="formbox" onSubmit={this.handleSubmit}>
              <Image src={logo_img} className="logo_img"/>
              <input className="input_box" type="email"
                     name="email" placeholder="TYPE YO EMAIL"
                     onChange={this.handleChange} />
              <input className="input_box" type="password"
                     name="password" placeholder="TYPE YO PASSWORD"
                     onChange={this.handleChange} />
              <button onClick={this.handleSubmit}>
                ENTER
              </button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

LogIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return{
    user: state.jwtToken,
  };
};


const mapDispatchToProps = (dispatch)=>{
  return{
    login: (email, password) => {
      dispatch(login(email, password))
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
