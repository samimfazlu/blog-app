import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, withStyles, Box } from '@material-ui/core';

import { parseTextToHtml, truncateText } from '../../utils';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'Column'
  },
  button: {
    maxWidth: '300px',
    alignSelf: 'flex-end',
    marginTop: '10px'
  }
};

const PostSummary = ({ post, classes }) => {
  return (
    <Box className={classes.root}>
      <Typography variant='h5' component='h3'>
        {post.title}
      </Typography>
      <Typography
        variant='body2'
        dangerouslySetInnerHTML={parseTextToHtml(truncateText(post.body), 20)}
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        component={RouterLink}
        to={`/post/${post.id}`}
      >
        Read More
      </Button>
    </Box>
  );
};

export default withStyles(styles)(PostSummary);
