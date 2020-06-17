import React from 'react';

import Grid from '@material-ui/core/Grid';

import './App.css';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';

import LinkedinIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import GithubIcon from '@material-ui/icons/GitHub'
import { Typography } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth <= 760 };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }
  resize(props) {
    this.setState({ isMobile: window.innerWidth <= 760 });
  }

  render() {
    const contentHeight = this.state.isMobile ? (window.innerHeight - 300) + 'px' : '100vh';
    return (
      <Grid container>
        <Grid item>
          <Sidebar topBar={this.state.isMobile} style={{ position: 'fixed' }}>
            <Typography className="lightText name" variant="overline" style={{ fontSize: '2.5rem' }}>Jonas Högne </Typography>
            <div className="footer">
              <hr style={{ backgroundColor: '#eeeeee' }} />
              <a href="https://www.github.com/JHogne"><GithubIcon className="icon" style={{ fontSize: 32 }} /></a>
              <a href="mailto:jonas.hogne@gmail.com"><MailIcon className="icon" style={{ fontSize: 32 }} /></a>
              <a href="https://www.linkedin.com/in/jonas-högne-661901170">
                <LinkedinIcon className="icon" style={{ fontSize: 32 }} /></a>
            </div>
          </Sidebar>
        </Grid>
        <Grid item xs className='content' style={{ maxHeight: contentHeight }}>
          <Typography variant="h6" style={{ marginTop: '50px', marginBottom: '30px', fontSize: '2rem' }}>What I have done</Typography>
          <Projects />
        </Grid>
      </Grid>
    );
  }
}
export default App;
