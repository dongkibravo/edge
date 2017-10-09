const initialState ={
    faq: [],
    faqLength: null,
    forum: [],    // get three pages first
    forumLength: null
};

function supportReducer(state=initialState, action){
  switch (action.type){

    case "GET_FAQ_FULFILLED":{
      return Object.assign({}, state, {
        faq: action.payload.faq,
        faqLength: action.payload.length
      });
    }

    case "GET_FORUM_FULFILLED":{
      return Object.assign({}, state, {
        forum: action.payload.forum,
        forumLength: action.payload.length
      });
    }


    default:
      return state;
  }
}

export default supportReducer;
