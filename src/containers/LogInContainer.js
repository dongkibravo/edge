import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Image, Form } from 'react-bootstrap';
import {connect} from "react-redux";
import logo_img from '../static/logo.png';
import { login } from '../actions/AuthAction';
import '../styles/css/LogIn.css';
import '../styles/css/NavBar1.css';
import Logo from '../static/edgelogo.png';
import background_img from '../static/Background_image.jpg';

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
    this.props.login(this.state.email, this.state.password);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  componentDidUpdate(){
    console.log("componentDidMount");
    const {jwt, redirectUrl, error} = this.props;
    if(jwt){
      this.props.history.push(redirectUrl);
    }
    else if(error){
      alert(error);
    }
  }

  render(){
    const background ={
      backgroundImage: 'url('+background_img+')'
    };

    return(
      <Grid className="main_container">
        <div className="top_nav">
          <div className="nav_header">
            <Image className=" brand-img logo_img" src={Logo} />
          </div>
        </div>
        <div className="login_container" style={background}>
          <Row className="login_content">
            <Col xs={12}>
              <Form className="formbox" onSubmit={this.handleSubmit}>
                <Image src={logo_img} className="logo_img"/>
                <input className="input_box" type="email"
                       name="email" placeholder="TYPE YO EMAIL"
                       onChange={this.handleChange} />
               <input className="input_box" type="password"
                       name="password" placeholder="TYPE YO PASSWORD"
                       onChange={this.handleChange} />
               <button type="submit">
                  Log In
              </button>
              </Form>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

LogIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return{
    jwt: state.auth.jwtToken,
    error: state.auth.error,
    redirectUrl: state.auth.redirectUrl,
    email: '',
    password: ''
  };
};


const mapDispatchToProps = (dispatch)=>{
  return{
    login: (email, password) => {
      dispatch(login(email, password));
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(LogIn);
