import { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Grid, TextField, Box } from "@mui/material";
import Collectors from "../mock-data/collectors";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function getColumns(Cell) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 250,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 250,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""}.${
          params.row.lastName || ""
        }@edsolns.com`,
    },
    {
      field: 'isManager',
      width: 150,
      headerName: 'Is Manager',
      type: 'boolean',
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      renderCell: Cell,
    },
  ];
  return columns;
}

export default function CollectorsGrid() {
  const [state, setState] = useState(() => {
    return {
      columns: [],
      rows: [],
      newName: "",
      newLastName: "",
    };
  });
  const Cell = (params: GridRenderCellParams) => {
    return (
      <>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => {
            console.log("Removing User")
          }}
        >
          <DeleteIcon />
        </IconButton>
      </>
    );
  }

  useEffect(() => {
    setState({
      ...state,
      columns: getColumns(Cell),
      rows: Collectors,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleOnCreate = () => {
    setState({
      ...state,
      rows: [
        ...state.rows,
        {
          id: state.rows.length + 1,
          firstName: state.newName,
          lastName: state.newLastName,
        },
      ] as any,
      newName: "",
      newLastName: "",
    });
  };

  return (
    <>
      <Grid mb={2} container>
        <Grid item mr={2} xs={2}>
          <TextField
            name="newName"
            id="new-name"
            label="Name"
            variant="standard"
            fullWidth
            value={state.newName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item mr={2} xs={2}>
          <TextField
            name="newLastName"
            id="new-lastname"
            label="Last Name"
            variant="standard"
            fullWidth
            value={state.newLastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item mr={2} xs={2} sx={{ display: "flex", alignItems: "end" }}>
          <Button variant="text" onClick={handleOnCreate}>
            Create
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={state.rows}
          columns={state.columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
