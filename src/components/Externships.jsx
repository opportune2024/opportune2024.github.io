import React from 'react';
import { externships } from '../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


const Externships = () => {
  return (
  <div>
    <List>
      {externships.map((externship) => (
        <ListItem divider sx={{ display: 'block' }}>
            <Link underline='no' href={externship.url}>{externship.title}</Link>
        </ListItem>
      ))}
    </List>
  </div>
  );
};

export default Externships;
