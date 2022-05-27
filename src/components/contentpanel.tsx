import React from "react";
import { Typography } from "@mui/material";
import DistrictsDataGrid from "./DistrictsDataGrid";
import CollectorsGrid from "./CollectorsGrid";
import SingleDistrict from "./SingleDistrict";
import ProductsListGrid from "./ProductsListGrid";

type Props = {
  type: string;
};

const titles = {
  district: "District",
  products: "Products",
  collector: "Collectors",
  tasks: "All Tasks",
  "single-district": "Single District",
}

export default function Contentpanel({ type }: Props) {

  console.log("type", type);
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        {titles[type]}
      </Typography>
      {type === "district" && <DistrictsDataGrid type={type} />}
      {type === "single-district" && <SingleDistrict />} 
      {type === "products" && <ProductsListGrid />} 
      {type === "collector" && <CollectorsGrid  />}
    </>
  );
}
