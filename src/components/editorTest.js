import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';


const Description =()=>{
  return(
    <Row className="title">
      <Col xs={12} className="text-center">
        <span className="main">
          New thread
        </span>
        <span className="sub">
          Enter the content and post it to the community.
        </span>
      </Col>
    </Row>
  );
};


class ForumPost extends React.Component{

  constructor(){
    super();
    this.state={
      title: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("in handle chage");
    console.log(this.state);
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push('/forum');
  }

  render(){
    return(
      <Grid className="forum-page">
        <Description />
        <Row className="post-container">
          <Col xs={12} sm={8} smOffset={2}>
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
                options: ['inline','blockType','fontSize', 'list', 'textAlign','link','emoji','image'],
                image: {
                  urlEnabled: false,
                  uploadEnabled: true,
                  uploadCallback: true,
                  inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                }
              }}

            />
          </Col>
        </Row>
        <Row className="post-buttons">
          <Col xs={4} smOffset={2}>
            <button type="submit" id="post-btn" onClick={this.handleSubmit}>
              Submit</button>
            <Link className="btn" type="Cancel" to="/forum" id="cancel-btn">Cancel</Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ForumPost;
