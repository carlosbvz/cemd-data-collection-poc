import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DistrictService from "../services/DistrictService";
import * as queries from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { createDistrict, updateDistrict } from "../graphql/mutations";

const cache = {};

const districtService = new DistrictService();
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

function getTableData({ type, cemdAPIDataItems, overridesDataItems }) {
  switch (type) {
    case "district":
      // Merge
      const mergedData = cemdAPIDataItems?.map((item) => {
        const overrideItem = overridesDataItems.find(
          (overrideItem) => overrideItem.lea_id === item.id
        );
        // This is not a nice algorithm, but it works for now
        if (overrideItem) {
          return {
            id: item.id,
            name: overrideItem.name || item.name,
            address: overrideItem.address || item.address,
            city: overrideItem.city || item.city,
            logos: overrideItem.logos || item.logos,
            website: overrideItem.website || item.website,
          };
        }
        return item;
      });

      const districtRows = [];
      mergedData?.forEach((district) => {
        districtRows.push({
          id: district.id,
          name: district.name,
          address: district.address,
          city: district.city,
          logos: district.logos,
          website: district.website,
        });
      });
      return [districtRows, districtColumns];
    default:
      return [];
  }
}

export default function DistrictsDataGrid({ type }) {
  const [cemdAPIData, setCemdAPIData] = useState(null);
  const [overridesData, setOverridesData] = useState(null);
  const [mergedData, setMergedData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Loading Data
  useEffect(() => {
    const loadData = async () => {

      let data, cemdAPIDataItems, overridesDataItems;

      if (cache[type]) {
        data = cache[type].data;
        cemdAPIDataItems = cache[type].cemdAPIDataItems;
        overridesDataItems = cache[type].overridesDataItems;
      } else {
        // Get CEMD API Data
        const apiData = (await districtService.getDistricts()) as any;
        cemdAPIDataItems = apiData?.results;
        // Get Overrides Data
        const overrides = (await API.graphql({
          query: queries.listDistricts,
        })) as any;
        overridesDataItems = overrides.data.listDistricts.items as any[];
        // Get Merge
        data = getTableData({ type, cemdAPIDataItems, overridesDataItems });
        // Cache
        cache[type] = {
          data,
          cemdAPIDataItems,
          overridesDataItems,
        };
      }

      // Set State
      setMergedData({
        rows: data[0],
        columns: data[1],
      });
      setCemdAPIData(cemdAPIDataItems);
      setOverridesData(overridesDataItems);
      setLoading(false);
    };
    loadData();
  }, [type]);

  const handleOnItemChange = async (data) => {
    try {
      const item = {
        lea_id: data.id,
      };
      item[data.field] = data.value;

      const existingItem = overridesData.find(
        (item) => item.lea_id === data.id
      );

      // Update
      if (existingItem && existingItem?.lea_id) {
        // Need to get the item newest version
        const district = (await API.graphql({
          query: queries.getDistrict,
          variables: { lea_id: existingItem?.lea_id },
        })) as any;
        const districtItem = district?.data?.getDistrict;
        // Using latest item
        const input = {
          lea_id: districtItem?.lea_id,
          _version: districtItem._version,
          ...item,
        };
        // Updating...
        await API.graphql(graphqlOperation(updateDistrict, { input }));
        // Create
      } else {
        const newItem = (await API.graphql(
          graphqlOperation(createDistrict, { input: item })
        )) as any;
        setOverridesData([...overridesData, newItem.data.createDistrict]);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!mergedData?.columns || !mergedData?.rows) {
    return null;
  }

  return (
    <div style={{ height: 640, width: "100%" }}>
      <DataGrid
        rows={mergedData?.rows}
        columns={mergedData?.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={handleOnItemChange}
      />
    </div>
  );
}
