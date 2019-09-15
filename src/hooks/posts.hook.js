import { useState } from 'react';

export default (postData = []) => {
  const [posts, setPosts] = useState(postData);
  return {
    posts,
    addPost(value) {
      setPosts([...posts, value]);
    },
    deletePost(id) {
      setPosts(posts.filter(post => post.id !== id));
    },
    updatePost(updatedPost) {
      setPosts(
        posts.map(post =>
          post.id === updatedPost.id ? (post = updatedPost) : post
        )
      );
    }
  };
};
