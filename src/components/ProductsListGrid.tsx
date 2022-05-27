import * as React from "react";
import { Typography, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import TransferProductToDistrict from "./TransferProductToDistrict";

const districtColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
    editable: true,
  },
  {
    field: "logos",
    headerName: "Logo URL",
    width: 250,
    editable: true,
  },
  {
    field: "website",
    headerName: "Website",
    type: "string",
    width: 250,
    editable: true,
  },
];

const districtRows = [{ id: 1, name: "Demo District Name", address: "Demo District address", city: "Demo City", logos: "", website: "" }];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title_dim",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "publisher_name_dim",
    headerName: "Last Publisher",
    width: 150,
    editable: true,
  },
  {
    field: "grade_level",
    headerName: "Grade Level",
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1234,
    title_dim: 'Hayward Unified',
    publisher_name_dim: "Macmillan",
    grade_level: "HS",
  },
  {
    id: 5678,
    title_dim: 'Advanced Language and Literature',
    publisher_name_dim: "Macmillan",
    grade_level: "HS",
  },
  {
    id: 9012,
    title_dim: 'America Now',
    publisher_name_dim: "Macmillan",
    grade_level: "HS",
  },
];

export default function SingleDistrict() {
  return (
    <>
      <Typography variant="body1" gutterBottom mb={4}>
        List of products in the system
      </Typography>
      <Box sx={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </>
  );
}
