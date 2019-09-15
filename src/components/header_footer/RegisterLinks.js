import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink as LinkRouter } from 'react-router-dom';

const AdapterLink = React.forwardRef((props, ref) => (
  <LinkRouter innerRef={ref} {...props} />
));

const RegisterLinks = () => {
  return (
    <>
      <Button color='inherit' component={AdapterLink} to='/register'>
        Register
      </Button>
      <Button color='inherit' component={AdapterLink} to='/login'>
        Login
      </Button>
    </>
  );
};

export default RegisterLinks;
