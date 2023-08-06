import { AppBar, Drawer, IconButton, Toolbar, Box } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS } from '../colors'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
  navbar: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: PRIMARY_COLORS.section,
    '@media(max-width:790px)': {
      display: 'none'
    }
  },
  toolBar: {
    backgroundColor: PRIMARY_COLORS.section
  },
  hamburgerIcon: {
    '&.MuiIconButton-root': {
      display: 'none !important',
      marginRight: '2rem',
      color: PRIMARY_COLORS.pageBackground,
      '@media(max-width:790px)': {
        display: 'block !important'
      }
    }
  },
  button: {
    '&.MuiButton-root': {
      backgroundColor: PRIMARY_COLORS.pageBackground,
      color: PRIMARY_COLORS.section
    },
    '&.MuiButton-root:hover': {
      backgroundColor: PRIMARY_COLORS.element,
      color: 'white'
    }
  }
})

export const HamburgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const classes = useStyles()

  return (
    <AppBar position={'static'}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          edge={'start'}
          onClick={() => setIsDrawerOpen(true)}
          className={classes.hamburgerIcon}>
          <MenuIcon />
        </IconButton>
        <div className={classes.navbar}>
          <Button variant="contained" className={classes.button}>
            Biografía
          </Button>
          <Button variant="contained" className={classes.button}>
            Tecnologías
          </Button>
          <Button variant="contained" className={classes.button}>
            Proyectos
          </Button>
          <Button variant="contained" className={classes.button}>
            Herramientas
          </Button>
          <Button variant="contained" className={classes.button}>
            Contacto
          </Button>
        </div>
        <Drawer
          anchor={'right'}
          variant={'temporary'} //if and how easily the drawer can be closed
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          //onOpen={() => setIsDrawerOpen(true)} function that is called when the drawer should open
        >
          <Box>{/* The inside of the drawer */}</Box>
          <button>Biografía</button>
          <button>Tecnologías</button>
          <button>Proyectos</button>
          <button>Herramientas</button>
          <button>Contacto</button>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
