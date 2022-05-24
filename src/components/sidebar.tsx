import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SideBar({onClick}) {
  const [open, setOpen] = React.useState(true);

  const handleItemClick = (value) => {
    onClick(value);
  };

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Actions
      //   </ListSubheader>
      // }
    >
      <Stack spacing={2} ml={2}>
        {/* <Button variant="text">Text</Button> */}
        <Button variant="contained">Create Task</Button>
        {/* <Button variant="outlined">Outlined</Button> */}
      </Stack>

      <ListItemButton onClick={() => handleItemClick('district')}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Districts" />
      </ListItemButton>

      <ListItemButton onClick={() => handleItemClick('products')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
      <ListItemButton onClick={handleToggleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleItemClick('tasks-all')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleItemClick('tasks-by-manager')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="By Manager Collector" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleItemClick('tasks-by-collector')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="By Collector" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
