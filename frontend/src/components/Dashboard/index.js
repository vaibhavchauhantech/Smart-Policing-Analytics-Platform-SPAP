// frontend/src/components/Dashboard/index.js

import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getData } from '../../services/dataService';
import Chart from './Chart';
import DataList from './DataList';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch real data from backend service
    getData()
      .then(response => setData(response))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Chart data={data} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DataList data={data} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
