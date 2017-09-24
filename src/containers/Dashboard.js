import React from 'react';
import '../styles/css/dashboard.css';
import WeekTable from '../components/WeekTable';

const weeks = [
  {
    'week_num': 1,
    'week_title': 'Airport',
    'days':[
      {
        'day': 1,
        'status': 'complete'
      },
      {
        'day': 2,
        'status': 'ongoing'
      },
      {
        'day': 3,
        'status': 'locked'
      },
      {
        'day': 4,
        'status': 'pro_locked'
      }
    ]
  },
  {
    'week_num': 2,
    'week_title': 'Airplane',
    'days':[
      {
        'day': 1,
        'status': 'ongoing'
      },
      {
        'day': 2,
        'status': 'locked'
      },
      {
        'day': 3,
        'status': 'locked'
      },
      {
        'day': 4,
        'status': 'pro_locked'
      }
    ]
  },
  {
    'week_num': 3,
    'week_title': 'Airdodododododo',
    'days':[
      {
        'day': 1,
        'status': 'locked'
      },
      {
        'day': 2,
        'status': 'locked'
      },
      {
        'day': 3,
        'status': 'locked'
      },
      {
        'day': 4,
        'status': 'pro_locked'
      }
    ]
  }
];


class Dashboard extends React.Component{
  render(){
    return(
      <WeekTable weeks={weeks} />
    );
  }
}

export default Dashboard;
