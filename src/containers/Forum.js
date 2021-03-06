import React from 'react';
import {getForum, getThreadDetail} from '../actions/SupportAction';
import {connect} from 'react-redux';
import '../styles/css/support.forum.css';
import ForumContainer from '../components/Support.Forum';
// import ForumPost from '../components/Forum.Post';
import ForumThread from './Forum.Thread';
import {Route, Switch} from 'react-router-dom';
import ForumPost from '../components/editorTest';

class Forum extends React.Component{
  constructor(){
    super();
    this.state={
      forumLength: null,
      forumList: [],
      currentPage: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentWillMount(){
    if(this.props.forumList.length === 0){
      this.props.getForum(this.state.currentPage);
    }else{
      this.setState({
        forumLength: this.props.forumLength,
        forumList: this.props.forumList,
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.forumList !== nextProps.forumList){
      console.log("new faq arrived and calling setstate");
      this.setState({
        forumLength : nextProps.forumLength,
        forumList : nextProps.forumList
      });
    }
  }

  handleSelect(eventKey) {
    console.log(eventKey);
    this.props.getForum(eventKey);
    this.setState({
      currentPage: eventKey
    });
  }

  onClickHandler(id, evt){
    let {getThreadDetail, history, thread} = this.props;
    if(!thread || thread.id !== id){
      getThreadDetail(id);
    }
    history.push('/forum/'+id);
  }

  render(){
    let handlers = {
      handleSelect : this.handleSelect,
      onClickHandler : this.onClickHandler
    };

    return(
      <Switch>
        <Route exact path="/forum" render={()=>
            <ForumContainer state={this.state} handlers={handlers}/>}/>
        <Route exact path="/forum/new-post" component={ForumPost} />
        <Route exact path="/forum/:id" component={ForumThread} />
      </Switch>
    );
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    getForum: (page) =>{
      dispatch(getForum(page));
    },
    getThreadDetail: (threadId) =>{
      dispatch(getThreadDetail(threadId));
    }
  };
};

const mapStateToProps = (state, props) =>{
  return{
    forumList : state.support.forum,
    forumLength : state.support.forumLength,
    thread : state.support.thread
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Forum);
