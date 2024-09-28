import rustLogo from '../assets/logos/rust-logo.png'
import typescriptLogo from '../assets/logos/typescript-logo.png'
import phpLogo from '../assets/logos/php-logo.png'
import javaLogo from '../assets/logos/java-logo.png'
import sqlLogo from '../assets/logos/sql-logo.png'
import javascriptLogo from '../assets/logos/javascript-logo.png'
import cssLogo from '../assets/logos/css-logo.png'
import htmlLogo from '../assets/logos/html-logo.png'
import { Article } from './ui/Article'
import { Section } from './ui/Section'
import { SecondaryText } from './ui/SecondaryText'


export const Technologies = () => {
  return (
    <Section>
      <Article image={rustLogo} title={'Rust'}>
        <p>
          Es el lenguaje en el que más tiempo he programado para el back-end, al principio me resultó complicado,
          ya que es el primer lenguaje orientado a sistemas que estudiaba, pero a los pocos meses me gustó. Gracias
          a su sistema de tipos reporta una buena parte de los bugs al compilar, además de su rendimiento.
          He programado APIs con Actix y Axum en proyectos con arquitectura hexagonal y la implementación de tests,
          tanto de integración como unitarios.
        </p>
      </Article>
      <Article image={phpLogo} title={'PHP'}>
        <p>
          Las primeras APIs que realicé fueron con este lenguaje, siguiendo en su mayoría la arquitectura MVC. Junto con el
          framework Laravel me permitían montar una API en poco tiempo, llegue además a desarrollar frontales en este mismo entorno
          con el empleo del sistema de plantillas Blade.
        </p>
        <SecondaryText text={'*frameworks: Laravel.'} />
      </Article>
      <Article image={javaLogo} title={'Java'}>
        <p>
          Primer lenguaje con el que aprendí a programar, estuve unos dos años utilizándolo para aprender, lo he visto en aplicaciones 
          que llevan años en producción y necesitaban mantenimiento.
        </p>
      </Article>
      <Article title={'SQL'} image={sqlLogo}>
        <p>
          Domino su sintaxis, lo he utilizado con los sistemas de gestión de bases de datos MySQL, MariaDB y PostgreSQL. Lo aprendí escribiendo
          consultas directamente en consola SQL para crear estructuras de base de datos y manipular su contenido. Actualmente, hay bibliotecas
          o incluso aplicaciones que te permiten crear y manipular bases de datos sin escribir consultas SQL, ocasionando que pierdas aptitudes con
          respecto a la propia sintaxis SQL, no es mi caso, en mi trabajo he continuado de manera habitual escribiendo sentencias SQL, aparte del
          empleo de bibliotecas del propio lenguaje que se esté utilizando, para ahorrar tiempo y hacer el código más legible.
        </p>
      </Article>
      <Article image={cssLogo} title={'CSS'}>
        <p>
          Me gusta implementar los diseños más originales que me supongan un reto, he estilado múltiples webs siguiendo el principio
          de dispositivos pequeños primero. Generando aplicaciones responsive que se adapten a los diferentes dispositivos con un
          estilo visual atractivo, que atraiga la atención del usuario a las acciones principales de la web.
        </p>
        <SecondaryText text={'*frameworks: Tailwind CSS, Bootstrap.'} />
      </Article>
      <Article image={htmlLogo} title={'HTML'}>
        <p>
          Me preocupo por el uso adecuado de las diferentes etiquetas para estructurar la página, ya que facilita luego trabajar sobre esta
          y que las aplicaciones para la accesibilidad puedan interpretar la página de manera adecuada. Además, los motores de búsqueda
          posicionan mejor la web cuando contienen una estructura que sigue los estándares web.
        </p>
      </Article>
      <Article image={typescriptLogo} title={'Typescript'}>
        <p>
          En la mayoría de los proyectos de front-end programo en Typscript, tengo una amplia experiencia en este
          lenguaje, conociendo conceptos más avanzados como los 'Union and intersection types', 'Conditional types',
          'Mapped types', etc.
        </p>
      </Article>
      <Article image={javascriptLogo} title={'JavaScript'}>
        <p>
          Me mantengo actualizado de las novedades que van surgiendo en los diferentes navegadores. Conozco a fondo la mayoría
          de las características del lenguaje, fue de los primeros lenguajes que aprendí y lo he utilizado en mi día a día desde
          entonces, como es lógico en el desarrollo web.
        </p>
        <SecondaryText text={'*frameworks: React, NodeJS, Svelt, Jest, AngularJS.'} />
      </Article>
      <Article title={'Otros lenguajes'}>
        <p>
          Otros de los lenguajes que he estudiado en menor medida son Python, en alguna de las asignaturas de primer año de carrera
          y Ruby, del que mire cursos y documentación.
        </p>
        <SecondaryText text={'*frameworks: Ruby on Rails'} />
      </Article>
    </Section>
  )
}
