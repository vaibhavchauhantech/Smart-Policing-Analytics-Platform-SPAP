// frontend/src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';
import { getData } from '../services/dataService';

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
      <h1>Smart Policing Analytics Dashboard</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
