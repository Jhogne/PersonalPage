import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GithubIcon from '@material-ui/icons/GitHub'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'

import styles from './ProjectCard.module.css'

function ProjectCard(props) {
  const classes = makeStyles();
  return(
    <Card className={classes.root}>
      <CardContent className={styles.projectContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.content.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.description}
        </Typography>

      </CardContent>
      <CardActions className={styles.projectAction}>
        <GithubIcon />
        <Typography variant="body2">
          {props.content.language}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;