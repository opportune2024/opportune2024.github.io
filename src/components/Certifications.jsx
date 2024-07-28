import React from 'react';
import { certificates } from '../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


const Certificates = () => {
  return (
  <div>
    <List>
      {certificates.map((certificate) => (
        <ListItem divider sx={{ display: 'flex' }}>
            <Link underline='no' href={certificate.url}>{certificate.title}</Link>
        </ListItem>
      ))}
    </List>
  </div>
  );
};

export default Certificates;
