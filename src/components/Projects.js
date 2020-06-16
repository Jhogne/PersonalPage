import React from 'react';

import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import ProjectData from '../data/projects'

function Projects() {
  const gridItems = ProjectData.map((content) =>
    <Grid item key={content.title}>
      <ProjectCard content={content}/>
    </Grid>   
  );
  return(
    <Grid container justify='center' spacing={3}>
      {gridItems}
    </Grid>
  );
}  

export default Projects;

     
     
