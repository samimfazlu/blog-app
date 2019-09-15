import React from 'react';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import { Typography, Button, withStyles, Box } from '@material-ui/core';

import { parseTextToHtml } from '../../utils';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'Column'
  },
  title: {
    marginBottom: '16px'
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

const PostDetails = ({
  postsData,
  deletePost,
  history,
  editPost,
  match: {
    params: { id }
  },
  classes
}) => {
  const findPost = postsData.find(post => post.id === Number(id));

  const handleDeletePost = id => {
    deletePost(id);
    history.push('/');
  };
  const handleEditPost = id => {
    editPost(id);
  };

  return (
    <>
      <Typography variant='h5' component='h3' className={classes.title}>
        {findPost.title}
      </Typography>
      <img src={`/img/${findPost.url}`} alt='Pic' />
      <Typography
        variant='body2'
        dangerouslySetInnerHTML={parseTextToHtml(findPost.body)}
      />
      <Typography
        variant='caption'
        display='block'
        style={{ fontStyle: 'italic' }}
        align='right'
      >
        Written By Samim on 23rd June
      </Typography>
      <br />
      <Box className={classes.btnGroup}>
        <Button
          variant='contained'
          color='primary'
          component={RouterLink}
          onClick={() => handleEditPost(id)}
          to={`/edit/${findPost.id}`}
        >
          Edit
        </Button>
        <Button
          onClick={e => handleDeletePost(findPost.id)}
          variant='contained'
          color='primary'
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

export default withStyles(styles)(withRouter(PostDetails));
