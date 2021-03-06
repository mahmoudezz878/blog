import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormModal from "../FormModal/FormModal";

const Navbar = ({ card, setCard }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Button variant="contained" color="warning">
            <FormModal card={card} setCard={setCard} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
