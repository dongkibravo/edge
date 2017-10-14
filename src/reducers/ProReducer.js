const initialState={
  ptSessions    : null,
  quizResult    : [],
  quizScore     : null,
  quizWeeks     : [],
  sessionDetail : [],
  tutorList     : [],
  status        : false
};

function proReducer(state=initialState, action){
  switch (action.type){
    case "GET_PT_FULFILLED":{
      return Object.assign({}, state, {
        ptSessions: action.payload
      });
    }

    case "GET_QUIZ_WEEKS_FULFILLED":{
      return Object.assign({}, state, {
        quizWeeks: action.payload
      });
    }

    case "GET_QUIZ_RESULT_FULFILLED":{
      return Object.assign({}, state, {
        quizResult: action.payload
      });
    }

    case "GET_SCORE_FULFILLED":{
      console.log(action.payload);
      return Object.assign({}, state, {
        quizScore: action.payload
      });
    }

    case "GET_PT_DETAUL_FULFILLED":{
      return Object.assign({}, state, {
        sessionDetail: action.payload
      });
    }

    case "GET_TUTOR_QUESTION_FULFILLED":{
      return Object.assign({}, state, {
        tutorList: action.payload
      });
    }

    default:
      return state;
  }
}

export default proReducer;
