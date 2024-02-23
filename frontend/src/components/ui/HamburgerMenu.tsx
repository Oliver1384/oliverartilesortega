import { useState } from 'react'
import { styled } from '@mui/system'
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
} from '@mui/material'

import { PRIMARY_COLORS } from '../../colors'
import { PageState } from '../types'
import { MenuButton } from './MenuButton'

const NavBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  minWidth: '790px',
  fontFamily: 'GeistMonoBold',
  backgroundColor: PRIMARY_COLORS.section,
  '@media(max-width:790px)': {
    display: 'none'
  }

})

const mobileNavbar = new Map([
  ['Sobre mí', PageState.Biography],
  ['Tecnologías', PageState.Technologies],
  ['Proyectos', PageState.Projects],
  ['Herramientas', PageState.Tools],
  ['Contacto', PageState.Contact]
])

interface Props {
  onPageState: (state: PageState) => void
}

export const HamburgerMenu = ({ onPageState }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  return (
    <AppBar position={'static'}>
      <Toolbar sx={{ backgroundColor: PRIMARY_COLORS.section }}>
        <IconButton
          sx={{
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
          }}
          edge={'start'}
          onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <NavBar>
          <MenuButton onClick={() => onPageState(PageState.Biography)} text={'Sobre mí'} />
          <MenuButton onClick={() => onPageState(PageState.Technologies)} text={'Tecnologías'} />
          <MenuButton onClick={() => onPageState(PageState.Projects)} text={'Proyectos'} />
          <MenuButton onClick={() => onPageState(PageState.Tools)} text={'Herramientas'} />
          <MenuButton onClick={() => onPageState(PageState.Contact)} text={'Contacto'} />
        </NavBar>
        <Drawer
          anchor={'right'}
          variant={'temporary'}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}>
          <List sx={{
            backgroundColor: PRIMARY_COLORS.pageBackground,
            color: PRIMARY_COLORS.section,
            minHeight: '100%',
            '&.MuiList-root': {
              padding: '0px'
            }
          }}>
            <IconButton sx={{
              '&.MuiIconButton-root': {
                float: 'right'
              },
              '&.MuiIconButton-root:focus': {
                outline: '0px'
              }
            }} onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
            {Array.from(mobileNavbar).map(([text, state]) => (
              <ListItem key={text} disablePadding onClick={() => onPageState(state)}>
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
