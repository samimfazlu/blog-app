import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Link,
  Box,
  withStyles
} from '@material-ui/core';
import { Link as LinkRouter } from 'react-router-dom';

import RegisterLinks from './RegisterLinks';
import LoginLinks from './LoginLinks';

const styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menu: {
    marginLeft: 'auto'
  }
};

const Header = ({ classes }) => {
  const [auth] = useState(true);
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar className={classes.toolBar}>
          <Link
            to='/'
            component={LinkRouter}
            variant='h6'
            color='inherit'
            underline='none'
          >
            BlogApp
          </Link>
          <Box className='navLinks'>
            {auth ? <LoginLinks /> : <RegisterLinks />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
