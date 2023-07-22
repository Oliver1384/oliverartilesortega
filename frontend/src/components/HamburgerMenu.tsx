import { AppBar, Drawer, IconButton, Toolbar, Box } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    justifyContent: "space-around",
    "@media(max-width:480px)": {
      display: "none",
    },
  },
  hamburgerIcon: {
    display: "block",
    marginRight: "2rem",
    "@media(min-width:480px)": {
      display: "none",
    },
    backgroundColor:"black"
  },
});

export const HamburgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* hamburger icon shows the drawer on click */}
        <IconButton
          edge="start"
          onClick={() => setIsDrawerOpen(true)}
          className={classes.hamburgerIcon}
        >
          <MenuIcon />
        </IconButton>
        <div className={`${classes.navbar}`}>
          <button>Biografía</button>
        </div>
        <Drawer
          anchor="right" //from which side the drawer slides in
          variant="temporary" //if and how easily the drawer can be closed
          open={isDrawerOpen} //if open is true, drawer is shown
          onClose={() => setIsDrawerOpen(false)} //function that is called when the drawer should close
          //onOpen={() => setIsDrawerOpen(true)} function that is called when the drawer should open
        >
          <Box>{/* The inside of the drawer */}</Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
