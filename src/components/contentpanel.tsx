import React from "react";
import { Typography } from "@mui/material";
import CustomDataGrid from "../components/datagrid";

type Props = {
  type: string;
};

const titles = {
  district: "District",
  products: "Products",
  "tasks-all": "All Tasks",
  "tasks-by-manager": "Tasks By Manager",
  "tasks-by-collector": "Tasks By Collector",
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
