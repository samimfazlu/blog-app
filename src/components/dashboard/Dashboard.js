import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

import { Posts } from '../posts';
import { styles } from './style';

const DashBoard = ({ postsData, classes }) => {
  return (
    <>
      <Typography variant='h5' component='h2' className={classes.h2}>
        Posts
      </Typography>
      <hr />
      <Posts postsData={postsData} />
    </>
  );
};

export default withStyles(styles)(DashBoard);
