import {useState} from "react";
import { Grid} from  "@mui/material";
import SideBar from "../components/sidebar";
import ContentPanel from "../components/contentpanel";

export default function Home() {
  const [type, setType] = useState("district");

  function handleSideBarClick(value) {
    setType(value);
  }

  return (
    <Grid container spacing={2} mt={1}>
      <Grid item xs={2}>
        <SideBar onClick={handleSideBarClick}/>
      </Grid>
      <Grid item xs={9} ml={2}>
        <ContentPanel type={type} />
      </Grid>
    </Grid>
  )
}
