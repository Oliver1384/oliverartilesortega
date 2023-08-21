import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS, TEXT_COLORS } from "../colors"

const useStyles = makeStyles({
  section: {
    backgroundColor: PRIMARY_COLORS.section,
    color: TEXT_COLORS.primary,
    padding: '2rem',
    borderRadius: '5px'
  }
})

export const Technologies = () => {
  const classes = useStyles() 
  return (
    <>
      <section className={classes.section}>
        
      </section>
    </>
  )
}
