import React from 'react';

import Grid from '@material-ui/core/Grid';

import './App.css';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

import LinkedinIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import GithubIcon from '@material-ui/icons/GitHub'
import { Typography } from '@material-ui/core';


const App = () => (
  <Grid container>
    <Grid item>
      <Sidebar>
        <Typography className="lightText name" variant="h2">Jonas Högne </Typography>
        <div className="footer">
          <hr style={{backgroundColor:'#eeeeee'}}/>
          <MailIcon className="icon"/>
          <LinkedinIcon className="icon"/>
          <GithubIcon className="icon"/>
        </div>
      </Sidebar>
    </Grid>
    <Grid item xs>
      <div>
        <Typography variant="h4">What I have done</Typography>
        <Projects />
      </div>
    </Grid>
  </Grid>
);

export default App;
