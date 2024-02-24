import reactLogo from '../assets/react-logo.png'
import rustLogo from '../assets/rust-logo.png'
import typescriptLogo from '../assets/typescript-logo.png'
import { Article } from './ui/Article'
import { TEXT_COLORS } from '../colors'
import { styled } from '@mui/system'

const Section = styled('section')({
  color: TEXT_COLORS.primary,
  height: 'fit-content',
  fontSize: '18px',
  fontWeight: '400',
  marginTop: '1rem',
  fontFamily: 'GeistMonoRegular',
  '@media(min-width: 1024px)': {
    margin: '2rem',
  }
})

export const Technologies = () => {
  return (
    <Section>
      <Article image={reactLogo} title={'React'}>
        <p>
          Una parte importante de mi labor en el front-end la he realizado en React, por lo que
          me siento cómodo realizando proyectos con el. Nomalmete lo utilizo junto con typescript
          que me facilita crear un software más sencillo de depurar y escalar.
          Me gusta realizar tests para poder agregar nuevas funcionalidades sin descomponer el 
          código existente. Para tests unitarios he trabajado con Jest y para los test de integración
          Selenium.
         </p>
      </Article>
      <Article image={rustLogo} title={'Rust'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur? Ea
          exercitationem atque nisi? Facilis odio laborum vero excepturi possimus velit sapiente
          sint voluptatibus adipisci fugiat alias, voluptatem reprehenderit neque!
        </p>
      </Article>
      <Article image={typescriptLogo} title={'Typescript'}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quod earum explicabo
          obcaecati ducimus vitae non magnam, nesciunt repellendus sequi nostrum ad maiores quia
          tenetur! Amet rerum hic sed debitis!
        </p>
      </Article>
    </Section>
  )
}
