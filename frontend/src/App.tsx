import { PRIMARY_COLORS } from './colors'
import { Biography } from './components/Biography'
import { makeStyles } from '@mui/styles'
import { HamburgerMenu } from './components/ui/HamburgerMenu'
import { useState } from 'react'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Tools } from './components/Tools'
import { PageState } from './components/types'

const useStyles = makeStyles({
  page: {
    display: 'flex',
    justifyContent: 'center',
    width: '1240px',
    backgroundColor: PRIMARY_COLORS.pageBackground,
    '@media(max-width:1240px)': {
      width: '100vw'
    }
  },
  header: {
    width: '1240px',
    '@media(max-width:1240px)': {
      width: '100vw'
    },
  }
})

export const App = () => {
  const classes = useStyles()
  const [pageState, setPageState] = useState<PageState>(PageState.Projects)

  return (
    <>
      <header className={classes.header}>
        <HamburgerMenu onPageState={setPageState} />
      </header>
      <body className={classes.page}>
        {pageState === PageState.Biography && <Biography />}
        {pageState === PageState.Contact && <Contact />}
        {pageState === PageState.Projects && <Projects />}
        {pageState === PageState.Technologies && <Technologies />}
        {pageState === PageState.Tools && <Tools />}
      </body>
      <footer></footer>
    </>
  )
}
