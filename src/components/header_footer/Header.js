import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Link } from '@material-ui/core';
import { Link as LinkRouter } from 'react-router-dom';

import RegisterLinks from './RegisterLinks';
import LoginLinks from './LoginLinks';

const Header = () => {
  const [auth] = useState(true);
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <Link
            to='/'
            component={LinkRouter}
            variant='h6'
            color='inherit'
            underline='none'
          >
            BlogApp
          </Link>
          {auth ? <LoginLinks /> : <RegisterLinks />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
