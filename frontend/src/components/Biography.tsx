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
  content: {}
})

export const Biography = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Oliver Artiles</h1>
      <h2 className={classes.content}>Programador full stack.</h2>
      <p>
        Busco trabajar en proyectos que me supongan un reto y continuar mejorando como profesional,
        me gusta probar nuevas tecnologías.
      <p>
        Valoro mucho el trabajo en equipo, gracias a los compañeros de los diferentes grupos en los
        que he trabajado aprendí más rápido, tanto al ayudarme como al enseñar a otros.
      </p>
      </p>
    </section>
  )
}
