import React from 'react';
const faq =
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
}];

const faqLength = 6;

// const forumList =
// [{
//   title : 'wooahahahwowowha',
//   id : '1234',
//   author: 'dongkibravo',
//   date: '2017-09-09'
// }]




export function getFaq(page){
  return(dispatch, getState) =>{
    // const state = getState();
    // let jwtToken = tstate.auth.jwtToken;
    dispatch({
      type: "GET_FAQ_FULFILLED",
      payload: {faq: faq, length: faqLength}
    });
  };
}


export function getForum(page){
  return(dispatch, getState)=>{
    //const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type: "GET_FORUM_FULFILLED",
      payload: {}
    })
  }
}
