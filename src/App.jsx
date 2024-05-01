import { Box, Link, Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100dvw"
        gap={5}
        paddingY={2}
        borderBottom={1}
        borderColor="gray"
      >
        <Link underline="none" href="#">
          HOME
        </Link>
        <Link underline="none" href="#">
          ABOUT US
        </Link>
        <Link underline="none" href="#">
          SERVICES
        </Link>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            PAGES <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>COURIER</MenuItem>
            <MenuItem onClick={handleClose}>TRACK YOUR PACKET</MenuItem>
            <MenuItem onClick={handleClose}>JOB</MenuItem>
          </Menu>
        </div>
        <Button variant="outlined">CONTACT US</Button>
      </Box>
    </>
  );
};

export default App;
