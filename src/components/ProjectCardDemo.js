import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

import PythonIcon from './python.png'
import JsIcon from './js.png'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

function getIcon(content) {
  if (content.language === 'Python') {
    return PythonIcon;
  } else if (content.language === 'Javascript') {
    return JsIcon
  }
}

function ProjectCardDemo(props) {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <a href={props.content.source} style={{ textDecoration: 'none' }}>
      <Card className={cx(cardStyles.root, shadowStyles.root)}>
        <BrandCardHeader
          image={
            getIcon(props.content)
          }
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

export default ProjectCardDemo