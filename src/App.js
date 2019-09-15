import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import './App.css';

// import { indigo } from '@material-ui/core/colors';
// import blue from '@material-ui/core/colors/blue';

import { Layout } from './components/header_footer';
import DashBoardIndex from './components/dashboard';
import { AddPost, EditPost, PostDetails } from './components/posts';
import { Register, Login } from './components/auth';
import postsData from './postsData';
import usePostsHook from './hooks/posts.hook';

import './App.css';

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: ['Chilanka', 'sans-serief']
  // },
  // palette: {
  //   main: blue
  // }
});
function App() {
  const { posts, addPost, deletePost, updatePost } = usePostsHook(postsData);

  const [selectedPost, setSelectedPost] = useState(null);

  // const addPost = value => {
  //   setPosts([...posts, value]);
  // };

  // const deletePost = id => {
  //   setPosts(posts.filter(post => post.id !== id));
  // };
  const editPost = id => {
    const post = posts.find(post => post.id === Number(id));
    setSelectedPost(post);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              path='/'
              exact
              render={() => <DashBoardIndex postsData={posts} />}
            />
            <Route path='/add' render={() => <AddPost addPost={addPost} />} />
            <Route
              path='/post/:id'
              render={() => (
                <PostDetails
                  postsData={posts}
                  deletePost={deletePost}
                  editPost={editPost}
                />
              )}
            />
            <Route
              path='/edit/:id'
              render={() => (
                <EditPost updatePost={updatePost} post={selectedPost} />
              )}
            />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
