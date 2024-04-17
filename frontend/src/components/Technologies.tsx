import reactLogo from '../assets/react-logo.png'
import rustLogo from '../assets/rust-logo.png'
import typescriptLogo from '../assets/typescript-logo.png'
import phpLogo from '../assets/php-logo.png'
import javaLogo from '../assets/java-log.png'
import sqlLogo from '../assets/sql-log.png'
import javascriptLogo from '../assets/javascript-logo.png'
import { Article } from './ui/Article'
import { Section } from './ui/Section'


export const Technologies = () => {
  return (
    <Section>
      <Article image={rustLogo} title={'Rust'}>
        <p>
          Es el lenguaje en el que más tiempo he programado para el back-end, al principio me resultó complicado
          ya que es el primer lenguaje orientado a sistemas que estudiaba pero a los pocos meses me gustó. Gracias
          a su sistema de tipos reporta una buena parte de los bugs al compilar, además de su rendimiento.
          He programado apis con Actix y Axum en proyectos con arquitectura hexagonal y la implementación de tests,
          tanto de integración como unitarios.
        </p>
      </Article>
      <Article image={phpLogo} title={'PHP'}>
        <p>
          Las primeras apis que realicé fueron con este lenguaje, siguiendo en su mayoría la arquitectura MVC. Junto con el
          framework Laravel me permitían montar una api en poco tiempo, además llegue a desarrollar frontales en este mismo entorno
          con el empleo del sistema de plantillas blade.
        </p>
      </Article>
      <Article image={javaLogo} title={'Java'}>
        <p>
          Primer leguaje con el que aprendí a programar, estuve unos dos años utilizándolo para aprender, pero nunca lo he empleado
          en el entorno laboral.
        </p>
      </Article>
      <Article title={'SQL'} image={sqlLogo}>
        Domino su sintáxis, lo he utilizado con los sistemas de gestíon de bases de datos MySQL, MariaDB y PostgreSQL.
      </Article>
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
      <Article image={typescriptLogo} title={'Typescript'}>
        <p>
          En la mayoría de los proyectos de front-end programo en typscript, tengo una amplia experiencia en este
          lenguaje, conociendo conceptos más avanzados como los 'Union and intersection types', 'Conditional types',
          'Mapped types', etc.
        </p>
      </Article>
      <Article image={javascriptLogo} title={'JavaScript'}>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
        pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
        ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. 
      </Article>
      <Article title={'Otros lenguajes'}>
        <p>
          Otros de los lenguajes que he estudiado en menor medida son python, en alguna de las asignaturas de primer año de carrera
          y Ruby, del que miré cursos y documentación.
        </p>
      </Article>
    </Section>
  )
}
