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
  onChangePageState: (state: PageState) => void
  pageState: PageState
}

export const HamburgerMenu = ({ onChangePageState, pageState }: Props) => {
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
          <MenuButton
            isSelected={pageState === PageState.Biography}
            onClick={() => onChangePageState(PageState.Biography)}
            text={'Sobre mí'} />
          <MenuButton
            isSelected={pageState === PageState.Technologies}
            onClick={() => onChangePageState(PageState.Technologies)}
            text={'Tecnologías'} />
          <MenuButton
            isSelected={pageState === PageState.Projects}
            onClick={() => onChangePageState(PageState.Projects)}
            text={'Proyectos'} />
          <MenuButton
            isSelected={pageState === PageState.Tools}
            onClick={() => onChangePageState(PageState.Tools)}
            text={'Herramientas'} />
          <MenuButton
            isSelected={pageState === PageState.Contact}
            onClick={() => onChangePageState(PageState.Contact)}
            text={'Contacto'} />
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
              <ListItem key={text} disablePadding onClick={() => onChangePageState(state)}>
                <ListItemButton>
                  <ListItemText sx={{
                    '& > span.MuiTypography-root': {
                      fontFamily: state === pageState ? 'GeistMonoBold' : 'GeistMonoSemiBold'
                    },
                    textDecoration: state === pageState ? 'underline' : 'none'
                  }}
                    primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
