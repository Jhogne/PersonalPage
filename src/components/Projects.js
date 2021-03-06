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
      fluid='false'
      spacing={4}
      alignItems='center'
      justify={props.forMobile ? 'center' : 'flex-start'}
      alignItems='center'
      alignContent='center'
      textAlign='center'
      style={{padding:0}}>
      {gridItems}
    </Grid>
  );
}

export default Projects;



