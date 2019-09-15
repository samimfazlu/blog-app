import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = {};

const Footer = ({ classes }) => {
  return (
    <Typography
      variant='caption'
      align='center'
      paragraph={true}
      className={classes.footer}
    >
      &copy; Webdeveloper BD | All Rights reserved
    </Typography>
  );
};

export default withStyles(styles)(Footer);
