/*
  Project card from https://mui-treasury.com/components/card/
*/

import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 325,
    minHeight: 420,
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
}));

function ProjectCard(props) {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <a href={props.content.source} style={{ textDecoration: 'none' }}>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader
          image={props.content.icon}
          extra={props.content.language}
        />
        <CardContent className={cardStyles.content}>
          <TextInfoContent
            classes={styles}
            overline={props.content.keywords}
            heading={props.content.title}
            body={
              props.content.description
            }
          />
        </CardContent>
      </Card>
    </a>
  );
}

export default ProjectCard