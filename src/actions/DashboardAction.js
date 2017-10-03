const titles = [ 'Airport', 'Airplane'];
const weeklyStatus =  [
	{
		'week_num': 1,
		'days':[
			{
				'day'				:		1,
				// potentially change the materials to like
				// [{'data_type':'Dialogue','test_type':'Practice'},
			 //   {'data_type':'Pattern', 'test_type':'Quiz'}]
				'materials'	:		['Dialogue Practice','Pattern Practice'],
				'status'		:		'complete'
			},
			{
				'day'				:		2,
				'materials'	:		['Pattern Quiz','Vocabulary Practice'],
				'status'		:		'ongoing'
			},
			{
				'day'				:		3,
				'materials'	:		['Vocabulary Quiz','Dialogue Quiz'],
				'status'		:		'locked'
			},
			{
				'day'				:		4,
				'materials' : 	['NOTHING'],
				'status'		:		'locked'
			}
		]
	},
	{
		'week_num': 2,
		'days':[
			{
				'day'				:		1,
				'materials'	:		['Dialogue Practice','Pattern Practice'],
				'status'		:		'ongoing'
			},
			{
				'day'				:		2,
				'materials'	:		['Pattern Quiz','Vocabulary Practice'],
				'status'		:		'locked'
			},
			{
				'day'				:		3,
				'materials'	:		['Vocabulary Quiz','Dialogue Quiz'],
				'status'		:		'locked'
			},
			{
				'day'				:		4,
				'materials' : 	['NOTHING'],
				'status'		:		'locked'
			}
		]
	}
];

const dailyData =
[{
  'type'  : 'Dialogue Practice',
	'data'	: [
		{
			'title' : 'Asking for help',
	    'set'  : [
	     {
	    		'part_a_en' 	: 'welcome aboard',
	    		'part_a_jp' 	: 'こんにちは。',
	    		'part_b_en' 	: 'Hi. Can you help me find my seat?',
	    		'part_b_jp'	: '座席を探するのを手伝ってもらえますか?'
	    	},
	    	{
	    		'part_a_en' 	: 'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.',
	    		'part_a_jp' 	: 'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
	    		'part_b_en' 	: 'Thanks. Can you help with my bag?',
	    		'part_b_jp'	: 'ありがとうございます。ちょっと手伝ってもらえますか'
	    	},
	    	{
	    		'part_a_en' 	: 'Sure. Would you like to put in the overhead compartment?',
	    		'part_a_jp' 	: 'こはい。上の棚へ入れますか？',
	    		'part_b_en' 	: 'Yes, please.',
	    		'part_b_jp'	: 'はい、お願いします。'
	    	},
	    	{
	    		'part_a_en' 	: 'Here. Let me know if you need to take it out.',
	    		'part_a_jp' 	: 'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
	    		'part_b_en' 	: 'Thank you so much.',
	    		'part_b_jp'	: 'ありがとうございます。'
	    	}
	    ]
		},
		{
			'title' : 'Changing seats',
			'set'  : [
			 {
					'part_a_en' 	: 'welcome aboard',
					'part_a_jp' 	: 'こんにちは。',
					'part_b_en' 	: 'Hi. Can you help me find my seat?',
					'part_b_jp'	: '座席を探するのを手伝ってもらえますか?'
				},
				{
					'part_a_en' 	: 'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.',
					'part_a_jp' 	: 'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
					'part_b_en' 	: 'Thanks. Can you help with my bag?',
					'part_b_jp'	: 'ありがとうございます。ちょっと手伝ってもらえますか'
				},
				{
					'part_a_en' 	: 'Sure. Would you like to put in the overhead compartment?',
					'part_a_jp' 	: 'こはい。上の棚へ入れますか？',
					'part_b_en' 	: 'Yes, please.',
					'part_b_jp'	: 'はい、お願いします。'
				},
				{
					'part_a_en' 	: 'Here. Let me know if you need to take it out.',
					'part_a_jp' 	: 'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
					'part_b_en' 	: 'Thank you so much.',
					'part_b_jp'	: 'ありがとうございます。'
				}
			]
		}
	]
},
{
	'type'	: 'Pattern Practice',
	'data'	: [
		{
			'title' : 'Asking for help',
	    'set'  : [
	      {
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
	      }
	    ]
		},
		{
			'title' : 'Asking for help',
			'set'  : [
				{
					'pattern_en'  : 'May I see your~',
					'pattern_jp'  : '~を見せて頂けますか?, ~いただけますか？',
				},
				{
					'pattern_en'  : 'Is there ~',
					'pattern_jp'  : '~ありますか？',
				}
			]
		}
	]
},
{
	'type'	: 'Vocabulary Practice',

	'data'	: [
	{
		'title' : 'vocabulary package 1',
		'set'	: [
		{
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
}];

const dailyData3 =
[{
  'data_type'  : 'Dialogue',
	'test_type'	:	'Practice',
	'data'	:
	[{
		'title' : 'Asking for help',
    'set'  : 
		[{
  		'part_a_en' 	: 'welcome aboard',
  		'part_a_jp' 	: 'こんにちは。',
  		'part_b_en' 	: 'Hi. Can you help me find my seat?',
  		'part_b_jp'	: '座席を探するのを手伝ってもらえますか?'
  	},
  	{
  		'part_a_en' 	: 'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.',
  		'part_a_jp' 	: 'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
  		'part_b_en' 	: 'Thanks. Can you help with my bag?',
  		'part_b_jp'	: 'ありがとうございます。ちょっと手伝ってもらえますか'
  	},
  	{
  		'part_a_en' 	: 'Sure. Would you like to put in the overhead compartment?',
  		'part_a_jp' 	: 'こはい。上の棚へ入れますか？',
  		'part_b_en' 	: 'Yes, please.',
  		'part_b_jp'	: 'はい、お願いします。'
  	},
  	{
  		'part_a_en' 	: 'Here. Let me know if you need to take it out.',
  		'part_a_jp' 	: 'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
  		'part_b_en' 	: 'Thank you so much.',
  		'part_b_jp'	: 'ありがとうございます。'
  	}]
	},
	{
	'title' : 'Changing seats',
	'set'  :
	[{
			'part_a_en' 	: 'welcome aboard',
			'part_a_jp' 	: 'こんにちは。',
			'part_b_en' 	: 'Hi. Can you help me find my seat?',
			'part_b_jp'	: '座席を探するのを手伝ってもらえますか?'
		},
		{
			'part_a_en' 	: 'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.',
			'part_a_jp' 	: 'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
			'part_b_en' 	: 'Thanks. Can you help with my bag?',
			'part_b_jp'	: 'ありがとうございます。ちょっと手伝ってもらえますか'
		},
		{
			'part_a_en' 	: 'Sure. Would you like to put in the overhead compartment?',
			'part_a_jp' 	: 'こはい。上の棚へ入れますか？',
			'part_b_en' 	: 'Yes, please.',
			'part_b_jp'	: 'はい、お願いします。'
		},
		{
			'part_a_en' 	: 'Here. Let me know if you need to take it out.',
			'part_a_jp' 	: 'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
			'part_b_en' 	: 'Thank you so much.',
			'part_b_jp'	: 'ありがとうございます。'
		}]
	}]
},
{
	'data_type'	: 'Pattern',
	'test_type'	:	'Practice',
	'data'	:
	[{
	'title' : 'Asking for help',
  'set'  :
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
	},
	{
	'title' : 'Asking for help',
	'set'  :
	[{
			'pattern_en'  : 'May I see your~',
			'pattern_jp'  : '~を見せて頂けますか?, ~いただけますか？',
		},
		{
			'pattern_en'  : 'Is there ~',
			'pattern_jp'  : '~ありますか？',
		}]
	}]
},
{
	'data_type'	: 'Vocabulary',
	'test_type'	:	'Practice',
	'data'	:
	[{
		'title' : 'vocabulary package 1',
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
}];




const dailyData2 =
[{
	'type'	: 'Vocabulary Quiz',
	'date'	: '2017-09-27 18:30:00',
	'data'	:
	[{	// this is because to match the json format in practice
		'title': 'Voca Quiz 1',
		'log' :[
		{
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
	'type'	:	'Pattern Quiz',
	'date'	:	'2017-09-27 20:00:00',
	'data'	:
	[{
		'title': 'Pattern Quiz 1',
		'log' :
		[{
			'pattern'		: 'is there~',
			'pattern_jp': '그곳에 ~ ',
			'log':
			[{
				'variable'		: 'a bathroom',
				'question'		: '저기 화장실 있나요?',
				'answer'			: 'is there a bathroom',
				'user_answer'	: 'is there a bathroom',
				'result'			: true
			},
			{
				'variable'		: 'my phone',
				'question'		: '그곳에 나의 똥이 있나요?',
				'answer'			: 'is there my phone',
				'user_answer'	: 'is there phone',
				'result'			: true		// 만약 답을 틀렸다하고 유사값을 높게 (최대한 신빙성있는 값) 줄 수 있다면 much better
			}]
		},
		{
			'pattern'		: 'may i see your~',
			'pattern_jp': '제가 ~ 을 봐도 될까요?',
			'log':
			[{
				'variable'		: 'a bathroom',
				'question'		: '저기 갓나가 있나요?',
				'answer'			: 'is there a bathroom',
				'user_answer'	: 'is there a bathroom',
				'result'			: true
			},
			{
				'variable'		: 'my phone',
				'question'		: '그곳에 나의 콜라가 있나요?',
				'answer'			: 'is there my phone',
				'user_answer'	: 'is there phone',
				'result'			: true		// 만약 답을 틀렸다하고 유사값을 높게 (최대한 신빙성있는 값) 줄 수 있다면 much better
			}]
		}]
	}]
},
{
	'type'	:	'Dialogue Quiz',
	'date'	: 	'2017-09-27',		// purpose to check if this quiz has been taken or not (for all three quiz)
 	'data'	:
	[{
		'title': 'Dialogue Quiz 1',
		'log' :
		[{
			'topic'	:	'asking for help',
			'date'	:	'2017-09-27 20:00:00',
			'log'		:
			[{
				'question'		:	'Welcome aboard',
				'question_jp'	:	'こんにちは。',
				'answer'			:	'Hi. Can you help me find my seat?',
				'answer_jp'		:	'座席を探するのを手伝ってもらえますか?',
				'user_answer'				:	'Find my fucking seat',
				'result'			:	false
			},{
				'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
				'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
				'answer'			:	'Thanks. can you help me with this bag?',
				'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
				'user_answer'				:	'My FUCKING bag!!!!',
				'result'			:	true
			},{
				'question'		:	'Sure. Would you like to put in the overhead compartment?',
				'question_jp'	:	'はい。上の棚へ入れますか？',
				'answer'			:	'Yes, please.',
				'answer_jp'		:	'はい、お願いします。',
				'user_answer'				:	'fuck no.',
				'result'			:	false
			},{
				'question'		:	'Here. Let me know if you need to take it out.' ,
				'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
				'answer'			:	'Thank you so much?',
				'answer_jp'		:	'ありがとうございます。',
				'user_answer'				:	'oh my dear fucking god',
				'result'			:	true
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
				'user_answer'			:	'Find my fucking seat',
				'result'		:	false
			},{
				'question'		:	'Sure. May I see your boarding pass, please? Your seat is 32A and 32B. Take this aisle and go straight ahead.' ,
				'question_jp'	:	'かしこまりました。搭乗券をを見せて頂けますか？ お客様の座席が32A,32Bでございます。 この通路から直進です。',
				'answer'		:	'Thanks. can you help me with this bag?',
				'answer_jp'		:	'ありがとうございます。ちょっと手伝ってもらえますか？',
				'user_answer'			:	'My FUCKING bag!!!!',
				'result'		:	true
			},{
				'question'		:	'Sure. Would you like to put in the overhead compartment?',
				'question_jp'	:	'はい。上の棚へ入れますか？',
				'answer'		:	'Yes, please.',
				'answer_jp'		:	'はい、お願いします。',
				'user_answer'			:	'fuck no.',
				'result'		:	false
			},{
				'question'		:	'Here. Let me know if you need to take it out.' ,
				'question_jp'	:	'はい、どうぞ。 もし引き出す必要がございましたら教えて下さい。',
				'answer'		:	'Thank you so much?',
				'answer_jp'		:	'ありがとうございます。',
				'user_answer'			:	'oh my dear fucking god',
				'result'		:	true
			}]
		}]
	}]
}];



export function getWeeks(){
  return (dispatch, getState) => {
    const state = getState();
    let jwtToken = state.auth.jwtToken;
    dispatch({
      type:"SEARCH_WEEK_FULFILLED",
      payload: {'titles': titles, 'weeklyStatus':weeklyStatus}
    });
  };
}

export function getDay(week, day){
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: "SEARCH_DAY_FULFILLED",
      payload: dailyData3
    });
  };
}

// export function getQuiz(week, day, type){
// 	return (dispatch, getState) => {
// 		dispatch({
// 			type: "SEARCH_QUIZ_FULFILLED",
// 			payload: quizData
// 		});
// 	};
// }
