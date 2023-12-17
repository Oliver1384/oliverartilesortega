import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS, TEXT_COLORS } from '../colors'

const useStyles = makeStyles({
  section: {
    backgroundColor: PRIMARY_COLORS.section,
    color: TEXT_COLORS.primary,
    padding: '1rem',
    margin: '1rem',
    height: 'fit-content'
  },
  title: {
    fontFamily: 'GeistMonoBold'
  },
  content: {
  }
})

export const Biography = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Oliver Artiles</h1>
      <p className={classes.content}>
        Programador full stack.
      </p>
      <p>
        
      </p>
    </section>
  )
}
