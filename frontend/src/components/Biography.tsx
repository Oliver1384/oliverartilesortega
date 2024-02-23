import { PRIMARY_COLORS, TEXT_COLORS } from '../colors'
import { styled } from '@mui/system';

const Section = styled('section')({
  backgroundColor: PRIMARY_COLORS.section,
  color: TEXT_COLORS.primary,
  padding: '1rem',
  margin: '1rem',
  height: 'fit-content',
  fontSize: '18px',
  fontWeight: '400',
  fontFamily: 'GeistMonoRegular'
})

const Title = styled('h1')({
    fontFamily: 'GeistMonoBold',
    fontSize: '24px'
})

const Description = styled('h2')({
    fontSize: '18px',
    fontFamily: 'GeistMonoSemiBold'
})

export const Biography = () => {

  return (
    <Section>
      <Title>Oliver Artiles</Title>
      <Description>Programador full stack.</Description>
      <p>
        Busco trabajar en proyectos que me supongan un reto y continuar mejorando como profesional,
        me gusta probar nuevas tecnologías.
      </p>
      <p>
        Valoro mucho el trabajo en equipo, gracias a los compañeros de los diferentes grupos en los
        que he trabajado aprendí más rápido, tanto al ayudarme como al enseñar a otros.
      </p>
    </Section>
  )
}
