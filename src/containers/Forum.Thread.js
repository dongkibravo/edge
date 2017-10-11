import React from 'react';
import {Grid} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getThreadDetail} from '../actions/SupportAction';
import {Thread, CommentSection} from '../components/Forum.Thread.Components';
import '../styles/css/support.forum.thread.css';

class ForumThread extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      commentBox: false,
      comment: '',
      editArray: null,              // for owner comment section
      thread: this.props.thread
    };
    this.goBackHandler = this.goBackHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onReplyBtnClick = this.onReplyBtnClick.bind(this);
    this.onReplyCancelClick = this.onReplyCancelClick.bind(this);
    this.onCommentDeleteClick = this.onCommentDeleteClick.bind(this);
    this.onCommentEditClick = this.onCommentEditClick.bind(this);
    this.onCommentEditChange = this.onCommentEditChange.bind(this);
    this.onEditCancel = this.onEditCancel.bind(this);
  }

  componentWillMount(){
    let {id} = this.props.match.params;
    let {thread} = this.state;

    if(!thread){
      this.props.getThreadDetail(id);
    }else{
      let {userId} = this.props;
      let array = thread.comments.reduce(
        function(filtered,comment){
          if(comment.author_id===userId){
            if(Object.keys(filtered).length===0){
              filtered = {status:{}, comment:{}};
              filtered.status[comment.id] = true;
              filtered.comment[comment.id] = '';
            }else{
              filtered.status[comment.id] = true;
              filtered.comment[comment.id] = '';
            }
          }
        return filtered;
      }, {});

      this.setState({
        editArray : array
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.thread !==nextProps.thread){
      // calculating how many comments are owned by the current logged in user

      let {userId} = this.props;
      let array = nextProps.thread.comments.reduce(
        function(filtered,comment){
          if(comment.author_id===userId){
            if(Object.keys(filtered).length===0){
              filtered = {status:{}, comment:{}};
              filtered.status[comment.id] = true;
              filtered.comment[comment.id] = '';
            }else{
              filtered.status[comment.id] = true;
              filtered.comment[comment.id] = '';
            }
          }
        return filtered;
      }, {});

      this.setState({
        thread : nextProps.thread,
        editArray : array
      });
    }
  }

  onReplyBtnClick(){
    this.setState({
      commentBox: true
    });
  }

  onReplyCancelClick(){
    this.setState({
      commentBox: false,
      comment: ''
    });
  }

  goBackHandler(){
    this.props.history.goBack();
  }

  handleChange(evt){
    this.setState({
      comment: evt.target.value
    });
  }

  onCommentDeleteClick(commentId){
    if (window.confirm("Press a button!"+ commentId) === true) {
      alert("confirm");
    } else {
      alert("cancel");
    }
  }

  onCommentEditClick(id, comment, event){
    let commentNode = event.currentTarget.parentNode.parentNode.parentNode;
    commentNode.style='visibility:hidden';

    let {editArray}= this.state;
    editArray.status[id] = false;
    editArray.comment[id] = comment;

    this.setState({
      edittingText: comment,
      editArray
    });
  }

   onCommentEditChange(id, event){
     let {editArray} = this.state;
     editArray.comment[id] = event.target.value;
     this.setState({
       editArray
     });
   }

   onEditCancel(id, event){
     let commentNode = event.currentTarget.parentNode.parentNode.nextSibling;
     commentNode.style="visibility:visible";
     let {editArray} = this.state;
     editArray.status[id] = true;
     editArray.comment[id] = '';
     this.setState({
       editArray
     });
   }

  render(){
    let threadHandlers = {
      goBackHandler : this.goBackHandler,
      onReplyBtnClick : this.onReplyBtnClick,
      onReplyCancelClick : this.onReplyCancelClick,
      handleChange : this.handleChange,
    };

    let commentHandlers = {
      onEditClick : this.onCommentEditClick,
      onDeleteClick : this.onCommentDeleteClick,
      onCommentEditChange: this.onCommentEditChange,
      onEditCancel : this.onEditCancel
    };
    console.log(this.state);
    return(
      <Grid className="forum-page">
        {this.state.thread?
          <Thread handlers={threadHandlers} state={this.state} />:
          null
        }
        {this.state.thread?
        <CommentSection handlers={commentHandlers} state={this.state}
          userId={this.props.userId}/>:
        null
        }
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getThreadDetail: (threadId) =>{
      dispatch(getThreadDetail(threadId));
    }
  };
};

const mapStateToProps = (state, props) =>{
  return{
    thread : state.support.thread,
    userId : state.auth.userId
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(ForumThread);
