import React from 'react';
import { Button } from '@material-ui/core';

import { Layout } from './components/header_footer';

import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Button variant='outlined' color='primary' size='large'>
          Hello World
        </Button>
      </Layout>
    </>
  );
}

export default App;
