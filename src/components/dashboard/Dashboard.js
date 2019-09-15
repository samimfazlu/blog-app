import React from 'react';
import { Typography } from '@material-ui/core';

import { Posts } from '../posts';

const DashBoard = props => {
  const { postsData } = props;

  return (
    <>
      <Typography variant='h6'>DashBoard</Typography>
      <Posts postsData={postsData} />
    </>
  );
};

export default DashBoard;
