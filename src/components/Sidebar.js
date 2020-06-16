import React from 'react';
import styles from './Sidebar.module.css'

const TOPHEIGHT = '300px'
const SIDEWIDTH = '500px'

function TopBar(props){
  return(
    <div 
      className={styles.bar}
      style={{
          width:'100vw', 
          height:TOPHEIGHT,
        }}>
        {props.children}
    </div>
    );
}

function LeftBar(props) {
  return(
    <div 
      className={styles.bar}
      style={{
        height:'100vh', 
        width:SIDEWIDTH,          
      }}>
      {props.children}
    </div>
  );
}
 

class Sidebar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {topBar: window.innerWidth <= 760};
      this.resize = this.resize.bind(this);
  }
  
  componentDidMount() {
      window.addEventListener('resize', this.resize);
      this.resize();
  }
  resize(props) {
    this.setState({topBar: window.innerWidth <= 760});
  }

  render() {
    if(this.state.topBar) {
        return <TopBar> {this.props.children}</TopBar> 
    } else {
        return <LeftBar> {this.props.children}</LeftBar>
    }
  }
}

export default Sidebar;
