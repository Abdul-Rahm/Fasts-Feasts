import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from "material-table";

const DataTable = ({ columns, data, title, actions }) => {
  const defaultMaterialTheme = createTheme();
  return (
    <ThemeProvider theme= {defaultMaterialTheme}>
      <MaterialTable 
        columns={columns}
        data={data}
        title={title}
        actions={actions}       
      />
    </ThemeProvider>
  )
}

export default DataTable;
