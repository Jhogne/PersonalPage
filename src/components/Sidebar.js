import React from 'react';
import styles from 'styles/Sidebar.module.css'

const TOPHEIGHT = '300px'
const SIDEWIDTH = '700px'

function TopBar(props) {
  return (
    <div
      className={styles.bar}
      style={{
        width: '100vw',
        height: TOPHEIGHT,
      }}>
      {props.children}
    </div>
  );
}

function LeftBar(props) {
  return (
    <div
      className={styles.bar}
      style={{
        height: '100vh',
        width: SIDEWIDTH,
      }}>
      {props.children}
    </div>
  );
}

class Sidebar extends React.Component {
  render() {
    if (this.props.forMobile) {
      return <TopBar> {this.props.children}</TopBar>
    } else {
      return <LeftBar> {this.props.children}</LeftBar>
    }
  }
}

export default Sidebar;
