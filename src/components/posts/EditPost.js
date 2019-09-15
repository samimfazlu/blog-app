import React from 'react';

import { PostForm } from './index';

const EditPost = ({ updatePost, post }) => {
  return <PostForm updatePost={updatePost} post={post} />;
};

export default EditPost;
