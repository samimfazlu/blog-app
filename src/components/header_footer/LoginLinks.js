import React from 'react';
import { Button, Fab } from '@material-ui/core';
import { NavLink as LinkRouter } from 'react-router-dom';

const AdapterLink = React.forwardRef((props, ref) => (
  <LinkRouter innerRef={ref} {...props} />
));

const RegisterLinks = () => {
  return (
    <>
      <Button color='inherit' component={AdapterLink} to='/add'>
        Add Post
      </Button>
      <Button color='inherit'>Log Out</Button>
      <Fab size='medium' color='primary'>
        SH
      </Fab>
    </>
  );
};

export default RegisterLinks;
