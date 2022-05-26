import React from "react";
import { Typography } from "@mui/material";
import CustomDataGrid from "./CustomDataGrid";

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
      <CustomDataGrid type={type} />
    </>
  );
}
