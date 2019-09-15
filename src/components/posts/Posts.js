import React from 'react';
import { Paper, withStyles } from '@material-ui/core';

import PostSummary from './PostSummary';

const styles = {
  paper: {
    padding: '10px',
    margin: '10px 0'
  }
};
const Posts = ({ postsData, deletePost, classes }) => {
  return (
    <>
      {postsData.map(post => (
        <Paper elevation={4} className={classes.paper} key={post.id}>
          <PostSummary post={post} deletePost={deletePost} />
        </Paper>
      ))}
    </>
  );
};

export default withStyles(styles)(Posts);
