import reactLogo from '../assets/react-logo.png'
import rustLogo from '../assets/rust-logo.png'
import typescriptLogo from '../assets/typescript-logo.png'
import { Article } from './ui/Article'
import { PRIMARY_COLORS, TEXT_COLORS } from '../colors'
import { styled } from '@mui/system'

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

export const Technologies = () => {
  return (
      <Section>
        <Article image={reactLogo} title={'React'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elMollitia, nisi iusto velit,
            veritatis nobis possimus eligendi ipsam, repudiandae officia in blanditiis alias id
            adipisci architecto! Placeat maiores deserunt aperiam mollitia?
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
