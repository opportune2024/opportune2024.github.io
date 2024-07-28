import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { JobList } from '../assets';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'job_title', headerName: 'Job Title', width: 200 },
    { field: 'company', headerName: 'Company', width: 200 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'role', headerName: 'Role', width: 200 },
    {
        field: 'application_link',
        headerName: 'Application Link',
        width: 250,
        renderCell: (params) => (
        <Button href={params.value} target="_blank" rel="noopener noreferrer">
            Apply Here
        </Button>
    ),
    },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={JobList}  // Use the imported JSON data
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
