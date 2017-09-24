import React from 'react';
import { Row, Col, Grid, Image } from 'react-bootstrap';
import '../styles/css/dashboard2.css';
import DayInfoTable from '../components/DayInfoTable';

class Dashboard extends React.Component{
  render(){
    return(
      <Grid className="main_content">
        <DayInfoTable />
      </Grid>
    );
  }
}

export default Dashboard;
