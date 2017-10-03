const PT =
[{
'session_num'				:		1,
	'materials'	:		[{'data_type':'Pattern','test_type':'Practice'},
									 {'data_type':'Dialogue','test_type':'Practice'}],
	'status'		:		'complete'
},
{
	'session_num'				:		2,
	'materials'	:		[{'data_type':'Pattern','test_type':'Practice'},
									 {'data_type':'Dialogue','test_type':'Practice'}],
	'status'		:		'ongoing'
},
{
	'session_num'				:		3,
	'materials'	:		[{'data_type':'Pattern','test_type':'Practice'},
									 {'data_type':'Dialogue','test_type':'Practice'}],
	'status'		:		'locked'
},
{
	'session_num'				:		4,
	'materials'	:		[{'data_type':'Pattern','test_type':'Practice'},
									 {'data_type':'Dialogue','test_type':'Practice'}],
	'status'		:		'locked'
}];

const PT_detail =
[{
	'data_type' : 'Vocabulary',
	'test_type' : 'Practice',
	'data'			:
	[{
		'title'	: 'Vocabulary Training 1',
		'set'	:
		[{
			'vocab_en': 'apple',
			'vocab_jp': '사과'
		},
		{
			'vocab_en': 'pepsi',
			'vocab_jp': '펩시'
		},
		{
			'vocab_en': 'cola',
			'vocab_jp': '콜라'
		},
		{
			'vocab_en': 'kinder',
			'vocab_jp': '킨더',
		},
		{
			'vocab_en': 'macbook',
			'vocab_jp': '맥북'
		},
		{
			'vocab_en': 'eraser',
			'vocab_jp': '지우개'
		},
		{
			'vocab_en': 'cup',
			'vocab_jp': '잔'
		},
		{
			'vocab_en': 'pillar',
			'vocab_jp': '기둥'
		}]
	}]
},
{
	'data_type' : 'Pattern',
	'test_type' : 'Practice',
	'data'			:
	[{
		'title'	: 'Pattern Training 1',
		'set'	:
		[{
	    'pattern_en'  : 'Can you help me~',
	    'pattern_jp'  : '~手伝ってくれますか?'
	  },
	  {
	    'pattern_en'  : 'May I see your~',
	    'pattern_jp'  : '~を見せて頂けますか?',
	  },
	  {
	    'pattern_en'  : 'Put/Stow it~',
	    'pattern_jp'  : '~置いてください。',
	  }]
	}]
},
{
	'data_type' : 'Vocabulary',
	'test_type' : 'Test',
	'data'			:
	[{'date'	: '2017-09-27 18:30:00',
			// this is because to match the json format in practice
		'title': 'Personal Training Voca Test 1',	// Different Naming?
		'log' :
		[{
			'question'		:	'사과',
			'answer'			:	'apple',
			'user_answer'	: 'apple',
			'result'			:	true
		},{
			'question'		:	'에반',
			'answer'			:	'evan',
			'user_answer'	:	'james',
			'result'			:	false
		},{
			'question'		:	'에반',
			'answer'			:	'evan',
			'user_answer'	:	'james',
			'result'			:	false
		},{
			'question'		:	'에반',
			'answer'			:	'evan',
			'user_answer'	:	'james',
			'result'			:	false
		},{
			'question'		:	'에반',
			'answer'			:	'evan',
			'user_answer'	:	'james',
			'result'			:	false
		}]
	}]
},
{
	'data_type' : 'Pattern',
	'test_type' : 'Test',
	'data' 			: null
}
];

const quizWeeks =
[{
	week_num	:	1,
	title	: 'Airplane',
	schedule : [{day : 2, data_type : 'Pattern', test_type : 'Quiz' },
						  {day : 3, data_type : 'Vocabulary', test_type : 'Quiz'},
						  {day : 3, data_type : 'Dialogue', test_type : 'Quiz'}]
},
{
	week_num	: 2,
	title	:	'Airplane',
	schedule : [{day : 2, data_type : 'Pattern', test_type : 'Quiz' },
						  {day : 3, data_type : 'Vocabulary', test_type : 'Quiz'},
						  {day : 3, data_type : 'Dialogue', test_type : 'Quiz'}]
},
{
	week_num	: 3,
	title	:	'Airplane',
	schedule : [{day : 2, data_type : 'Pattern', test_type : 'Quiz' },
						  {day : 3, data_type : 'Vocabulary', test_type : 'Quiz'},
						  {day : 3, data_type : 'Dialogue', test_type : 'Quiz'}]
},
{
	week_num	: 4,
	title	:	'Airplane',
	schedule : [{day : 2, data_type : 'Pattern', test_type : 'Quiz' },
						  {day : 3, data_type : 'Vocabulary', test_type : 'Quiz'},
						  {day : 3, data_type : 'Dialogue', test_type : 'Quiz'}]
}];


// weekly
// filter the quiz log to get only wrong questions
const quizResult =
[{
	'timestamp' : '2017-09-09 18:50:20',
	'data_type'	: 'Pattern',
	'test_type' : 'Quiz',
	'log'		:
	[{
		'pattern'		: 'is there~',
		'pattern_jp': '그곳에 ~ ',
		'log':
		[{
			'variable'		: 'a bathroom',
			'question'		: '저기 화장실 있나요?',
			'answer'		: 'is there a bathroom',
			'user_answer'	: 'is there a bathroom',
			'score'			: 	1
		},
		{
			'variable'		: 'my phone',
			'question'		: '그곳에 나의 똥이 있나요?',
			'answer'		: 'is there my phone',
			'user_answer'	: 'is there phone',
			'score'			: 	1
		}]
	},{
		'pattern'		: 'may i see your~',
		'pattern_jp': '제가 ~ 을 봐도 될까요?',
		'log':
		[{
			'variable'		: 'a bathroom',
			'question'		: '저기 갓나가 있나요?',
			'answer'		: 'is there a bathroom',
			'user_answer'	: 'is there a bathroom',
			'score'			: 	1
		},{
			'variable'		: 'my phone',
			'question'		: '그곳에 나의 콜라가 있나요?',
			'answer'		: 'is there my phone',
			'user_answer'	: 'is there phone',
			'score'			: 	1
		}]
	}]
},
{
	'timestamp' : '2017-09-09 18:50:20',
	'data_type'	: 'Vocabulary',
	'test_type' : 'Quiz',
	'log'		:
	[{
		'question'		:	'사과',
		'answer'		:	'apple',
		'user_answer'	: 	'apple',
		'score'			: 	1
	},{
		'question'		:	'에반',
		'answer'		:	'evan',
		'user_answer'	:	'james',
		'score'			: 	1
	},{
		'question'		:	'에반',
		'answer'		:	'evan',
		'user_answer'	:	'james',
		'score'			: 	1
	},{
		'question'		:	'에반',
		'answer'		:	'evan',
		'user_answer'	:	'james',
		'score'			: 	1
	},{
		'question'		:	'에반',
		'answer'		:	'evan',
		'user_answer'	:	'james',
		'score'			: 	1
	}]
},
{
	'timestamp' : '2017-09-09 18:50:20',
	'data_type'	: 'Dialogue',
	'test_type' : 'Quiz',
	'log'		:
	[{
		'topic'	:	'asking for help',
		'date'	:	'2017-09-27 20:00:00',
		'log'		:
		[{
			'question'		:	'Welcome aboard',
			'question_jp'	:	'こんにちは。',
			'answer'		:	'Hi. Can you help me find my seat?',
			'answer_jp'		:	'座席を探するのを手伝ってもらえますか?',
			'user_answer'	:	'Find my fucking seat',
			'score'			: 	1

		},{
			'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
			'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
			'answer'		:	'Thanks. can you help me with this bag?',
			'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
			'user_answer'	:	'My FUCKING bag!!!!',
			'score'			: 	1
		},{
			'question'		:	'Sure. Would you like to put in the overhead compartment?',
			'question_jp'	:	'はい。上の棚へ入れますか？',
			'answer'		:	'Yes, please.',
			'answer_jp'		:	'はい、お願いします。',
			'user_answer'	:	'fuck no.',
			'score'			: 	1
		},{
			'question'		:	'Here. Let me know if you need to take it out.' ,
			'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
			'answer'		:	'Thank you so much?',
			'answer_jp'		:	'ありがとうございます。',
			'user_answer'	:	'oh my dear fucking god',
			'score'			: 	1
		}]
	},{
		'topic'	:	'changing seats',
		'date'	:	'2017-09-28 20:00:00',
		'log'		:
		[{
			'question'		:	'Welcome aboard',
			'question_jp'	:	'こんにちは。',
			'answer'		:	'Hi. Can you help me find my seat?',
			'answer_jp'		:	'座席を探するのを手伝ってもらえますか?',
			'user_answer'	:	'Find my fucking seat',
			'score'			: 	1
		},{
			'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
			'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
			'answer'		:	'Thanks. can you help me with this bag?',
			'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
			'user_answer'	:	'My FUCKING bag!!!!',
			'score'			: 	1
		},{
			'question'		:	'Sure. Would you like to put in the overhead compartment?',
			'question_jp'	:	'はい。上の棚へ入れますか？',
			'answer'		:	'Yes, please.',
			'answer_jp'		:	'はい、お願いします。',
			'user_answer'	:	'fuck no.',
			'score'			: 	1
		},{
			'question'		:	'Here. Let me know if you need to take it out.' ,
			'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
			'answer'		:	'Thank you so much?',
			'answer_jp'		:	'ありがとうございます。',
			'user_answer'	:	'oh my dear fucking god',
			'score'			: 	1
		}]
	}]
}];

const quizScore ={
  vocaScore : {
    question_num : [ 10, 8, 9, 11, 7 ],
    correct_num : [ 10, 7, 7, 8, 7]
  },
  patternScore : {
    question_num : [ 5, 6, 7, 6, 7 ],
    correct_num : [ 3, 6, 5, 6, 4]
  },
  dialogueScore : {
    question_num : [ 10, 9, 11, 11, 9 ],
    correct_num : [ 6, 6, 10, 9, 7]
  }
};

/*
// option 1
const vocaScore = {
  question_num : [ 10, 8, 9, 11, 7 ],
  correct_num : [ 10, 7, 7, 8, 7]
}
const patternScore = {
  question_num : [ 10, 8, 9, 11, 7 ],
  correct_num : [ 10, 7, 7, 8, 7]
}

const dialogueScore = {
  question_num : [ 10, 8, 9, 11, 7 ],
  correct_num : [ 10, 7, 7, 8, 7]
}

// option 2
const question_num = [ 10, 8, 9, 11, 7 ]
const correct_num = [ 10, 7, 7, 8, 7]
*/


export function getQuizWeeks(){
	return(dispatch, getState) => {
		// const state = getState();
		// let jwtToken = state.auth.jwtToken;
		dispatch({
			type: "GET_QUIZ_WEEKS_FULFILLED",
			payload: quizWeeks
		});
	};
}

export function getQuizResult(week){
  return (dispatch, getState) => {
    // const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type: "GET_QUIZ_RESULT_FULFILLED",
      payload: quizResult
    });
  };
}

export function getPersonalTraining(){
  return (dispatch, getState) => {
    // const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type: "GET_PT_FULFILLED",
      payload: PT
    });
  };
}

//materials argumnet looks like
// [{'data_type':'Dialogue','test_type':'Practice'},
//   {'data_type':'Pattern', 'test_type':'Quiz'}]
// session is just the number of session
export function getPtDetail(session, materials){
	return (dispatch, getState) => {
		// const state = getState();
		// let jwtToken = state.auth.jwtToken;
		dispatch({
			type: "GET_PT_DETAUL_FULFILLED",
			payload: PT_detail
		});
	};
}

export function getQuizScore(){
  return (dispatch, getState) => {
    // const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type: "GET_SCORE_FULFILLED",
      paylaod: quizScore
    });
  };
}
