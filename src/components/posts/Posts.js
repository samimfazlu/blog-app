import React from 'react';
import { Paper } from '@material-ui/core';

import PostSummary from './PostSummary';

const Posts = props => {
  const { postsData, deletePost } = props;
  return (
    <>
      {postsData.map(post => (
        <Paper elevation={4} key={post.id}>
          <PostSummary post={post} deletePost={deletePost} />
        </Paper>
      ))}
    </>
  );
};

export default Posts;
