import React from "react";
import { Typography } from "@mui/material";
import DistrictsDataGrid from "./DistrictsDataGrid";

type Props = {
  type: string;
};

const titles = {
  district: "District",
  products: "Products",
  tasks: "All Tasks",
}

export default function Contentpanel({ type }: Props) {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        {titles[type]}
      </Typography>
      {titles[type] === "District" && <DistrictsDataGrid type={type} />}
      
    </>
  );
}
