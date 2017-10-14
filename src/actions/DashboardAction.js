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

export function getWeeks(){
  return (dispatch, getState) => {
    // const state = getState();
    // let jwtToken = state.auth.jwtToken;
    dispatch({
      type:"SEARCH_WEEK_FULFILLED",
      payload: {'titles': titles, 'weeklyStatus':weeklyStatus}
    });
  };
}

export function getDay(week, day){
  return (dispatch, getState) => {
    // const state = getState();
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
