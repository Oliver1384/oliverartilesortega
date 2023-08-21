import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS, TEXT_COLORS } from '../colors'
import reactLogo from '../assets/react-logo.png'
import rustLogo from '../assets/rust-logo.png'
import typescriptLogo from '../assets/typescript-logo.png'
import { Article } from './ui/Article'

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
        <Article
          text={'He trabajado mucho con react, realizandonumerosos proyectos'}
          image={reactLogo}
        />
        <Article text={''} image={rustLogo} />
        <Article text={''} image={typescriptLogo} />
      </section>
    </>
  )
}
