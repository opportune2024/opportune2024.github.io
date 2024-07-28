import React from 'react';
import { internships } from '../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


const Internships = () => {
  return (
  <div style={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
    <List>
      {internships.map((internship) => (
        <ListItem divider sx={{ display: 'flex' }}>
            <Link underline='no' href={internship.url}>{internship.title}</Link>
        </ListItem>
      ))}
    </List>
  </div>
  );
};

export default Internships;
