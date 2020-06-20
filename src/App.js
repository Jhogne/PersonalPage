import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Projects from 'components/Projects';
import ReactiveBar from 'components/ReactiveBar'

import 'styles/App.css';


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
    const contentHeight = this.state.isMobile ? (window.innerHeight - 300) : '100vh';
    return (
      <Grid 
        container 
        className="bar">
        <Grid item>
          <ReactiveBar forMobile={this.state.isMobile}/>
        </Grid>
        <Grid 
          item 
          xs 
          className='content' 
          style={{maxHeight: contentHeight }}>
          <Typography 
            variant="h2" 
            className='content-header'>
            What I have done
          </Typography>
          <Projects />
        </Grid>
      </Grid>
    );
  }
}
export default App;
