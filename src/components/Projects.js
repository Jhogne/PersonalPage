import React from 'react';

import Grid from '@material-ui/core/Grid';
import ProjectData from 'data/ProjectList'

import ProjectCard from 'components/ProjectCard'

function Projects(props) {
  const gridItems = ProjectData.map((content) =>
    <Grid 
      item 
      key={content.title}>
      <ProjectCard content={content} />
    </Grid>
  );
  return (
    <Grid 
      container 
      fluid
      spacing={4}
      justify={props.forMobile ? 'center' : 'flex-start'}>
      {gridItems}
    </Grid>
  );
}

export default Projects;



