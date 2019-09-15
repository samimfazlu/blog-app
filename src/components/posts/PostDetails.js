import React from 'react';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import { Typography, Button, withStyles } from '@material-ui/core';

import { parseTextToHtml } from '../../utils';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'Column'
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
      <Typography variant='h5' component='h3'>
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
      >
        Written By Samim on 23rd June
      </Typography>
      <br />
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
    </>
  );
};

export default withStyles(styles)(withRouter(PostDetails));
