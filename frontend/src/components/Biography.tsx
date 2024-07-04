import { styled } from '@mui/system'

import { Contact } from './Contact'
import { Section } from './ui/Section'
import { Article } from './ui/Article'
import {SecondaryTitle} from './ui/SecondaryTitle'


const ProfileImage = styled('img')({
  borderRadius: '50%',
  maxWidth: '250px',
  order: '1',
  margin: '0 auto',
  '@media(min-width:790px)': {
    float: 'right',
    margin: '8px',
    order: 'inherit'
  }
})

export const Biography = () => {

  return (
    <Section>
      <Article title={'Oliver Artiles'}>
        <ProfileImage src={'profile.jpg'} />
        <SecondaryTitle>Programador full stack.</SecondaryTitle>
        <p>
          Busco trabajar en proyectos que me supongan un reto y continuar mejorando como profesional,
          me gusta probar nuevas tecnologías.
        </p>
        <p>
          Valoro mucho el trabajo en equipo, gracias a los compañeros de los diferentes grupos en los
          que he trabajado aprendí más rápido, tanto al ayudarme como al enseñar a otros.
        </p>
        <p>
          Descubrí la programación el primer año de carrera en telecomunicaciones, con java y python.
          Me cambié a un ciclo superior de desarrollo de aplicaciones web, donde asenté mis conocimientos
          previos orientados a mi profesión actual.
          Me considero autodidacta y disfruto programando.
        </p>
      </Article>
      <Contact />
    </Section>
  )
}
