import  React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import {Typography } from '@material-ui/core'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Full Name', width: 200 },
  { field: 'email', headerName: 'Email Id', width: 200 },
  { field: 'phone', headerName: 'Mobile No', width: 150 },
  { field: 'age', headerName: 'Age', width: 120 },
  { field: 'date', headerName: 'Date',type:"date", width: 120 },
  { field: 'time', headerName: 'Time', width: 120 },

  
];

const rows = [
  { id: 1, email: 'Batman@marvel.com',phone:'99999999' ,name: 'Batman', age: 35 ,date:"16/6/2021",time:'2.00 pm'},
  { id: 2, email: 'Superman@marvel.com',phone:'9566474' ,name: 'superman', age: 42,date:"10/6/2021",time:'10.00 am' },
  { id: 3, email: 'Ironman@marvel.com',phone:'4457373', name: 'Ironamn', age: 45,date:"12/6/2021",time:'11.00 pm' },
  { id: 4, email: 'Wolverine@marvel.com',phone:'64448493', name: 'Wolverin', age: 16,date:"12/7/2021",time:'1.00 pm' },
  { id: 5, email: 'antman@marvel.com', phone:'85858859', name: 'Antman', age: 29,date:'25/6/2021',time:'1.20 pm' },
  { id: 6, email: 'Thor@marvel.com',phone:'8578393', name: "Thor", age: 150,date:"28/6/2021",time:'9.30 pm' },
  { id: 7, email: 'Batman@marvel.com',phone:'74848838', name: 'Ferrara', age: 44,date:"14/6/2021",time:'3.00 pm' },
  { id: 8, email: 'Batman@marvel.com',phone:'948389202', name: 'Rossini', age: 36,date:"14/7/2021",time:'5.00 pm' },
  { id: 9, email: 'Batman@marvel.com',phone:'995377282', name: 'Harvey', age: 65,date:"11/5/2021",time:'6.00 pm' },
];



export default function DataTable() {
  return (
    <>
    <Typography variant="h4" >Details of registered user for appointment</Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    </>
  );
}
