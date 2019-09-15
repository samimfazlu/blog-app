import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { spacing } from '@material-ui/system';

import { styles } from './style';

const SideBar = ({ classes }) => {
  return (
    <>
      <Typography variant='h5' component='h2' className={classes.h2}>
        SideBar
      </Typography>
      <hr />
    </>
  );
};

export default withStyles(styles)(SideBar);
