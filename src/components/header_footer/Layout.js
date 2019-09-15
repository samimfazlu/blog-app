import React, { Fragment } from 'react';
import { Container, withStyles } from '@material-ui/core';

import Footer from './Footer';
import Header from './Header';

const styles = theme => ({
  container: {
    padding: '20px 0'
  }
});

const Layout = ({ children, classes }) => (
  <>
    <Header />
    <Container className={classes.container}>{children}</Container>
    <Footer />
  </>
);

export default withStyles(styles)(Layout);
