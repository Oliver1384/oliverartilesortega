import { styled } from '@mui/system'
import { useState } from 'react'

import { PRIMARY_COLORS } from './colors'
import { Biography } from './components/Biography'
import { HamburgerMenu } from './components/ui/HamburgerMenu'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Tools } from './components/Tools'
import { PageState } from './components/types'


const Page = styled('body')({
  display: 'flex',
  justifyContent: 'center',
  width: '1240px',
  backgroundColor: PRIMARY_COLORS.pageBackground,
  '@media(max-width:1240px)': {
    width: '100vw'
  }
})

const Header = styled('header')({
  width: '1240px',
  '@media(max-width:1240px)': {
    width: '100vw'
  }
})

export const App = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.Biography)
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handlerChangePageState = (state: PageState) => {
    setIsDrawerOpen(false)
    setPageState(state)
  }

  return (
    <>
      <Header>
        <HamburgerMenu
          onChangePageState={handlerChangePageState}
          pageState={pageState}
          onSetIsDrawerOpen={setIsDrawerOpen}
          isDrawerOpen={isDrawerOpen}
        />
      </Header>
      <Page>
        {pageState === PageState.Biography && <Biography />}
        {pageState === PageState.Projects && <Projects />}
        {pageState === PageState.Technologies && <Technologies />}
        {pageState === PageState.Tools && <Tools />}
      </Page>
    </>
  )
}
