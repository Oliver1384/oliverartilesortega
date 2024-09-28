import { Link } from './ui/Link.tsx'
import { Article } from './ui/Article.tsx'

export const Certificates = () => {
  return (
    <Article title={'Certificados obtenidos'}>
      <Link href={'certificates/redux-saga-react.pdf'} target={'_blank'}>
        Redux Saga with React
      </Link>
      <br />
      <Link href={'certificates/asincrona-promesas-javascript.pdf'} target={'_blank'}>
        Programación asíncrona con promises en Javascript
      </Link>
      <br />
      <Link href={'certificates/clean-code.pdf'} target={'_blank'}>
        Clean code
      </Link>
      <br />
      <Link href={'certificates/javascript-avanzado.pdf'} target={'_blank'}>
        Javascript avanzado
      </Link>
      <br />
      <Link href={'certificates/manipulacion-DOM-javascript.pdf'} target={'_blank'}>
        Manipulación del DOM desde Javascript
      </Link>
      <br />
      <Link href={'certificates/metodologias-agiles.pdf'} target={'_blank'}>
        Metodologías ágiles
      </Link>
      <br />
      <Link href={'certificates/agile-uml.pdf'} target={'_blank'}>
        Agile UML
      </Link>
      <br />
      <Link href={'certificates/SCRUM.pdf'} target={'_blank'}>
        SCRUM
      </Link>
    </Article>
  )
}
