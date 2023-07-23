import { PRIMARY_COLORS } from './colors'
import { Biography } from './components/Biography'
import { makeStyles } from '@mui/styles'
import { HamburgerMenu } from './components/HamburgerMenu'

const useStyles = makeStyles({
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1240px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: PRIMARY_COLORS.element
  }
})

export const App = () => {
  const classes = useStyles()
  return (
    <>
      <header>
        <HamburgerMenu />
      </header>
      <body className={classes.page}>
        <Biography />
      </body>
      <footer></footer>
    </>
  )
}
