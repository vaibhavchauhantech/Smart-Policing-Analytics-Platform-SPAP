// frontend/src/components/Dashboard/DataList.js

import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const DataList = ({ data }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Data List
      </Typography>
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.title} secondary={item.value} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DataList;
