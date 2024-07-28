// src/App.jsx

import React from 'react';
import { Dashboard as DashboardIcon } from '@mui/icons-material';
import Dashboard from './components/Dashboard'; // Ensure this path is correct

import './App.css';

function App() {
  return (
    <>
      <div>
        <DashboardIcon /> {/* This renders the MUI Dashboard icon */}
        <Dashboard /> {/* This renders your custom Dashboard component */}
      </div>
    </>
  );
}

export default App;
