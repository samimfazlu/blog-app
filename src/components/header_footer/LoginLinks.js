import React from 'react';
import { Button, Fab } from '@material-ui/core';

const RegisterLinks = () => {
  return (
    <>
      <Button color='inherit'>Add Post</Button>
      <Button color='inherit'>Log Out</Button>
      <Fab size='medium' color='primary'>
        SH
      </Fab>
    </>
  );
};

export default RegisterLinks;
