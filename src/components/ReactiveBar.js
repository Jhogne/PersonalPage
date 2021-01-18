import React from 'react'

import Sidebar from 'components/Sidebar';
import Typography from '@material-ui/core/Typography'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import GithubIcon from '@material-ui/icons/GitHub'
import cx from 'classnames'

import styles from 'styles/ReactiveBar.module.css'

function ReactiveBar(props) {
  return (
    <Sidebar forMobile={props.forMobile}>
      <Typography 
        className={ cx(styles.lightText, styles.name) } 
        variant="overline" >
        Jonas Högne 
      </Typography>
      <Typography 
        className={cx(styles.lightText, styles.occupation)} 
        variant="caption">
        Student at Chalmers University of Technology 
      </Typography>
      <div className="footer">
        <hr style={{ backgroundColor: '#eeeeee' }} />
        <a href="https://www.linkedin.com/in/jonas-hogne/">
          <LinkedinIcon className={styles.icon} />
        </a>
        <a href="https://www.github.com/JHogne">
          <GithubIcon className={styles.icon} />
        </a>
        <a href="mailto:jonas.hogne@protonmail.com">
          <MailIcon className={styles.icon} />
        </a>
      </div>
    </Sidebar>
  );
}

export default ReactiveBar;