import React from 'react';
import ProNav from '../components/pro.nav';

class Analysis extends React.Component{

  render(){
    console.log("analysis is called");
    return(
      <div>
        <ProNav />
        <div>
          Pro Analysis Page
        </div>
      </div>
    );
  }
}

export default Analysis;
