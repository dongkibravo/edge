import React from 'react';
import Navbar from '../components/NavBar.console.js';
import { Grid } from 'react-bootstrap';

export const Root = (props) => {
  return(
    <Grid style={{height: "100%"}}>
      <Navbar />
      {props.children}
    </Grid>
  );
};
