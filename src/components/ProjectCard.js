import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GithubIcon from '@material-ui/icons/GitHub'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

import styles from './ProjectCard.module.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    background: getRandomGradient(),
  },
});

console.log(getRandomGradient());

function getRandomGradient() {
  var first = Math.floor(Math.random() * 55) - 10;
  var second = Math.floor(Math.random() * 35) + 65;
  return 'linear-gradient(' + Math.floor(Math.random() * 360) + 'deg,' + getRandomColor() + ' ' + first + '%, ' + getRandomColor() + ' ' + second + '%)';
}

function getRandomColor() {
  var h = Math.floor(Math.random() * 360);
  var s = Math.floor(Math.random() * 50);
  var l = Math.floor(Math.random() * 77) + 33;

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.content.image}
        />
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
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;