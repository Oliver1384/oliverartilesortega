import { makeStyles } from '@mui/styles'
import reactLogo from '../assets/react-logo.png'
import rustLogo from '../assets/rust-logo.png'
import typescriptLogo from '../assets/typescript-logo.png'
import { Article } from './ui/Article'

const useStyles = makeStyles({
  section: {
    padding: '2rem',
    borderRadius: '5px'
  }
})

export const Technologies = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        <Article image={reactLogo} title={'React'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nisi iusto velit, veritatis nobis possimus eligendi ipsam, repudiandae officia in blanditiis alias id adipisci architecto! Placeat maiores deserunt aperiam mollitia?</p>
        </Article>
        <Article image={rustLogo} title={'Rust'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur? Ea exercitationem atque nisi? Facilis odio laborum vero excepturi possimus velit sapiente sint voluptatibus adipisci fugiat alias, voluptatem reprehenderit neque!</p>
        </Article>
        <Article image={typescriptLogo} title={'Typescript'}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quod earum explicabo obcaecati ducimus vitae non magnam, nesciunt repellendus sequi nostrum ad maiores quia tenetur! Amet rerum hic sed debitis!</p>
        </Article>
      </section>
    </>
  )
}
