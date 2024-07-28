import React from 'react';
import { bootcamps } from '../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';


const Bootcamps = () => {
  return (
  <div>
    <List>
      {bootcamps.map((bootcamp) => (
        <ListItem divider sx={{ display: 'block' }}>
            <Link underline='no' href={bootcamp.url}>{bootcamp.title}</Link>
        </ListItem>
      ))}
    </List>
  </div>
  );
};

export default Bootcamps;
