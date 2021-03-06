import React from 'react';
import { Helmet } from 'react-helmet'
import Grid from '@material-ui/core/Grid';

import Projects from 'components/Projects';
import ReactiveBar from 'components/ReactiveBar'

import 'styles/App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: window.innerWidth <= 760 };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }
  resize() {
    this.setState({ isMobile: window.innerWidth <= 760 });
  }

  render() {
    const contentHeight = this.state.isMobile ? (window.innerHeight - 300) : '100vh';
    return (
      <>
        <Helmet>
          <title>Jonas Högne</title>
          <meta name='description' content="Jonas Högne's personal website and portfolio" />
        </Helmet>
        <Grid
          container
          className="layout"
          spacing={0}
          style={{
            overflowY: this.state.isMobile ? 'scroll' : 'hidden',
            padding: 0,
            margin: 0,
            top: 0,
            left: 0
          }}>
          <Grid item>
            <ReactiveBar forMobile={this.state.isMobile} style={{ width: '100vw', }} />
          </Grid>
          <Grid
            item
            container
            xs
            style={{
              maxHeight: contentHeight,
              backgroundColor: 'white',
              paddingLeft: this.state.isMobile ? 0 : '25px',
              overflowY: this.state.isMobile ? 'visible' : 'auto',
              overflowX: this.state.isMobile ? 'visible' : 'hidden',
              padding: '30px'
            }}>
            <Projects forMobile={this.state.isMobile} />
          </Grid>
        </Grid>
      </>
    );
  }
}
export default App;