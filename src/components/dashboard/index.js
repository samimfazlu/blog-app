import React from 'react';
import { Grid } from '@material-ui/core';

import Dashboard from './Dashboard';
import SideBar from './SideBar';

const DashboardIndex = props => {
  const { postsData } = props;

  return (
    <Grid container spacing={2}>
      <Grid item sm={8}>
        <Dashboard postsData={postsData} />
      </Grid>
      <Grid item sm={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
};

export default DashboardIndex;
