const initialState={
  titles: [],
  weeklyStatus: [],
  dailyData: []
};

function dashbaordReducer(state=initialState, action){
  switch (action.type){
    case "SEARCH_WEEK_FULFILLED":{
      console.log(action.payload);
      return Object.assign({}, state, {
        titles: action.payload.titles,
        weeklyStatus: action.payload.weeklyStatus
      });
    }

    case "SEARCH_DAY_FULFILLED":{
      return Object.assign({}, state, {
        dailyData: action.payload
      });
    }

    default:
      return state;
  }
}

export default dashbaordReducer;
