const faq =
[
  [{
        question: 'aaaaaaaaaaaaa',
        answer : 'bbbbbbbbbbbbbbbbasdfzxcvzxcv'
  },
  {
        question: 'ccccccccccccccccc',
        answer : 'dddddddddddddddddddd\nasdfzxcvzxcv'
  },
  {
        question: 'eeeeeeeeeeeeeeeee',
        answer : 'ffffffffffffffffffff'
  },
  {
        question: 'ggggggggggggggggggg',
        answer : 'hhhhhhhhhhhhhhhhhhh'
  },
  {
        question: 'iiiiiiiiiiiiiiiiii',
        answer : 'qqqqqqqqqqqqqqqqqq'
  }],
  [{
        question: 'dsbadvzxc',
        answer : 'gfhsdfg'
  },
  {
        question: 'tqwer',
        answer : 'bbdfg\ngasdfcv'
  },
  {
        question: 'dfg',
        answer : 'bxvcb'
  },
  {
        question: 'ggggggggggggggggggg',
        answer : 'hhhhhhhhhhhhhhhhhhh'
  },
  {
        question: 'iiiiiiiiiiiiiiiiii',
        answer : 'qqqqqqqqqqqqqqqqqq'
  }]
]


;

const faqLength = 6;

const forumList =
[
  [{
    title : 'wooahahahwowowha',
    id : '123',
    author: 'dongkibravo',
    date: '2017-09-09'
  },
  {
    title : '[팁] 뮤지오랑 영어공부',
    id: '122',
    author : 'william1',
    date : '2016-12-12'
  },
  {
   title : '뮤지오에서 게임??',
    id: '121',
    author : 'william6',
    date : '2016-12-12'
  },
  {
   title : '뮤지오는 몇살임?',
    id: '120',
    author : 'william3',
    date : '2016-12-11'
  },
  {
   title : '소피 사용법',
    id: '119',
    author : 'william1',
    date : '2016-12-11'
  }],

  [{
    title : 'bxzckbjlk',
    id : '153',
    author: 'dongasdravo',
    date: '2017-09-09'
  },
  {
    title : '[팁asdf어공부',
    id: '122',
    author : 'william1',
    date : '2016-12-12'
  }]
];




export function getFaq(page){
  return(dispatch, getState) =>{
    // const state = getState();
    // let jwtToken = tstate.auth.jwtToken;
    dispatch({
      type: "GET_FAQ_FULFILLED",
      payload: {faq: faq[page-1], length: faqLength}
    });
  };
}


export function getForum(page){
  return(dispatch, getState)=>{
    //const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type: "GET_FORUM_FULFILLED",
      payload: {forum:forumList[page-1], length: 7 }
    });
  };
}
