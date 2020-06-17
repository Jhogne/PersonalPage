import React from 'react';

import Grid from '@material-ui/core/Grid';
import ProjectData from '../data/projects'

import ProjectCardDemo from './ProjectCardDemo'

function Projects() {
  const gridItems = ProjectData.map((content) =>
    <Grid item key={content.title}>
      <ProjectCardDemo content={content} />
    </Grid>
  );
  return (
    <Grid container justify='center' spacing={4}>
      {gridItems}
    </Grid>
  );
}

export default Projects;



