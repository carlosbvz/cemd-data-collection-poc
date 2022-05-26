import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SideBar({onClick}) {

  const handleItemClick = (value) => {
    onClick(value);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Stack spacing={2} ml={2}>
        <Button variant="contained">Create Task</Button>
      </Stack>

      <ListItemButton onClick={() => handleItemClick('district')}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Districts" />
      </ListItemButton>

      {/* <ListItemButton onClick={() => handleItemClick('products')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton> */}

      <ListItemButton onClick={() => handleItemClick('tasks')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItemButton>

    </List>
  );
}
