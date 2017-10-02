const initialState={
  personalTraining  : [],
  quizResult        : [],
  quizScore         : [],
  quizWeeks         : [],
  status    : false
};

function proReducer(state=initialState, action){
  switch (action.type){
    case "GET_PT_FULFILLED":{
      return Object.assign({}, state, {
        personalTraining: action.payload
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
      return Object.assign({}, state, {
        quizScore: action.payload
      });
    }



    default:
      return state;
  }
}

export default proReducer;
