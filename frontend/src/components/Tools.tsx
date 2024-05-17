import { Article } from './ui/Article'
import { Section } from './ui/Section'
import { Resources} from './Resources'

export const Tools = () => {
  return (
    <Section>
      <Article title={'Editores'}>
        <p>
          Comencé utilizando Visual Studio Core, pero la empresa actual me proporcionó licencia de intelliJ
          y me gustó mucho la herramienta, y es con la que más horas he trabajado. Cuando descubrí Vim y lo
          comencé a dominar con cierta soltura, en conbinación con los editores de Jetbrains se a convertido
          en mis herramientas para desarrollo favoritas. Para la programación en proyectos personales me gusta
          utilizar Lunar Vim.
        </p>
      </Article>

      <Article title={'Sistema operativo'}>
        <p>
          Me encanta trabajar en linux, mi distro favorita es Untuntu, conozco muy bien la estructura y comandos
          de este sistema operativo. El intérprete de comandos zsh con el multiplexor tmux me proporcionan eficiencia
          en la rutina de trabajo.
        </p>
      </Article>
      <Article title={'Otras aplicaciones'}>
        <p>
          Para evitar que el software dependa del sistema en el que estoy desarrollando utilizo Docker,
          he concluido cursos sobre este y llevo bastante tiempo utilizándolo. Junto con docker-compose,
          elimina los conflictos de los diferentes entornos de desarrollo a la hora de colaborar en un equipo,
          evitando además, instalar dependencias en el propio equipo.
        </p>

        <p>
          El control de versiones de los proyectos con Git, prefiero utilizarlo por terminal por lo que conozco los comando esenciales
          para el ciclo de desarrollo habitual.
        </p>
      </Article>

      <Article title={'Metodologías de desarrollo'}>
        <p>
          Estoy habituado a trabajar en equipos de 3 a 5 miembros, siguiendo la metodología SCRUM,
          dividiendo los objetivos en tareas y gestionando el proyecto con ramas mediante Git.
        </p>
      </Article>
      <Article title={'Hardware'}>
        <p>
          Siempre me ha gustado el mundo de la tecnología y aprender y experimentar con lo nuevo que va llegando al mercado.
          Antes de dedicarme plenamente al desarrollo, me gustaba montar y reparar ordenadores, conozco bien los diferentes
          componentes y como se encuentra el mercado actual. Ahora solo lo sigo por hobby y cambio o monto ordenadores por
          interés personal o para ayudar algún amigo o familiar. Desde que aprendí a programar disfruto más el desarrollo web
          y esto se ha convertido en algo secundario.
        </p>
      </Article>
      <Article title={'Libros y documentación'}>
        <p>
          A la hora de aprender prefiero leer a ver videos, me resulta más cómodo, es por ello que una buena parte de lo que
          conozco proviene de algún libro o de la documentación de alguna tecnología.
        </p>
        <Resources/>
      </Article>
    </Section>
  )
}
