import { styled, TableRow } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import "./Tables.css";


const columns = [

  { field: 'Contact Name', headerName: 'Contact name', width: 300 },
  { field: 'Status', headerName: 'Status', width: 130 },
  { field: 'Phone', headerName: 'Phone', width: 150 },
  { field: 'Note', headerName: 'Note', width: 130 },
  { field: 'Latest task', headerName: 'Latest task', width: 160 },
  { field: 'Latest DeaL', headerName: 'Latest Deal', width: 160 },
  { field: 'Date of Creation', headerName: 'Date of Creation', width: 160 },
  { field: 'P/W/L Value', headerName: 'P/W/L Value', width: 160 },
  
  // {
  //   field: 'Phone',
  //   headerName: '',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'Note',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {id:"1", ContactName : "ABC Corp" , Status:"Open" , Date:"30 June 2022" },
  {id:"2", ContactName : "AbhijitDas gupta" , Status:"Open" , Date:"20 June 2022" },
  {id:"3", ContactName: "Guneet Makkar" , Status:"Open" , Date:"10 June 2022" },
  {id:"4", ContactName : "John Smith" , Status:"Open" , Date:"23 June 2022" },
  {id:"5", ContactName : "San Bhaskaran" , Status:"Open" , Date:"25 June 2022" },
  {id:"6", ContactName : "Shelina Kyle" , Status:"Open" , Date:"4 June 2022" },
  {id:"7", ContactName : "Shibhu p" , Status:"Open" , Phone:"9867543467", Date:"22 June 2022" , Value:"$25000/-" },
  {id:"8", ContactName : "Spjain" , Status:"Open" , Date:"26 June 2022" },
];


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

}));

export default function DataTable() {
  return (
    <div className='table'>
    <div style={{ height: 527, width: '100%' }}>
      <DataGrid className='table-data'
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
