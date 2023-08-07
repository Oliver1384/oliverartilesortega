import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Button
} from '@mui/material'

import { PRIMARY_COLORS } from '../colors'

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
    },
    '&.MuiIconButton-root:focus': {
      outline: '0px auto -webkit-focus-ring-color'
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
  },
  drawer: {
    backgroundColor: PRIMARY_COLORS.pageBackground,
    color: PRIMARY_COLORS.section,
    minHeight: '100%',
    '&.MuiList-root': {
      padding: '0px'
    }
  },
  closeButton: {
    '&.MuiIconButton-root': {
      float: 'right'
    },
    '&.MuiIconButton-root:focus': {
      outline: '0px'
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
          variant={'temporary'}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <IconButton className={classes.closeButton} onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
            {['Biografía', 'Tecnologías', 'Proyectos', 'Herramientas', 'Contacto'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
