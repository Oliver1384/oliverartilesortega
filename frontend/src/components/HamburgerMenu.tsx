import { AppBar, Drawer, IconButton, Toolbar, Box } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  navbar: {
    justifyContent: 'space-around',
    '@media(max-width:480px)': {
      display: 'none'
    }
  },
  hamburgerIcon: {
    display: 'block',
    marginRight: '2rem',
    '@media(min-width:480px)': {
      display: 'none'
    },
    backgroundColor: 'black'
  }
})

export const HamburgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          onClick={() => setIsDrawerOpen(true)}
          className={classes.hamburgerIcon}>
          <MenuIcon />
        </IconButton>
        <div className={`${classes.navbar}`}>
          <button>Biografía</button>
        </div>
        <Drawer
          anchor="right"
          variant="temporary" //if and how easily the drawer can be closed
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          //onOpen={() => setIsDrawerOpen(true)} function that is called when the drawer should open
        >
          <Box>{/* The inside of the drawer */}</Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
